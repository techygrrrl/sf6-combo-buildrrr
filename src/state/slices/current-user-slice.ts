import { PayloadAction } from '@reduxjs/toolkit'
import { GetUserProfile } from '../../providers/api-provider/requests-responses'
import { createAppSlice } from './app-slice'

type CurrentUserState = {
  user: null | GetUserProfile
  disclaimerDismissed: boolean
}

const initialState: CurrentUserState = {
  user: null,
  disclaimerDismissed: false,
}

export const currentUserSlice = createAppSlice({
  name: 'current-user',
  initialState,
  reducers: (create) => ({
    setUser: create.reducer(
      (state, action: PayloadAction<null | GetUserProfile>) => {
        state.user = action.payload
      },
    ),
    setDisclaimerDismissed: create.reducer(
      (state, action: PayloadAction<boolean>) => {
        state.disclaimerDismissed = action.payload
      },
    ),
  }),
  selectors: {
    selectCurrentUserUser: (state) => state.user,
    selectDisclaimerDismissed: (state) => state.disclaimerDismissed,
  },
})

// Selectors
export const {
  selectCurrentUserUser,
  selectDisclaimerDismissed,
} = currentUserSlice.selectors

// Actions
export const {
  setUser: actionSetCurrentUserUser,
  setDisclaimerDismissed: actionSetDisclaimerDismissed,
} = currentUserSlice.actions
