package callback

import (
	"context"
	"crypto/subtle"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/sessions"
	"github.com/techygrrrl/sf6-combo-buildrrr/api_utils"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/twitch"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	cookieSecret := os.Getenv("COOKIE_SECRET")
	errorUrl := os.Getenv("TWITCH_OAUTH_ERROR")
	clientId := os.Getenv("TWITCH_CLIENT_ID")
	clientSecret := os.Getenv("TWITCH_CLIENT_SECRET")
	callbackUrl := os.Getenv("TWITCH_CALLBACK_URL")
	baseUrl := os.Getenv("BASE_URL")
	if clientId == "" || clientSecret == "" || callbackUrl == "" || errorUrl == "" || cookieSecret == "" || baseUrl == "" {
		w.Write([]byte("server misconfigured"))
		return
	}

	// Cookies & sessions
	cookieStore := sessions.NewCookieStore([]byte(cookieSecret))
	session, err := cookieStore.Get(r, "sf6-combo-buildrrr.session")
	if err != nil {
		log.Println("corrupted session. generated new.", err)
		err = nil
	}

	defer func() {
		if err := session.Save(r, w); err != nil {
			log.Println("error saving session:", err)
		}
	}()

	code := r.URL.Query().Get("code")
	if code == "" {
		log.Println("no code")
		http.Redirect(w, r, errorUrl, http.StatusTemporaryRedirect)
		return
	}

	stateQuery := r.URL.Query().Get("state")
	if stateQuery == "" {
		log.Println("no state")
		http.Redirect(w, r, errorUrl, http.StatusTemporaryRedirect)
		return
	}

	stateCookie, ok := session.Values["sf6-combo-buildrrr.state"].(string)
	if !ok {
		log.Println("no state challenge")
		http.Redirect(w, r, errorUrl, http.StatusTemporaryRedirect)
		return
	}

	if len(stateCookie) != len(stateQuery) {
		log.Println("invalid state param")
		http.Redirect(w, r, errorUrl, http.StatusTemporaryRedirect)
		return
	}

	compareResult := subtle.ConstantTimeCompare([]byte(stateCookie), []byte(stateQuery))
	if compareResult == 0 {
		log.Println("invalid state param. same length but different values.")
		http.Redirect(w, r, errorUrl, http.StatusTemporaryRedirect)
		return
	}

	config := oauth2.Config{
		ClientID:     clientId,
		ClientSecret: clientSecret,
		Scopes:       []string{},
		Endpoint:     twitch.Endpoint,
		RedirectURL:  callbackUrl,
	}
	token, err := config.Exchange(context.Background(), code)
	if err != nil {
		log.Println("error exchanging token:", err.Error())
		http.Redirect(w, r, errorUrl, http.StatusTemporaryRedirect)
		return
	}

	session.Values["sf6-combo-buildrrr.access_token"] = token.AccessToken
	err = session.Save(r, w)
	if err != nil {
		log.Println("error saving session:", err.Error())
		http.Redirect(w, r, errorUrl, http.StatusTemporaryRedirect)
		return
	}

	twitchClient := api_utils.NewTwitchApiClient(token.AccessToken, clientId)
	user, err := twitchClient.GetUser()
	if err != nil {
		log.Println("error fetching user:", err.Error())
		http.Redirect(w, r, errorUrl, http.StatusTemporaryRedirect)
		return
	}

	db, err := api_utils.NewDatabaseClient()
	if err != nil {
		log.Println("error saving user:", err.Error())
		http.Redirect(w, r, errorUrl, http.StatusTemporaryRedirect)
		return
	}
	repo := api_utils.NewUserRepository(db)
	err = repo.CreateOrUpdate(api_utils.DBUser{
		TwitchUserId:      user.Id,
		TwitchUsername:    user.Login,
		TwitchDisplayName: user.DisplayName,
		ProfileImageURL:   user.ProfileImageUrl,
	})
	if err != nil {
		log.Println("error saving user:", err.Error())
		http.Redirect(w, r, errorUrl, http.StatusTemporaryRedirect)
		return
	}

	http.Redirect(w, r, baseUrl, http.StatusTemporaryRedirect)
}
