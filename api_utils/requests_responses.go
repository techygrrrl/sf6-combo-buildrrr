package api_utils

// region Twitch ID endpoint responses

// GetUserResponseItem - A single user item in the [GetUsersResponse].
// Many irrelevant fields are omitted as this service is intended for internal use only.
type GetUserResponseItem struct {
	Id              string `json:"id"`
	Login           string `json:"login"`
	DisplayName     string `json:"display_name"`
	Description     string `json:"description"`
	ProfileImageUrl string `json:"profile_image_url"`
}

// GetUsersResponse - The response from "Get Users"
// Ref: https://dev.twitch.tv/docs/api/reference/#get-users
type GetUsersResponse struct {
	Data []GetUserResponseItem `json:"data"`
}

// ValidateTokenSuccessResponse - When validating a token succeeds
// Ref: https://dev.twitch.tv/docs/authentication/validate-tokens/
type ValidateTokenSuccessResponse struct {
	Login     string   `json:"login"`
	UserId    string   `json:"user_id"`
	Scopes    []string `json:"scopes"`
	ExpiresIn int      `json:"expires_in"`
}

type TokenErrorResponse struct {
	Status  int    `json:"status"`
	Message string `json:"message"`
}

// type AuthorizationResponse struct {
// 	AccessToken  string   `json:"access_token"`
// 	RefreshToken string   `json:"refresh_token"`
// 	ExpiresIn    int64    `json:"expires_in"`
// 	Scope        []string `json:"scope"`
// 	TokenType    string   `json:"token_type"`
// }

// type RefreshTokenResponse struct {
// 	AccessToken  string   `json:"access_token"`
// 	RefreshToken string   `json:"refresh_token"`
// 	Scope        []string `json:"scope"`
// 	TokenType    string   `json:"token_type"`
// }

// endregion Twitch ID endpoint responses

// region Twitch Helix endpoint responses

// region General

// HelixErrorResponse - Common error response where status and message may be present
type HelixErrorResponse struct {
	Status  int    `json:"status"`
	Message string `json:"message"`
}

// WrappedHelixResponse - Common response format where the data of type T is wrapped
// Includes additional fields total, total_cost, max_total_cost which may or may not be relevant.
type WrappedHelixResponse[T any] struct {
	Data []T `json:"data"`
	//Total        int `json:"total"`
	//TotalCost    int `json:"total_cost"`
	//MaxTotalCost int `json:"max_total_cost"`
}

// endregion General

// endregion Twitch Helix endpoint responses
