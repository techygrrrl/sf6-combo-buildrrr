import { FC } from 'react'
import { Character } from '../combos/models'

type CharacterAvatarProps = {
  character: Character
  imgProps?: Record<string, unknown>
}

export const CharacterAvatar: FC<CharacterAvatarProps> = ({
  character,
  imgProps = {},
}) => {
  return (
    <img
      {...imgProps}
      src={`/images/characters/character_${character.id}_l.png`}
    />
  )
}
