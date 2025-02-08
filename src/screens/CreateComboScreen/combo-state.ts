import { Reducer } from 'react'
import { CharacterId, Combo, Move } from '../../combos/models.ts'

export type ComboState = {
  combo: Combo
  notes: string
}

export type ComboActionAddMove = {
  type: 'add-move'
  payload: Move
}

export type ComboActionRemoveMoveAtIndex = {
  type: 'remove-move-at-index'
  payload: number
}

export type ComboActionSetCharacter = {
  type: 'set-character'
  payload: CharacterId
}

export type ComboActionSetNote = {
  type: 'set-note'
  payload: string
}

export const initialComboState = (): ComboState => ({
  notes: '',
  combo: {
    character: 'mai',
    moves: [],
  },
})

export type ComboStateAction =
  | ComboActionSetCharacter
  | ComboActionAddMove
  | ComboActionRemoveMoveAtIndex
  | ComboActionSetNote

export type ComboStateReducer = Reducer<ComboState, ComboStateAction>

export const comboStateReducer: ComboStateReducer = (state, action) => {
  switch (action.type) {
    case 'add-move':
      return {
        ...state,
        combo: {
          ...state.combo,
          moves: [...state.combo.moves, action.payload],
        },
      }

    case 'remove-move-at-index':
      return {
        ...state,
        combo: {
          ...state.combo,
          moves: state.combo.moves.filter((_, idx) => idx !== action.payload),
        },
      }

    case 'set-character':
      return {
        ...state,
        combo: {
          ...state.combo,
          character: action.payload,
          moves: [],
        },
      }

    case 'set-note':
      return {
        ...state,
        notes: action.payload,
      }

    default:
      return state
  }
}
