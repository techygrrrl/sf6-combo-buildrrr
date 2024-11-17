package api_utils

import (
	"encoding/json"
	"log"
)

func ErrorJson(message string) []byte {
	res, err := json.Marshal(map[string]string{
		"error": message,
	})
	if err != nil {
		log.Fatal(err)
	}

	return res
}
