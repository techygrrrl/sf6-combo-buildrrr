import { PayloadAction } from '@reduxjs/toolkit'
import { GetUserProfile } from '../../providers/api-provider/requests-responses'
import { createAppSlice } from './app-slice'

type CurrentUserState = {
  user: null | GetUserProfile
}

const initialState: CurrentUserState = {
  user: null,
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
  }),
  selectors: {
    selectCurrentUserUser: (state) => state.user,
  },
})

// Selectors
export const { selectCurrentUserUser } = currentUserSlice.selectors

// Actions
export const { setUser: actionSetCurrentUserUser } = currentUserSlice.actions
