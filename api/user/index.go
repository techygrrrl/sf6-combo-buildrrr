package profile

import (
	"encoding/json"
	"log"
	"net/http"

	"github.com/techygrrrl/sf6-combo-buildrrr/api_utils"
)

func Json(w http.ResponseWriter, r *http.Request) {
	w.Header().Set("Content-Type", "application/json")

	if r.Method == "OPTIONS" {
		w.WriteHeader(http.StatusOK)
		return
	}

	user, err := api_utils.Authenticate(w, r)
	if err != nil {
		log.Println("failed to authenticate", err)
		w.WriteHeader(http.StatusUnauthorized)
		w.Write(api_utils.ErrorJson("unauthorized"))
		return
	}

	asJson, err := json.Marshal(user)
	if err != nil {
		log.Println("failed to serialize JSON", err)
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("unknown error"))
	}

	w.Write(asJson)
}
