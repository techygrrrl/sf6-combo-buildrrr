package api_utils

import (
	"fmt"
	"net/http"
	"os"

	"github.com/gorilla/sessions"
)

// Authenticate - The real auth function
func Authenticate(w http.ResponseWriter, r *http.Request) (*DBUser, error) {
	clientId := os.Getenv("TWITCH_CLIENT_ID")
	cookieSecret := os.Getenv("COOKIE_SECRET")
	if cookieSecret == "" || clientId == "" {
		return nil, fmt.Errorf("server misconfigured")
	}

	// Cookies & sessions
	cookieStore := sessions.NewCookieStore([]byte(cookieSecret))
	session, err := cookieStore.Get(r, "sf6-combo-buildrrr.session")
	if err != nil {
		fmt.Printf("corrupted session %s -- generated new", err)
		err = nil
	}

	// ensure we flush the csrf challenge even if the request is ultimately unsuccessful
	defer func() {
		if err := session.Save(r, w); err != nil {
			fmt.Printf("error saving session: %s", err)
		}
	}()

	tokenCookie := session.Values["sf6-combo-buildrrr.access_token"]
	accessToken, ok := tokenCookie.(string)
	if !ok {
		return nil, fmt.Errorf("error reading token from session")
	}

	twitchClient := NewTwitchApiClient(accessToken, clientId)
	user, err := twitchClient.GetUser()
	if err != nil {
		return nil, err
	}

	db, err := NewDatabaseClient()
	if err != nil {
		return nil, err
	}
	repo := NewUserRepository(db)
	dbUser, err := repo.FindByTwitchId(user.Id)
	if err != nil {
		return nil, err
	}

	return dbUser, nil
}

// Authenticate - for development without actually authenticating
// func Authenticate(w http.ResponseWriter, r *http.Request) (*DBUser, error) {
// 	db, err := NewDatabaseClient()
// 	if err != nil {
// 		return nil, err
// 	}
// 	repo := NewUserRepository(db)
// 	dbUser, err := repo.FindByTwitchId("1234567") // or your Twitch user ID that corresponds to an entry in your database
// 	if err != nil {
// 		return nil, err
// 	}
// 	return dbUser, nil
// }
