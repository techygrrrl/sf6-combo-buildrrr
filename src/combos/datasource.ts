import {
  Character,
  CharacterId,
  Combo,
  CombosDataSource,
  Input,
  Move,
} from './models.ts'

const commonInputs = {
  // motions
  motion_DOWN: {
    text: '↓',
    image: 'key-d',
  },
  motion_DOWN_FORWARD: {
    text: '↘',
    image: 'key-dr',
  },
  motion_FORWARD: {
    text: '→',
    image: 'key-r',
  },

  // punches
  LIGHT_PUNCH: {
    text: 'LP',
    image: 'icon_punch_l',
  },
  MEDIUM_PUNCH: {
    text: 'MP',
    image: 'icon_punch_m',
  },
  HEAVY_PUNCH: {
    text: 'HP',
    image: 'icon_punch_h',
  },

  // kicks
  LIGHT_KICK: {
    text: 'LK',
    image: 'icon_kick_l',
  },
  MEDIUM_KICK: {
    text: 'MK',
    image: 'icon_kick_m',
  },
  HEAVY_KICK: {
    text: 'HK',
    image: 'icon_kick_h',
  },

  // misc.
  plus: {
    text: '+',
    image: 'key-plus',
  },
  //todo: neutral, spd, etc.
}

const combosDataSource: CombosDataSource = {
  characters: [
    {
      id: 'cammy',
      name: 'Cammy',
    },
    {
      id: 'manon',
      name: 'Manon',
    },
    {
      id: 'juri',
      name: 'Juri',
    },
    // {
    //   id: 'aki',
    //   name: 'A.K.I.',
    // },
    // {
    //   id: 'chunli',
    //   name: 'Chun-Li',
    // },
    // {
    //   id: 'kimberly',
    //   name: 'Kimberly',
    // },
    // {
    //   id: 'marisa',
    //   name: 'Marisa',
    // },
    // {
    //   id: 'lily',
    //   name: 'Lily',
    // },
    // {
    //   id: 'gouki',
    //   name: 'Akuma',
    // },
    // {
    //   id: 'vega',
    //   name: 'M. Bison',
    // },
    // {
    //   id: 'blanka',
    //   name: 'Blanka',
    // },
    // {
    //   id: 'deejay',
    //   name: 'DeeJay',
    // },
    // {
    //   id: 'dhalsim',
    //   name: 'Dhalsim',
    // },
    // {
    //   id: 'ed',
    //   name: 'Ed',
    // },
    // {
    //   id: 'guile',
    //   name: 'Guile',
    // },
    // {
    //   id: 'honda',
    //   name: 'E. Honda',
    // },
    // {
    //   id: 'jamie',
    //   name: 'Jamie',
    // },
    // {
    //   id: 'jp',
    //   name: 'JP',
    // },
    // {
    //   id: 'ken',
    //   name: 'Ken',
    // },
    // {
    //   id: 'luke',
    //   name: 'Luke',
    // },
    // {
    //   id: 'rashid',
    //   name: 'Rashid',
    // },
    // {
    //   id: 'ryu',
    //   name: 'Ryu',
    // },
    // {
    //   id: 'terry',
    //   name: 'Terry',
    // },
    // {
    //   id: 'zangief',
    //   name: 'Zangief',
    // },
  ],
  moves: {
    cammy: [
      // 2LP
      {
        character: 'cammy',
        name: 'Crouching light punch',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [commonInputs.motion_DOWN, commonInputs.LIGHT_PUNCH],
      },

      // 2MP
      {
        character: 'cammy',
        name: 'Crouching medium punch',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [commonInputs.motion_DOWN, commonInputs.MEDIUM_PUNCH],
      },

      // 2HP
      {
        character: 'cammy',
        name: 'Crouching heavy punch',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [commonInputs.motion_DOWN, commonInputs.HEAVY_PUNCH],
      },

      // Spiral Arrow (LK)
      {
        character: 'cammy',
        name: 'Spiral Arrow (L)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_KICK,
        ],
      },

      // Spiral Arrow (MK)
      {
        character: 'cammy',
        name: 'Spiral Arrow (M)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
        ],
      },

      // Spiral Arrow (HK)
      {
        character: 'cammy',
        name: 'Spiral Arrow (H)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
    ],

    juri: [
      {
        character: 'juri',
        name: 'Fuhajin',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [commonInputs.motion_DOWN],
      },
    ],
  },
}

const move: Move = {
  character: 'cammy',
  name: 'Spiral Arrow (M)',
  helpText: '',
  resources: {
    drive: 0,
    super: 0,
  },
  inputs: [
    {
      text: '↓',
      image: 'key-d',
    },
    {
      text: 'HP',
      image: 'icon_punch_h',
    },
    /*{
      text: '↘',
      image: 'key-dr',
    },
    {
      text: '→',
      image: 'key-r',
    },
    {
      text: '+',
      image: 'key-plus',
    },
    {
      text: 'MK',
      image: 'icon_kick_m',
      suffix: 'M',
    },*/
  ],
}

export const getAllCharacters = (): Character[] => {
  return combosDataSource.characters
}

export const findCharacter = (id: CharacterId): Character => {
  return getAllCharacters().find((c) => c.id === id)!
}

export const getAllMovesForCharacter = (id: CharacterId): Move[] => {
  return combosDataSource.moves[id]
}

export const getSampleCombo = (): Combo => {
  return {
    character: 'cammy',
    moves: [
      // 2HP
      {
        character: 'cammy',
        name: 'Crouching heavy punch',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [commonInputs.motion_DOWN, commonInputs.HEAVY_PUNCH],
      },

      // 2MP
      {
        character: 'cammy',
        name: 'Crouching medium punch',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [commonInputs.motion_DOWN, commonInputs.MEDIUM_PUNCH],
      },

      // HK Spiral Arrow
      {
        character: 'cammy',
        name: 'Spiral Arrow (H)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.HEAVY_KICK,
        ],
      },
    ],
  }
}
