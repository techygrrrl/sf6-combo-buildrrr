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

	if r.Method != "POST" {
		w.WriteHeader(http.StatusMethodNotAllowed)
		w.Write(api_utils.ErrorJson("unsupported request method"))
		return
	}

	user, err := api_utils.Authenticate(w, r)
	if err != nil {
		w.WriteHeader(http.StatusUnauthorized)
		w.Write(api_utils.ErrorJson(err.Error()))
		return
	}

	var requestBody api_utils.ComboWithNotes
	err = json.NewDecoder(r.Body).Decode(&requestBody)
	if err != nil {
		w.WriteHeader(http.StatusBadRequest)
		w.Write(api_utils.ErrorJson("bad request"))

		fmt.Printf("error decoding request body: %s", err.Error())

		return
	}

	if len(requestBody.Notes) > 200 {
		w.WriteHeader(http.StatusBadRequest)
		w.Write(api_utils.ErrorJson("bad request: notes can only be 200 characters"))
		return
	}

	// Save combo
	db, err := api_utils.NewDatabaseClient()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("database error"))
	}
	repo := api_utils.NewCombosRepository(db)

	comboJson, err := json.Marshal(requestBody)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("serialization error"))
		return
	}
	slug, err := repo.CreateCombo(user.TwitchUserId, comboJson)
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("failed to create combo"))
		fmt.Printf("failed to create combo: %s", err.Error())
		return
	}

	res, err := json.Marshal(map[string]string{
		"combo": slug,
	})
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("cannot serialize"))

		fmt.Println(err.Error())

		return
	}

	w.Write(res)
}
