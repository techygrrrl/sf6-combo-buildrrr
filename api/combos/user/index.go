package save

import (
	"context"
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/techygrrrl/sf6-combo-buildrrr/api_utils"
)

var ctx = context.Background()

func Json(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	twitchUserId := r.URL.Query().Get("id")
	if twitchUserId == "" {
		w.WriteHeader(http.StatusBadRequest)
		w.Write(api_utils.ErrorJson("missing twitch user ID"))
		return
	}

	db, err := api_utils.NewDatabaseClient()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("database error"))
	}
	repo := api_utils.NewCombosRepository(db)

	// Find the combo
	combos, err := repo.FindCombosForUser(twitchUserId)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("failed to get combo"))
		fmt.Printf("failed to get combo: %s", err.Error())
		return
	}

	asJson, err := json.Marshal(map[string]any{
		"combos": combos,
	})
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("json error"))
	}

	w.Write(asJson)
}
