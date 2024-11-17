package profile

import (
	"encoding/json"
	"net/http"

	"github.com/techygrrrl/sf6-combo-buildrrr/api_utils"
)

func Json(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	twitchId := r.URL.Query().Get("id")
	if twitchId == "" {
		w.WriteHeader(http.StatusBadRequest)
		w.Write(api_utils.ErrorJson("missing twitch ID"))
		return
	}

	db, err := api_utils.NewDatabaseClient()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("unknown error"))
		return
	}
	repo := api_utils.NewUserRepository(db)
	dbUser, err := repo.FindByTwitchId(twitchId)
	if err != nil {
		w.WriteHeader(http.StatusNotFound)
		w.Write(api_utils.ErrorJson("user not found"))
		return
	}

	profile := api_utils.UserProfile{
		Id:              dbUser.TwitchUserId,
		Username:        dbUser.TwitchUsername,
		DisplayName:     dbUser.TwitchDisplayName,
		ProfileImageURL: dbUser.ProfileImageURL,
	}

	asJson, err := json.Marshal(profile)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("json error"))
	}

	w.Write(asJson)
}
