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
  character: CharacterId
  name: string
  helpText: string
  resources: {
    drive: 0 | 1 | 2 | 3 | 4 | 5
    super: 0 | 1 | 2 | 3
  }
  inputs: Input[]
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

export type CombosDataSource = {
  characters: Character[]
  moves: {
    [key: CharacterId]: Move[]
  }
}
