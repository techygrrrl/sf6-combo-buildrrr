-- up
CREATE TABLE combos(
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	slug text NOT NULL PRIMARY KEY,
	twitch_user_id text REFERENCES users(twitch_user_id),
	combo JSONB
);

-- down
-- DROP TABLE combos;
