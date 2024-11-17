# Contributing

- [Requirements](#requirements)
- [Front-end](#front-end)
- [Back-end](#back-end)
  - [Environment variables](#environment-variables)
  - [Linting](#linting)


## Requirements

- Go v1.20 (or whatever is in `.go-version`)
- Postgres
- Node v20.9.0 (or whatever is in `.nvmrc`)

Optional:

- Set up a Twitch app in the developer console


## Front-end

Uses TypeScript, React, React Router, Tailwind, Redux, Axios on Vercel.

## Back-end

Uses serverless Go lang on Vercel.

### Environment variables

Create a file called `.envrc` and use [direnv](https://direnv.net/) to load it into the environment.

```sh
export DATABASE_URL="<todo>" # A postgres connection URL
export VITE_API_BASE_URL="http://localhost:40078"
export COOKIE_SECRET="<todo>" # A random string for signing cookies for gorilla sessions (optional)
export TWITCH_CLIENT_ID="<todo>" # Create a Twitch app and assign the client ID (optional)
export TWITCH_CLIENT_SECRET="<todo>" # Create a Twitch app and assign the client secret (optional)
export TWITCH_CALLBACK_URL="http://localhost:40078/api/auth/callback" # The callback URL the Twitch app will use (optional)
export TWITCH_OAUTH_ERROR="http://localhost:40078/auth-error" # (optional)
export TWITCH_OAUTH_SUCCESS="http://localhost:40078" # (optional)
```

You can also disable auth in the local project to avoid setting up a Twitch app:

1. Go into `./api_utils/auth_middleware.go` and comment out the real function and comment in the fake one. Make sure not to commit this change.
2. Connect to your Postgres instance
3. Run the migrations in the `./scripts/sql` directory manually to create the schema. You'll notice that the sample user one is commented out since this is optional.
4. If you're disabling the authentication to not setup a Twitch app, you can run the commented out migration in `./scripts/sql/003_sample_user.sql` to create a sample user so that the database is ready for saving URLs with the fake auth middleware.

### Linting

Use [goimports](https://pkg.go.dev/golang.org/x/tools/cmd/goimports) for formatting and linting, and [gci](https://github.com/daixiang0/gci) for import order.

Install it:

    go install golang.org/x/tools/cmd/goimports@v0.22
    go install github.com/daixiang0/gci@v0.13.5

Run it:

    goimports -w . && gci write .
