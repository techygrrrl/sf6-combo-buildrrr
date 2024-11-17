package api_utils

import (
	"fmt"
	"os"

	"github.com/jmoiron/sqlx"
	_ "github.com/lib/pq"
)

func NewDatabaseClient() (*sqlx.DB, error) {
	connectionString := os.Getenv("DATABASE_URL")
	if connectionString == "" {
		return nil, fmt.Errorf("missing environment variable: DATABASE_URL")
	}
	db, err := sqlx.Open("postgres", connectionString)
	if err != nil {
		return nil, err
	}

	return db, nil
}
