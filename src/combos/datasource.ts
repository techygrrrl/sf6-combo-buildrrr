import { Character, CharacterId, CombosDataSource, Move } from './models.ts'

const commonInputs = {
  // motions
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
      // character,
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
      // character,
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
      // character,
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
      // character,
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
      // character,
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
      // character,
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
      // character,
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
      // character,
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
      // character,
      name: 'Standing heavy kick',
      helpText: '',
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
      // character,
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
      // character,
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
      // character,
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
      // character,
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
      // character,
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
      // character,
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
    manon: [...getCommonButtonMoves()],

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
