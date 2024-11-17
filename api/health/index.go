package health

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
		w.Write(api_utils.ErrorJson(err.Error()))
		return
	}

	repo := api_utils.NewHealthRepository(db)

	healthCheck, err := repo.GetNow()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("database error"))
		return
	}

	res, err := json.Marshal(healthCheck)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("cannot serialize"))

		fmt.Println(err.Error())
		return
	}

	w.Write(res)
}
