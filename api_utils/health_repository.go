package api_utils

import (
	"fmt"
	"time"

	"github.com/jmoiron/sqlx"
)

type HealthRepository struct {
	db *sqlx.DB
}

type DbHealth struct {
	Service string    `json:"service"`
	Date    time.Time `db:"now" json:"date"`
}

func NewHealthRepository(dbClient *sqlx.DB) HealthRepository {
	return HealthRepository{dbClient}
}

func (h *HealthRepository) GetNow() (*DbHealth, error) {
	var rows []DbHealth
	err := h.db.Select(&rows, "SELECT now()")
	if err != nil {
		return nil, err
	}

	if len(rows) == 0 {
		return nil, fmt.Errorf("cannot connect to database")
	}

	now := rows[0]
	now.Service = "sf6-combo-buildrrr"

	return &now, nil
}
