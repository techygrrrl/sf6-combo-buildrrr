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

	comboId := r.URL.Query().Get("id")
	if comboId == "" {
		w.WriteHeader(http.StatusBadRequest)
		w.Write(api_utils.ErrorJson("missing combo ID"))
		return
	}

	db, err := api_utils.NewDatabaseClient()
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("database error"))
	}
	repo := api_utils.NewCombosRepository(db)

	err = repo.DeleteCombo(comboId, user.TwitchUserId)
	if err != nil {
		w.WriteHeader(http.StatusForbidden)
		w.Write(api_utils.ErrorJson("cannot delete a combo you didn't create"))
		fmt.Println(err.Error())
		return
	}

	asJson, err := json.Marshal(map[string]any{
		"success": true,
	})
	if err != nil {
		w.WriteHeader(http.StatusInternalServerError)
		w.Write(api_utils.ErrorJson("json error"))
	}

	w.Write(asJson)
}
