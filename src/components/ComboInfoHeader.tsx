import { FC } from 'react'
import { Character } from '../combos/models'
import { CharacterAvatar } from './CharacterAvatar'

type ComboInfoHeaderProps = {
  notes: string
  avatarSize: number
  character: Character
  showNoNotes: boolean
}

export const ComboInfoHeader: FC<ComboInfoHeaderProps> = ({
  avatarSize,
  notes,
  character,
  showNoNotes,
}) => {
  return (
    <header className="flex items-center">
      <div
        className="bg-sf6_royalpurple rounded-md overflow-hidden flex-none"
        style={{ width: avatarSize }}
      >
        <CharacterAvatar character={character} />
      </div>

      <div className="px-4 ">
        <h2 className="text-2xl font-bold ">{character.name} Combo</h2>

        <p>{notes}</p>
        {showNoNotes && !notes ?
          <p className="text-white/70 italic">(no notes)</p>
        : null}
      </div>
    </header>
  )
}
