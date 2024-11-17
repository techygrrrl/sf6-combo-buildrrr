package auth

import (
	"crypto/rand"
	"encoding/hex"
	"log"
	"net/http"
	"os"

	"github.com/gorilla/sessions"
	"golang.org/x/oauth2"
	"golang.org/x/oauth2/twitch"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	cookieSecret := os.Getenv("COOKIE_SECRET")
	errorUrl := os.Getenv("TWITCH_OAUTH_ERROR")
	clientId := os.Getenv("TWITCH_CLIENT_ID")
	clientSecret := os.Getenv("TWITCH_CLIENT_SECRET")
	callbackUrl := os.Getenv("TWITCH_CALLBACK_URL")
	if clientId == "" || clientSecret == "" || callbackUrl == "" || errorUrl == "" || cookieSecret == "" {
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

	config := oauth2.Config{
		ClientID:     clientId,
		ClientSecret: clientSecret,
		Scopes:       []string{},
		Endpoint:     twitch.Endpoint,
		RedirectURL:  callbackUrl,
	}

	// Generate state
	var tokenBytes [255]byte
	if _, err := rand.Read(tokenBytes[:]); err != nil {
		w.Write([]byte("could not generate session"))
		return
	}

	state := hex.EncodeToString(tokenBytes[:])
	session.Values["sf6-combo-buildrrr.state"] = state
	err = session.Save(r, w)
	if err != nil {
		w.Write([]byte("could not save session"))
		return
	}

	url := config.AuthCodeURL(state)
	http.Redirect(w, r, url, http.StatusTemporaryRedirect)
}
