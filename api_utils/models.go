package api_utils

type ComboWithNotes struct {
	Notes string `json:"notes"`
	Combo Combo  `json:"combo"`
}

type Combo struct {
	Character string `json:"character"`
	Moves     []Move `json:"moves"`
}

type Move struct {
	Name      string        `json:"name"`
	HelpText  string        `json:"helpText"`
	Resources MoveResources `json:"resources"`
	Inputs    []Input       `json:"inputs"`
	Width     *float32      `json:"width"`
}

type MoveResources struct {
	Drive int `json:"drive"`
	Super int `json:"super"`
}

type Input struct {
	Text   string  `json:"text"`
	Image  string  `json:"image"`
	Prefix *string `json:"prefix"`
	Suffix *string `json:"suffix"`
}

// UserProfile is the public profile for users
type UserProfile struct {
	Id              string `json:"id"`
	Username        string `json:"username"`
	DisplayName     string `json:"display_name"`
	ProfileImageURL string `json:"profile_image_url"`
}
