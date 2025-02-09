package feed

import (
	"encoding/json"
	"fmt"
	"net/http"

	"github.com/techygrrrl/sf6-combo-buildrrr/api_utils"
)

func Json(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	db, err := api_utils.NewDatabaseClient()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("database error"))
	}
	repo := api_utils.NewCombosRepository(db)

	// todo: support pagination
	combos, err := repo.LatestCombos(100, 0)
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
