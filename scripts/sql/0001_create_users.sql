-- up
CREATE TABLE users(
  created_at TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
	twitch_user_id text PRIMARY KEY,
	twitch_username text NOT NULL,
	twitch_display_name text NOT NULL,
	profile_image_url text NOT NULL,
	rolename TEXT NOT NULL DEFAULT 'standard'
);

-- down
-- DROP TABLE users;
