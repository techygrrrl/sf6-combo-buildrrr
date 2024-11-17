import { Character, CharacterId, CombosDataSource, Move } from './models.ts'

const commonInputs = {
  // motions
  motion_UP_BACK: {
    text: '↖',
    image: 'key-ul',
  },
  motion_UP_FORWARD: {
    text: '↗',
    image: 'key-ur',
  },
  motion_UP: {
    text: '↑',
    image: 'key-u',
  },
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
  motion_DOWN_BACK: {
    text: '↙',
    image: 'key-dl',
  },
  motion_BACK: {
    text: '←',
    image: 'key-l',
  },
  motion_NEUTRAL: {
    text: 'N',
    image: 'key-neutral',
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
  PUNCH: {
    text: 'P',
    image: 'icon_punch',
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
  KICK: {
    text: 'K',
    image: 'icon_kick',
  },

  // misc.
  plus: {
    text: '+',
    image: 'key-plus',
  },
  cancel: {
    text: '▶',
    image: 'arrow_3',
  },
  or: {
    text: 'or',
    image: 'key-or',
  },
  // todo: spd, etc.
}

const getCommonDriveMoves = (): Move[] => {
  return [
    {
      name: 'Parry Drive Rush',
      helpText: 'During a drive parry',
      resources: {
        drive: 1.5,
        super: 0,
      },
      inputs: [
        commonInputs.MEDIUM_PUNCH,
        commonInputs.MEDIUM_KICK,
        commonInputs.motion_FORWARD,
        commonInputs.motion_FORWARD,
      ],
      width: 50,
    },
    {
      name: 'Drive Rush Cancel',
      helpText: 'While connecting with a special cancellable move',
      resources: {
        drive: 3,
        super: 0,
      },
      inputs: [
        commonInputs.motion_FORWARD,
        commonInputs.motion_FORWARD,
        commonInputs.or,
        commonInputs.motion_NEUTRAL,
        commonInputs.MEDIUM_PUNCH,
        commonInputs.MEDIUM_KICK,
      ],
      width: 50,
    },
    {
      name: 'Drive Impact',
      helpText: '',
      resources: {
        drive: 1,
        super: 0,
      },
      inputs: [commonInputs.HEAVY_PUNCH, commonInputs.HEAVY_KICK],
    },
  ]
}

const getCommonButtonMoves = (): Move[] => {
  return [
    // Standing
    // 5LP
    {
      name: 'Standing light punch',
      helpText: '',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.LIGHT_PUNCH],
      width: 33.333,
    },

    // 5MP
    {
      name: 'Standing medium punch',
      helpText: '',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.MEDIUM_PUNCH],
      width: 33.333,
    },

    // 5HP
    {
      name: 'Standing heavy punch',
      helpText: '',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.HEAVY_PUNCH],
      width: 33.333,
    },

    // 5LK
    {
      name: 'Standing light kick',
      helpText: '',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.LIGHT_KICK],
      width: 33.333,
    },

    // 5MK
    {
      name: 'Standing medium kick',
      helpText: '',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.MEDIUM_KICK],
      width: 33.333,
    },

    // 5HK
    {
      name: 'Standing heavy kick',
      helpText: '',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.HEAVY_KICK],
      width: 33.333,
    },
    // Jumping
    // 5LP
    {
      name: 'Jumping light punch',
      helpText: 'During a jump',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.LIGHT_PUNCH],
      width: 33.333,
    },

    // 5MP
    {
      name: 'Jumping medium punch',
      helpText: 'During a jump',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.MEDIUM_PUNCH],
      width: 33.333,
    },

    // 5HP
    {
      name: 'Jumping heavy punch',
      helpText: 'During a jump',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.HEAVY_PUNCH],
      width: 33.333,
    },

    // 5LK
    {
      name: 'Jumping light kick',
      helpText: 'During a jump',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.LIGHT_KICK],
      width: 33.333,
    },

    // 5MK
    {
      name: 'Jumping medium kick',
      helpText: 'During a jump',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.MEDIUM_KICK],
      width: 33.333,
    },

    // 5HK
    {
      name: 'Jumping heavy kick',
      helpText: 'During a jump',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.HEAVY_KICK],
      width: 33.333,
    },

    // Crouching

    // 2LP
    {
      name: 'Crouching light punch',
      helpText: '',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.motion_DOWN, commonInputs.LIGHT_PUNCH],
      width: 33.333,
    },

    // 2MP
    {
      name: 'Crouching medium punch',
      helpText: '',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.motion_DOWN, commonInputs.MEDIUM_PUNCH],
      width: 33.333,
    },

    // 2HP
    {
      name: 'Crouching heavy punch',
      helpText: '',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.motion_DOWN, commonInputs.HEAVY_PUNCH],
      width: 33.333,
    },

    // 2LK
    {
      name: 'Crouching light kick',
      helpText: '',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.motion_DOWN, commonInputs.LIGHT_KICK],
      width: 33.333,
    },

    // 2MK
    {
      name: 'Crouching medium kick',
      helpText: '',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.motion_DOWN, commonInputs.MEDIUM_KICK],
      width: 33.333,
    },

    // 2HK
    {
      name: 'Crouching heavy kick',
      helpText: '',
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.motion_DOWN, commonInputs.HEAVY_KICK],
      width: 33.333,
    },
  ]
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
    {
      id: 'aki',
      name: 'A.K.I.',
      disabled: true,
    },
    {
      id: 'chunli',
      name: 'Chun-Li',
      disabled: true,
    },
    {
      id: 'kimberly',
      name: 'Kimberly',
    },
    {
      id: 'marisa',
      name: 'Marisa',
      disabled: true,
    },
    {
      id: 'lily',
      name: 'Lily',
      disabled: true,
    },
    {
      id: 'gouki',
      name: 'Akuma',
      disabled: true,
    },
    {
      id: 'vega',
      name: 'M. Bison',
      disabled: true,
    },
    {
      id: 'blanka',
      name: 'Blanka',
      disabled: true,
    },
    {
      id: 'deejay',
      name: 'DeeJay',
      disabled: true,
    },
    {
      id: 'dhalsim',
      name: 'Dhalsim',
      disabled: true,
    },
    {
      id: 'ed',
      name: 'Ed',
      disabled: true,
    },
    {
      id: 'guile',
      name: 'Guile',
      disabled: true,
    },
    {
      id: 'honda',
      name: 'E. Honda',
      disabled: true,
    },
    {
      id: 'jamie',
      name: 'Jamie',
      disabled: true,
    },
    {
      id: 'jp',
      name: 'JP',
      disabled: true,
    },
    {
      id: 'ken',
      name: 'Ken',
      disabled: true,
    },
    {
      id: 'luke',
      name: 'Luke',
      disabled: true,
    },
    {
      id: 'rashid',
      name: 'Rashid',
      disabled: true,
    },
    {
      id: 'ryu',
      name: 'Ryu',
    },
    {
      id: 'terry',
      name: 'Terry',
      disabled: true,
    },
    {
      id: 'zangief',
      name: 'Zangief',
      disabled: true,
    },
  ],
  moves: {
    manon: [
      ...getCommonButtonMoves(),

      // Unique moves
      {
        name: 'Révérence',
        helpText: '',
        inputs: [
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Tomoe Derrière',
        helpText: '',
        inputs: [
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'À Terre',
        helpText: '',
        inputs: [
          commonInputs.MEDIUM_PUNCH,
          commonInputs.cancel,
          commonInputs.MEDIUM_KICK,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'En Haut',
        helpText: '',
        inputs: [
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
          commonInputs.cancel,
          commonInputs.MEDIUM_KICK,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Temps Lié',
        helpText: '',
        inputs: [
          commonInputs.HEAVY_PUNCH,
          commonInputs.cancel,
          commonInputs.HEAVY_PUNCH,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Allongé',
        helpText: '',
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
          commonInputs.cancel,
          commonInputs.HEAVY_PUNCH,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },

      // Specials
      {
        name: 'Manège Doré (L)',
        helpText: '',
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.LIGHT_PUNCH,
        ],
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Manège Doré (M)',
        helpText: '',
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Manège Doré (H)',
        helpText: '',
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Rond-point (L)',
        helpText: '',
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_KICK,
        ],
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Rond-point (M)',
        helpText: '',
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
        ],
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Rond-point (H)',
        helpText: '',
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Rond-point (OD)',
        helpText: '',
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.KICK,
          commonInputs.KICK,
        ],
        resources: {
          drive: 2,
          super: 0,
        },
      },
      {
        name: 'Dégagé (L)',
        helpText: '',
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.LIGHT_KICK,
        ],
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Dégagé (M)',
        helpText: '',
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
        ],
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Dégagé (H)',
        helpText: '',
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Dégagé (OD)',
        helpText: '',
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.KICK,
          commonInputs.KICK,
        ],
        resources: {
          drive: 2,
          super: 0,
        },
      },
      {
        name: 'Renversé (L)',
        helpText: '',
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_PUNCH,
        ],
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Renversé (M)',
        helpText: '',
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Renversé (H)',
        helpText: '',
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Renversé (OD)',
        helpText: '',
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
          commonInputs.PUNCH,
        ],
        resources: {
          drive: 2,
          super: 0,
        },
      },
      {
        name: 'Grand Fouetté',
        helpText: 'During Renversé',
        inputs: [commonInputs.KICK],
        resources: {
          drive: 0,
          super: 0,
        },
      },

      // Supers
      {
        name: 'Arabesque',
        helpText: '',
        resources: {
          drive: 0,
          super: 1,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.KICK,
        ],
      },
      {
        name: 'Étoile',
        helpText: '',
        resources: {
          drive: 0,
          super: 2,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.KICK,
        ],
      },
      {
        name: 'Pas de Deux',
        helpText: '',
        resources: {
          drive: 0,
          super: 3,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
      },

      ...getCommonDriveMoves(),
    ],

    cammy: [
      ...getCommonButtonMoves(),

      // Unique moves
      {
        name: 'Lift Uppercut',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
      },
      {
        name: 'Delayed Ripper',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Assault Blade',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Lift Combination',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
          commonInputs.cancel,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Swing Combination',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.HEAVY_PUNCH,
          commonInputs.cancel,
          commonInputs.HEAVY_KICK,
        ],
      },

      // Specials

      // Spiral Arrow (LK)
      {
        name: 'Spiral Arrow (L)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
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
        name: 'Spiral Arrow (M)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
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
        name: 'Spiral Arrow (H)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Spiral Arrow (H) (charged)',
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
      {
        name: 'Spiral Arrow (OD)',
        helpText: '',
        resources: {
          drive: 2,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.KICK,
          commonInputs.KICK,
        ],
      },

      // DP
      {
        name: 'Cannon Spike (L)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_KICK,
        ],
      },
      {
        name: 'Cannon Spike (M)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
        ],
      },
      {
        name: 'Cannon Spike (H)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Cannon Spike (H) (charged)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Cannon Spike (OD)',
        helpText: '',
        resources: {
          drive: 2,
          super: 0,
        },
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.KICK,
          commonInputs.KICK,
        ],
      },

      {
        name: 'Quick Spin Knuckle (L)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.LIGHT_PUNCH,
        ],
      },
      {
        name: 'Quick Spin Knuckle (M)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
      },
      {
        name: 'Quick Spin Knuckle (H)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Quick Spin Knuckle (OD)',
        helpText: '',
        resources: {
          drive: 2,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.PUNCH,
          commonInputs.PUNCH,
        ],
      },
      // dive kick
      {
        name: 'Cannon Strike',
        helpText: 'During a forward jump',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.KICK,
        ],
      },
      {
        name: 'Cannon Strike (OD)',
        helpText: 'During a forward jump',
        resources: {
          drive: 2,
          super: 0,
        },
        width: 50,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.KICK,
          commonInputs.KICK,
        ],
      },
      {
        name: 'Hooligan Combination (L)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_PUNCH,
        ],
      },
      {
        name: 'Hooligan Combination (M)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
      },
      {
        name: 'Hooligan Combination (H)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Hooligan Combination (H) (charged)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Hooligan Combination (OD)',
        helpText: '',
        resources: {
          drive: 2,
          super: 0,
        },
        width: 50,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
          commonInputs.PUNCH,
        ],
      },
      {
        name: "Razor's Edge Slicer",
        helpText: 'During Hooligan Combination',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [],
      },
      {
        name: 'Hooligan Cannon Strike',
        helpText: 'During Hooligan Combination',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [commonInputs.KICK],
      },
      {
        name: 'Reverse Edge',
        helpText: 'During Hooligan Combination',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [commonInputs.motion_DOWN, commonInputs.KICK],
      },
      {
        name: 'Fatal Leg Twister',
        helpText: 'During Hooligan Combination',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [commonInputs.LIGHT_PUNCH, commonInputs.LIGHT_KICK],
      },

      // Supers
      {
        name: 'Spin Drive Smasher',
        helpText: '',
        resources: {
          drive: 0,
          super: 1,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.KICK,
        ],
      },
      {
        name: 'Killer Bee Spin',
        helpText: '',
        resources: {
          drive: 0,
          super: 2,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
      },
      {
        name: 'Aerial Killer Bee Spin',
        helpText: 'During a forward jump',
        resources: {
          drive: 0,
          super: 2,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
      },
      {
        name: 'Delta Red Assault',
        helpText: '',
        resources: {
          drive: 0,
          super: 3,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
      },

      ...getCommonDriveMoves(),
    ],

    juri: [
      ...getCommonButtonMoves(),

      // Unique
      {
        name: 'Kyosesho',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
      },
      {
        name: 'Senkai Kick',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
        ],
      },
      {
        name: 'Renko Kick',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Korenzan',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Death Crest',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.MEDIUM_PUNCH,
          commonInputs.cancel,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
          commonInputs.cancel,
          commonInputs.HEAVY_PUNCH,
        ],
      },

      {
        name: 'Fuhajin (L)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.LIGHT_KICK,
        ],
      },
      {
        name: 'Fuhajin (M)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
        ],
      },
      {
        name: 'Fuhajin (H)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Fuhajin (OD)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.KICK,
          commonInputs.KICK,
        ],
      },
      {
        name: 'Saihasho',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_KICK,
        ],
      },
      {
        name: 'Ankensatsu',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
        ],
      },
      {
        name: 'Go Ohsatsu',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },

      //
      {
        name: 'Tensenrin (L)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_PUNCH,
        ],
      },
      {
        name: 'Tensenrin (M)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
      },
      {
        name: 'Tensenrin (H)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Tensenrin (OD)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
          commonInputs.PUNCH,
        ],
      },

      // dive kick
      {
        name: 'Shiku-sen',
        helpText: 'During a forward jump',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.KICK,
        ],
      },
      {
        name: 'Shiku-sen (OD)',
        helpText: 'During a forward jump',
        resources: {
          drive: 2,
          super: 0,
        },
        width: 50,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.KICK,
          commonInputs.KICK,
        ],
      },

      // Supers
      {
        name: 'Sakkai Fuhazan',
        helpText: '',
        resources: {
          drive: 0,
          super: 1,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.KICK,
        ],
      },
      {
        name: 'Feng Shui Engine',
        helpText: '',
        resources: {
          drive: 0,
          super: 2,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
      },
      {
        name: 'Kaisen Dankai Raku',
        helpText: '',
        resources: {
          drive: 0,
          super: 3,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.KICK,
        ],
      },

      ...getCommonDriveMoves(),
    ],

    aki: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    chunli: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    kimberly: [
      ...getCommonButtonMoves(),

      // Unique moves
      {
        name: 'Water Slicer Slide',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
        ],
      },
      {
        name: 'Windmill Kick',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },

        inputs: [
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Hisen Kick',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Step up',
        helpText: 'After Hisen Kick',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [commonInputs.motion_UP_BACK],
      },
      {
        name: 'Step up',
        helpText: 'After Hisen Kick',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [commonInputs.motion_UP],
      },
      {
        name: 'Step up',
        helpText: 'After Hisen Kick',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [commonInputs.motion_UP_FORWARD],
      },
      {
        name: 'Elbow Drop',
        helpText: 'At peak of forward jump',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
      },
      {
        name: 'Bushin Tiger Fangs',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.MEDIUM_PUNCH,
          commonInputs.cancel,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Bushin Prism Strikes',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.LIGHT_PUNCH,
          commonInputs.cancel,
          commonInputs.MEDIUM_PUNCH,
          commonInputs.cancel,
          commonInputs.HEAVY_PUNCH,
          commonInputs.cancel,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Bushin Hellchain',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.LIGHT_PUNCH,
          commonInputs.cancel,
          commonInputs.MEDIUM_PUNCH,
          commonInputs.cancel,
          commonInputs.motion_DOWN,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
          commonInputs.cancel,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Bushin Hellchain Throw',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.LIGHT_PUNCH,
          commonInputs.cancel,
          commonInputs.MEDIUM_PUNCH,
          commonInputs.cancel,
          commonInputs.motion_DOWN,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
          commonInputs.cancel,
          commonInputs.motion_DOWN,
          commonInputs.HEAVY_KICK,
        ],
      },

      // Specials
      {
        name: 'Bushin Senpukyaku (L)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.LIGHT_KICK,
        ],
      },
      {
        name: 'Bushin Senpukyaku (M)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
        ],
      },
      {
        name: 'Bushin Senpukyaku (H)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Aerial Bushin Senpukyaku (L)',
        helpText: 'During a forward jump',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.LIGHT_KICK,
        ],
      },
      {
        name: 'Aerial Bushin Senpukyaku (M)',
        helpText: 'During a forward jump',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
        ],
      },
      {
        name: 'Aerial Bushin Senpukyaku (H)',
        helpText: 'During a forward jump',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Sprint',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.KICK,
        ],
      },
      {
        name: 'Sprint (OD)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.KICK,
          commonInputs.KICK,
        ],
      },
      {
        name: 'Torso Cleaver',
        helpText: 'During Sprint',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [commonInputs.LIGHT_KICK],
      },
      {
        name: 'Shadow Slide',
        helpText: 'During Sprint',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [commonInputs.MEDIUM_KICK],
      },
      {
        name: 'Neck Hunter',
        helpText: 'During Sprint',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [commonInputs.HEAVY_KICK],
      },
      {
        name: 'Arc Step',
        helpText: 'Automatically activates after getting close with Sprint',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [],
      },
      {
        name: 'Bushin Izuna Otoshi',
        helpText: 'During Arc Step (during Sprint)',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [commonInputs.PUNCH],
      },
      {
        name: 'Bushin Hojin Kick',
        helpText: 'During Arc Step (during Sprint)',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [commonInputs.KICK],
      },
      {
        name: 'Vagabond Edge (L)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_PUNCH,
        ],
      },
      {
        name: 'Vagabond Edge (M)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
      },
      {
        name: 'Vagabond Edge (H)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Vagabond Edge (OD)',
        helpText: '',
        resources: {
          drive: 2,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
          commonInputs.PUNCH,
        ],
      },
      {
        name: 'Hidden Variable',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
      },
      {
        name: 'Hidden Variable (OD)',
        helpText: '',
        resources: {
          drive: 2,
          super: 0,
        },
        width: 50,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.PUNCH,
          commonInputs.PUNCH,
        ],
      },
      {
        name: 'Nue Twister',
        helpText: 'During jump when near opponent',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
      },
      {
        name: 'Nue Twister (OD)',
        helpText: 'During jump when near opponent',
        resources: {
          drive: 2,
          super: 0,
        },
        width: 50,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
          commonInputs.PUNCH,
        ],
      },

      // Supers
      {
        name: 'Bushin Beats',
        helpText: '',
        resources: {
          drive: 0,
          super: 1,
        },
        width: 66.666,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.KICK,
        ],
      },
      {
        name: 'Bushin Thunderous Beats',
        helpText: 'Hold kick for more damage (1 bomb)',
        resources: {
          drive: 0,
          super: 1,
        },
        width: 33.333,
        inputs: [commonInputs.KICK],
      },
      {
        name: 'Soaring Bushin Scramble',
        helpText: 'During forward jump',
        resources: {
          drive: 0,
          super: 2,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
      },
      {
        name: 'Ninja Star Cypher',
        helpText: '',
        resources: {
          drive: 0,
          super: 3,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
      },

      ...getCommonDriveMoves(),
    ],

    marisa: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    lily: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    gouki: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    vega: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    blanka: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    deejay: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    dhalsim: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    ed: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    guile: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    honda: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    jamie: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    jp: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    ken: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    luke: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    rashid: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    ryu: [
      ...getCommonButtonMoves(),

      // Unique moves
      {
        name: 'Solar Plexus Strike',
        helpText: '',
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Short Uppercut',
        helpText: '',
        inputs: [
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Axe Kick',
        helpText: '',
        inputs: [
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Whirlwind Kick',
        helpText: '',
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'High Double Strike',
        helpText: '',
        inputs: [
          commonInputs.HEAVY_PUNCH,
          commonInputs.cancel,
          commonInputs.HEAVY_KICK,
        ],
        width: 50,
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Fuwa Triple Strike',
        helpText: '',
        inputs: [
          commonInputs.MEDIUM_PUNCH,
          commonInputs.cancel,
          commonInputs.LIGHT_KICK,
          commonInputs.cancel,
          commonInputs.HEAVY_KICK,
        ],
        width: 50,
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Denjin cancel',
        helpText: 'From High Double Strike or Fuwa Triple Strike',
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },

      // Specials
      {
        name: 'Hadoken (L)',
        helpText: 'Changes when in Denjin Charge state',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_PUNCH,
        ],
      },
      {
        name: 'Hadoken (M)',
        helpText: 'Changes when in Denjin Charge state',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
      },
      {
        name: 'Hadoken (H)',
        helpText: 'Changes when in Denjin Charge state',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Hadoken (OD)',
        helpText: 'Changes when in Denjin Charge state',
        resources: {
          drive: 2,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
          commonInputs.PUNCH,
        ],
      },
      {
        name: 'Shoryuken (L)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_PUNCH,
        ],
      },
      {
        name: 'Shoryuken (M)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
      },
      {
        name: 'Shoryuken (H)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Shoryuken (OD)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
          commonInputs.PUNCH,
        ],
      },
      {
        name: 'Tatsumaki Senpu-kyaku (L)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.LIGHT_KICK,
        ],
      },
      {
        name: 'Tatsumaki Senpu-kyaku (M)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
        ],
      },
      {
        name: 'Tatsumaki Senpu-kyaku (H)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Tatsumaki Senpu-kyaku (OD)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.KICK,
          commonInputs.KICK,
        ],
      },

      {
        name: 'Aerial Tatsumaki Senpu-kyaku',
        helpText: 'During a forward jump',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.KICK,
        ],
      },
      {
        name: 'Aerial Tatsumaki Senpu-kyaku (OD)',
        helpText: 'During a forward jump',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 50,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.KICK,
          commonInputs.KICK,
        ],
      },
      {
        name: 'High Blade Kick (L)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_KICK,
        ],
      },
      {
        name: 'High Blade Kick (M)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
        ],
      },
      {
        name: 'High Blade Kick (H)',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'High Blade Kick (H) (charged)',
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
      {
        name: 'High Blade Kick (OD)',
        helpText: '',
        resources: {
          drive: 2,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.KICK,
          commonInputs.KICK,
        ],
      },
      {
        name: 'Hashogeki (L)',
        helpText: 'Effect changes when in Denjin Charge state',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.LIGHT_PUNCH,
        ],
      },
      {
        name: 'Hashogeki (M)',
        helpText: 'Effect changes when in Denjin Charge state',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
      },
      {
        name: 'Hashogeki (H)',
        helpText: 'Effect changes when in Denjin Charge state',
        resources: {
          drive: 0,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Hashogeki (OD)',
        helpText: 'Effect changes when in Denjin Charge state',
        resources: {
          drive: 2,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.PUNCH,
          commonInputs.PUNCH,
        ],
      },
      {
        name: 'Denjin Charge',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN,
          commonInputs.PUNCH,
        ],
      },

      // Supers
      {
        name: 'Shinku Hadoken',
        helpText: '',
        resources: {
          drive: 0,
          super: 1,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
      },
      {
        name: 'Shin Hashogeki',
        helpText:
          'Hold button to change effect, changes when in Denjin Charge state',
        resources: {
          drive: 0,
          super: 2,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
      },
      {
        name: 'Shin Shoryuken',
        helpText: '',
        resources: {
          drive: 0,
          super: 3,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.KICK,
        ],
      },

      ...getCommonDriveMoves(),
    ],

    terry: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],

    zangief: [
      ...getCommonButtonMoves(),

      // Unique moves
      // {
      // },

      // Specials
      // {
      // },

      // Supers
      // {
      // },

      ...getCommonDriveMoves(),
    ],
  },
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
