import { ComboState } from '../screens/CreateComboScreen/combo-state'

export type CharacterId = string

export type Character = {
  id: CharacterId
  name: string
}

export type Input = {
  text: string
  image: string
  prefix?: string
  suffix?: string
}

export type Move = {
  // character: CharacterId
  name: string
  helpText: string
  resources: {
    drive: number
    super: number
  }
  inputs: Input[]
  width?: number
}

export type Combo = {
  character: CharacterId
  moves: Move[]

  // todo: damage?
  /*damage: {
    standard: number
    counter: number
    punishCounter: number
  }*/
  // todo: other conditions? e.g. corner, etc.
}

export type AugmentedCharacter = Character & {
  disabled?: boolean
}

export type CombosDataSource = {
  characters: AugmentedCharacter[]
  moves: {
    [key: CharacterId]: Move[]
  }
}

export type ApiCombo = {
  combo: ComboState
  created_at: string
  twitch_user_id: string
  slug: string
}
