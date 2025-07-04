import {
  Character,
  CharacterId,
  CombosDataSource,
  Input,
  Move,
} from './models.ts'

const commonInputs: Record<string, Input> = {
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

const getCommonDriveEtcMoves = (): Move[] => {
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
      width: 50,
      resources: {
        drive: 1,
        super: 0,
      },
      inputs: [commonInputs.HEAVY_PUNCH, commonInputs.HEAVY_KICK],
    },
    {
      name: 'Micro-walk',
      helpText: 'Slight walk forward',
      width: 50,
      resources: {
        drive: 0,
        super: 0,
      },
      inputs: [commonInputs.motion_FORWARD],
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
      id: 'elena',
      name: 'Elena',
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
      id: 'mai',
      name: 'Mai',
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

      ...getCommonDriveEtcMoves(),
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
        width: 50,
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
        width: 50,
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
        width: 50,
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

      ...getCommonDriveEtcMoves(),
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

      {
        name: 'Saihasho (OD)',
        helpText: '',
        resources: {
          drive: 2,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_KICK,
          commonInputs.MEDIUM_KICK,
        ],
      },
      {
        name: 'Ankensatsu (OD)',
        helpText: '',
        resources: {
          drive: 2,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_KICK,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Go Ohsatsu (OD)',
        helpText: '',
        resources: {
          drive: 2,
          super: 0,
        },
        width: 33.333,
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
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

      ...getCommonDriveEtcMoves(),
    ],

    elena: [
      ...getCommonButtonMoves(),

      // Unique moves
      {
        name: 'Slide',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Round Arch',
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
        name: 'Starling Beak',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.MEDIUM_PUNCH,
          commonInputs.cancel,
          commonInputs.MEDIUM_PUNCH,
        ],
      },
      {
        name: 'Handstand Whip',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
          commonInputs.MEDIUM_KICK,
        ],
      },
      {
        name: 'Hind Kick',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.MEDIUM_KICK,
          commonInputs.cancel,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Fluttering Lark',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
          commonInputs.cancel,
          commonInputs.HEAVY_KICK,
        ],
      },
      {
        name: 'Turning Tail',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.HEAVY_PUNCH,
          commonInputs.cancel,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Trunk Slap',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
          commonInputs.cancel,
          commonInputs.HEAVY_PUNCH,
          commonInputs.cancel,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Soaring Raid',
        helpText: 'During a jump',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.LIGHT_PUNCH,
          commonInputs.cancel,
          commonInputs.MEDIUM_KICK,
        ],
      },
      {
        name: 'Raptor Range',
        helpText: 'During a jump',
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

      // Specials
      {
        name: 'Rhino Horn (L)',
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

      // Rhino Horn (MK)
      {
        name: 'Rhino Horn (M)',
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

      // Rhino Horn (HK)
      {
        name: 'Rhino Horn (H)',
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

      // DP
      {
        name: 'Scratch Wheel (L)',
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
        name: 'Scratch Wheel (M)',
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
        name: 'Scratch Wheel (H)',
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
        name: 'Scratch Wheel (OD)',
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
        ],
      },

      {
        name: 'Lynx Song (L)',
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

      // Lynx Song (MK)
      {
        name: 'Lynx Song (M)',
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

      // Lynx Song (HK)
      {
        name: 'Lynx Song (H)',
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
      // Lynx Song (OD)
      {
        name: 'Lynx Song (OD)',
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
        name: 'Leopard Snap',
        helpText: 'During Lynx Song',
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_KICK,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Harvest Circle',
        helpText: 'During Lynx Song',
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Mallet Smash',
        helpText: 'During Lynx Song',
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
        name: 'Lynx Whirl',
        helpText: 'During Lynx Song',
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },

      {
        name: 'Spinning Scythe (L)',
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
        name: 'Spinning Scythe (M)',
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
        name: 'Spinning Scythe (H)',
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
        name: 'Spinning Scythe (OD)',
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
          commonInputs.KICK,
          commonInputs.KICK,
        ],
      },
      {
        name: 'Lynx Whirl',
        helpText: 'During Spinning Scythe',
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },
      {
        name: 'Moon Glider (L)',
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
        name: 'Moon Glider (M)',
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
        name: 'Moon Glider (H)',
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
        name: 'Moon Glider (OD)',
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
      {
        name: 'Moon Glider (2)',
        helpText: 'During Moon Glider',
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.PUNCH,
        ],
        resources: {
          drive: 0,
          super: 0,
        },
      },

      // Supers
      {
        name: 'Meteor Volley',
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
        name: 'Revival Dance',
        helpText: 'Hold down to change effect',
        resources: {
          drive: 0,
          super: 2,
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
        name: 'Song of the Grasslands',
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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
          drive: 2,
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
          drive: 2,
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
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

      ...getCommonDriveEtcMoves(),
    ],

    mai: [
      ...getCommonButtonMoves(),

      // Unique moves
      {
        name: 'Senkotsu Uchi',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [commonInputs.motion_FORWARD, commonInputs.MEDIUM_PUNCH],
      },
      {
        name: 'Hien Ren Kyaku',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.LIGHT_KICK,
          commonInputs.cancel,
          commonInputs.LIGHT_KICK,
          commonInputs.cancel,
          commonInputs.LIGHT_KICK,
        ],
      },
      {
        name: 'Hoshi Kujaku',
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
        name: 'Hoshi Kujaku',
        helpText: '',
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_KICK,
          commonInputs.cancel,
          commonInputs.HEAVY_KICK,
        ],
      },

      // Specials
      // region Kachousen
      {
        name: 'Kachousen (L)',
        helpText: '',
        width: 33.33,
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_PUNCH,
        ],
      },
      {
        name: 'Kachousen (M)',
        helpText: '',
        width: 33.33,
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
      },
      {
        name: 'Kachousen (H)',
        helpText: '',
        width: 33.33,
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.motion_FORWARD,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Kachousen (OD)',
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
        name: 'Midare Kachousen',
        helpText:
          'After a held OD Kachousen. Effect changes when flame is stocked.',
        resources: {
          drive: 0,
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
      // endregion Kachousen

      // region Ryuuenbu
      {
        name: 'Ryuuenbu (L)',
        helpText: 'Effect changes when flame is stocked.',
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.LIGHT_PUNCH,
        ],
      },
      {
        name: 'Ryuuenbu (M)',
        helpText: 'Effect changes when flame is stocked.',
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
      },
      {
        name: 'Ryuuenbu (H)',
        helpText: 'Effect changes when flame is stocked.',
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Ryuuenbu (OD)',
        helpText: 'Effect changes when flame is stocked.',
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
      // endregion Ryuuenbu

      {
        name: 'Hissatsu Shinobi Bachi (L)',
        helpText: 'Effect changes when a flame is stocked',
        width: 33.33,
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
      {
        name: 'Hissatsu Shinobi Bachi (M)',
        helpText: 'Effect changes when a flame is stocked',
        width: 33.33,
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
      {
        name: 'Hissatsu Shinobi Bachi (H)',
        helpText: 'Effect changes when a flame is stocked',
        width: 33.33,
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
        name: 'Hissatsu Shinobi Bachi (OD)',
        helpText: 'Effect changes when a flame is stocked',
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
        name: 'Hishou Ryuuenjin (L)',
        helpText: 'Effect changes when a flame is stocked',
        width: 33.33,
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.LIGHT_KICK,
        ],
      },
      {
        name: 'Hishou Ryuuenjin (M)',
        helpText: 'Effect changes when a flame is stocked',
        width: 33.33,
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_FORWARD,
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_FORWARD,
          commonInputs.plus,
          commonInputs.MEDIUM_KICK,
        ],
      },
      {
        name: 'Hishou Ryuuenjin (H)',
        helpText: 'Effect changes when a flame is stocked',
        width: 33.33,
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
        name: 'Hishou Ryuuenjin (OD)',
        helpText: 'Effect changes when a flame is stocked',
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
        name: 'Musasabi no Mai (L)',
        helpText:
          'During a forward jump. Effect changes when flame is stocked.',
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.LIGHT_PUNCH,
        ],
      },
      {
        name: 'Musasabi no Mai (M)',
        helpText:
          'During a forward jump. Effect changes when flame is stocked.',
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.MEDIUM_PUNCH,
        ],
      },
      {
        name: 'Musasabi no Mai (H)',
        helpText:
          'During a forward jump. Effect changes when flame is stocked.',
        width: 33.333,
        resources: {
          drive: 0,
          super: 0,
        },
        inputs: [
          commonInputs.motion_DOWN,
          commonInputs.motion_DOWN_BACK,
          commonInputs.motion_BACK,
          commonInputs.plus,
          commonInputs.HEAVY_PUNCH,
        ],
      },
      {
        name: 'Musasabi no Mai (OD)',
        helpText:
          'During a forward jump. Effect changes when flame is stocked.',
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

      // Supers
      {
        name: 'Kagerou no Mai',
        helpText: 'Effect changes when flame is stocked',
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
        name: 'Chou Hissatsu Shinobi Bachi',
        helpText: 'Effect changes when flame is stocked',
        resources: {
          drive: 0,
          super: 2,
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
        name: 'Air Chou Hissatsu Shinobi Bachi',
        helpText:
          'During a neutral or forward jump. Effect changes when flame is stocked',
        resources: {
          drive: 0,
          super: 2,
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
        name: 'Shiranui Ryuu: Enbu Ada Zakura',
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
          commonInputs.PUNCH,
        ],
      },

      ...getCommonDriveEtcMoves(),
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
