package api_utils

import (
	"fmt"
	"time"

	"github.com/jmoiron/sqlx"
)

type UserRepository struct {
	db *sqlx.DB
}

type DBUser struct {
	CreatedAt         *time.Time `db:"created_at" json:"created_at"`
	TwitchUserId      string     `db:"twitch_user_id" json:"id"`
	TwitchUsername    string     `db:"twitch_username" json:"login"`
	TwitchDisplayName string     `db:"twitch_display_name" json:"display_name"`
	ProfileImageURL   string     `db:"profile_image_url" json:"profile_image_url"`
	Role              string     `db:"rolename" json:"rolename"`
}

func NewUserRepository(dbClient *sqlx.DB) UserRepository {
	return UserRepository{dbClient}
}

func (u *UserRepository) FindByTwitchId(twitchId string) (*DBUser, error) {
	var users []DBUser
	err := u.db.Select(&users, "SELECT * from users WHERE twitch_user_id = $1", twitchId)
	if err != nil {
		return nil, err
	}
	if len(users) == 0 {
		return nil, fmt.Errorf("no user found")
	}
	user := users[0]

	return &user, nil
}

func (u *UserRepository) CreateOrUpdate(user DBUser) error {
	_, err := u.db.NamedExec(`INSERT INTO users (twitch_user_id, twitch_username, twitch_display_name, profile_image_url)
	VALUES (:twitch_user_id, :twitch_username, :twitch_display_name, :profile_image_url)
	ON CONFLICT (twitch_user_id) DO UPDATE
	SET twitch_user_id = :twitch_user_id,
		twitch_username = :twitch_username,
		twitch_display_name = :twitch_display_name,
		profile_image_url = :profile_image_url
	`, user)
	if err != nil {
		return err
	}

	return nil
}
