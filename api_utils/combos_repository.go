package api_utils

import (
	"encoding/json"
	"fmt"
	"time"

	"github.com/google/uuid"
	"github.com/jmoiron/sqlx"
	"github.com/jmoiron/sqlx/types"
)

type CombosRepository struct {
	db *sqlx.DB
}

type DBCombo struct {
	Slug         string         `db:"slug" json:"slug"`
	CreatedAt    *time.Time     `db:"created_at" json:"created_at"`
	TwitchUserId string         `db:"twitch_user_id" json:"twitch_user_id"`
	Combo        types.JSONText `db:"combo" json:"combo"`
}

func NewCombosRepository(dbClient *sqlx.DB) CombosRepository {
	return CombosRepository{dbClient}
}

func (c *CombosRepository) CreateCombo(twitchUserId string, comboJson json.RawMessage) (string, error) {
	slug := uuid.NewString()

	_, err := c.db.NamedExec(
		"INSERT INTO combos (slug, twitch_user_id, combo) VALUES (:slug, :twitch_user_id, :combo) RETURNING *",
		&DBCombo{
			Slug:         slug,
			TwitchUserId: twitchUserId,
			Combo:        types.JSONText(comboJson),
		},
	)

	if err != nil {
		return "", err
	}

	return slug, nil
}

func (c *CombosRepository) FindCombosForUser(twitchId string) ([]DBCombo, error) {
	var combos []DBCombo
	err := c.db.Select(&combos, "SELECT * from combos WHERE twitch_user_id = $1 ORDER BY created_at DESC", twitchId)
	if err != nil {
		return nil, err
	}

	return combos, nil
}

func (c *CombosRepository) LatestCombos(limit int, offset int) ([]DBCombo, error) {
	var combos []DBCombo
	err := c.db.Select(&combos, "SELECT * from combos ORDER BY created_at DESC LIMIT $1 OFFSET $2", limit, offset)
	if err != nil {
		return nil, err
	}

	return combos, nil
}

func (c *CombosRepository) GetCombo(slug string) (*DBCombo, error) {
	var combos []DBCombo
	err := c.db.Select(&combos, "SELECT * from combos WHERE slug = $1", slug)
	if err != nil {
		return nil, err
	}
	if len(combos) == 0 {
		return nil, fmt.Errorf("no combo found")
	}
	combo := combos[0]
	return &combo, nil
}

func (c *CombosRepository) DeleteCombo(slug string, twitchUserId string) error {
	_, err := c.db.Exec(`DELETE FROM combos WHERE slug = $1 AND twitch_user_id = $2`, slug, twitchUserId)
	if err != nil {
		return err
	}

	return nil
}
