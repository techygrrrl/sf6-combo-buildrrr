package logout

import (
	"log"
	"net/http"
	"os"

	"github.com/gorilla/sessions"
)

func Handler(w http.ResponseWriter, r *http.Request) {
	cookieSecret := os.Getenv("COOKIE_SECRET")
	baseUrl := os.Getenv("BASE_URL")
	errorUrl := os.Getenv("TWITCH_OAUTH_ERROR")
	if cookieSecret == "" || errorUrl == "" || baseUrl == "" {
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

	session.Options.MaxAge = -1
	err = session.Save(r, w)
	if err != nil {
		log.Println("failed to delete session")
		http.Redirect(w, r, errorUrl, http.StatusTemporaryRedirect)
		return
	}

	http.Redirect(w, r, baseUrl, http.StatusTemporaryRedirect)

	// We could also revoke the token but it's not necessary
}
