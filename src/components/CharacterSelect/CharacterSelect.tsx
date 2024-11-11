import classNames from 'classnames'
import { FC } from 'react'
import { Character, CharacterId } from '../../combos/models'
import { CharacterAvatar } from '../CharacterAvatar'

type CharacterSelectProps = {
  size: number
  selected: CharacterId
  characters: Character[]
  onCharacterSelect: (c: Character) => void
}

export const CharacterSelect: FC<CharacterSelectProps> = ({
  size,
  selected,
  characters,
  onCharacterSelect,
}) => {
  return (
    <div className="flex flex-wrap">
      {characters.map((character) => (
        <div
          key={character.id}
          style={{
            width: size,
          }}
          className={classNames(
            'hover:bg-sf6_mediumpurple hover:cursor-pointer',
            {
              'bg-sf6_royalpurple': selected === character.id,
            },
          )}
          onClick={() => onCharacterSelect(character)}
        >
          <CharacterAvatar character={character} />
          {/* <img src={`/images/characters/character_${character.id}_l.png`} /> */}
        </div>
      ))}
    </div>
  )
}

// export const CharacterSelectContainer = () => {
//   const characters = getAllCharacters()

//   return <CharacterSelect characters={characters} />
// }
