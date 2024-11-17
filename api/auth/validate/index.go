package validate

import (
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

	_, err := api_utils.Authenticate(w, r)
	if err != nil {
		log.Println("auth error", err.Error())
		w.WriteHeader(http.StatusUnauthorized)
		w.Write(api_utils.ErrorJson("unauthorized"))
		return
	}

	// todo: better response
	w.Write([]byte("{}"))
}
