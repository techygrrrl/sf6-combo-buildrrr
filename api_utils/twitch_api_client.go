package api_utils

import (
	"encoding/json"
	"fmt"
	"io"
	"log"
	"net/http"
)

const (
	twitchIdBaseUrl  = "https://id.twitch.tv/"
	twitchApiBaseUrl = "https://api.twitch.tv/helix/"
)

// TwitchApiClient
// An API client that wraps endpoints used internally. Not intended to be used as a library.
type TwitchApiClient struct {
	AccessToken string
	ClientId    string
}

// NewTwitchApiClient
// Get a new Twitch API client instance
func NewTwitchApiClient(accessToken string, clientId string) TwitchApiClient {
	return TwitchApiClient{
		AccessToken: accessToken,
		ClientId:    clientId,
	}
}

// region Errors

type TwitchApiError struct {
	status  int
	message string
}

func (e TwitchApiError) Error() string {
	return fmt.Sprintf("twitch API error (%d) %s", e.status, e.message)
}

func (e TwitchApiError) StatusCode() int {
	return e.status
}

func newTwitchApiError(statusCode int, message string) TwitchApiError {
	return TwitchApiError{statusCode, message}
}

// endregion Errors

// region ID endpoint calls

// GetUser - Returns the user data of the owner of the access token
func (t TwitchApiClient) GetUser() (*GetUserResponseItem, error) {
	httpClient := http.Client{}
	req, err := t.newHelixGetRequest("users")
	if err != nil {
		return nil, err
	}

	res, err := httpClient.Do(req)
	if err != nil {
		return nil, err
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			log.Println(err.Error())
		}
	}(res.Body)

	var getUsersResponse GetUsersResponse

	err = json.NewDecoder(res.Body).Decode(&getUsersResponse)
	if err != nil {
		return nil, err
	}
	if len(getUsersResponse.Data) == 0 {
		return nil, newTwitchApiError(res.StatusCode, "No items returned for Get User")
	}

	return &getUsersResponse.Data[0], nil
}

// endregion Helix endpoint calls

// region Request creators

// For the Helix API endpoints
// Generates a new request with auth headers for the provided path
func (t TwitchApiClient) newHelixGetRequest(path string) (*http.Request, error) {
	req, err := http.NewRequest(http.MethodGet, twitchApiBaseUrl+path, nil)
	if err != nil {
		return nil, err
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", t.AccessToken))
	req.Header.Set("Client-Id", t.ClientId)

	return req, nil
}

// For the Helix API endpoints
// Generates a new request with auth headers for the provided path
func (t TwitchApiClient) newHelixPostRequest(path string, body io.Reader) (*http.Request, error) {
	req, err := http.NewRequest(http.MethodPost, twitchApiBaseUrl+path, body)
	if err != nil {
		return nil, err
	}

	req.Header.Set("Content-Type", "application/json")
	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", t.AccessToken))
	req.Header.Set("Client-Id", t.ClientId)

	return req, nil
}

// For the ID endpoints
// Generates a new request with auth headers for the provided path
func (t TwitchApiClient) newIdGetRequest(path string) (*http.Request, error) {
	req, err := http.NewRequest(http.MethodGet, twitchIdBaseUrl+path, nil)
	if err != nil {
		return nil, err
	}

	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", t.AccessToken))
	req.Header.Set("Client-Id", t.ClientId)

	return req, nil
}

// Generates a new request with auth headers for the provided path
func (t TwitchApiClient) newIdPostRequest(path string, body io.Reader) (*http.Request, error) {
	req, err := http.NewRequest(http.MethodPost, twitchIdBaseUrl+path, body)
	if err != nil {
		return nil, err
	}

	req.Header.Set("Authorization", fmt.Sprintf("Bearer %s", t.AccessToken))
	req.Header.Set("Client-Id", t.ClientId)

	return req, nil
}

// endregion Request creators

// ValidateToken A token must be validated by Twitch hourly.
// A token can be invalid for various reasons, e.g. expiry or revocation.
// If a token is invalid, try refreshing it. If it's still invalid, stop trying.
// Ref: https://dev.twitch.tv/docs/authentication/validate-tokens/
func (t TwitchApiClient) ValidateToken() error {
	httpClient := http.Client{}
	req, err := t.newIdGetRequest("oauth2/validate")
	if err != nil {
		return err
	}

	res, err := httpClient.Do(req)
	if err != nil {
		return err
	}
	defer func(Body io.ReadCloser) {
		err := Body.Close()
		if err != nil {
			log.Println(err.Error())
		}
	}(res.Body)

	if res.StatusCode >= 400 {
		var invalidTokenResponse TokenErrorResponse
		err = json.NewDecoder(res.Body).Decode(&invalidTokenResponse)
		if err != nil {
			return err
		}

		return newTwitchApiError(res.StatusCode, invalidTokenResponse.Message)
	}

	var validateTokenSuccess ValidateTokenSuccessResponse
	err = json.NewDecoder(res.Body).Decode(&validateTokenSuccess)
	if err != nil {
		return err
	}

	return nil
}
