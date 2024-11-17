import classNames from 'classnames'
import { FC } from 'react'
import { AugmentedCharacter, Character, CharacterId } from '../../combos/models'
import { CharacterAvatar } from '../CharacterAvatar'

type CharacterSelectProps = {
  size: number
  selected: CharacterId | null
  characters: AugmentedCharacter[]
  onCharacterSelect: (c: Character) => void
  showHelpCTA: boolean
}

export const CharacterSelect: FC<CharacterSelectProps> = ({
  size,
  selected,
  characters,
  onCharacterSelect,
  showHelpCTA,
}) => {
  return (
    <div>
      <div className="flex flex-wrap">
        {characters.map((character) => (
          <div
            key={character.id}
            style={{
              width: size,
            }}
            title={
              character.disabled ?
                `Help add moves to ${character.name}`
              : `Pick ${character.name} and build a combo!`
            }
            className={classNames('cursor-pointer', {
              'bg-sf6_royalpurple': selected === character.id,
              'hover:bg-sf6_mediumpurple': !character.disabled,
              'opacity-40': character.disabled,
              'hover:cursor-not-allowed': character.disabled,
            })}
            onClick={() => {
              if (character.disabled) return
              onCharacterSelect(character)
            }}
          >
            <CharacterAvatar character={character} />
          </div>
        ))}

        {showHelpCTA ?
          <div
            className="flex items-center bg-sf6_royalpurple/40"
            style={{
              width: size,
              height: size,
            }}
          >
            <p className="text-center text-xs text-white/60 py-2">
              <a
                className="text-cmyk_pink"
                href="https://github.com/techygrrrl/sf6-combo-buildrrr/issues/1"
                rel="noopener noreferrer nofollow"
              >
                Help
              </a>{' '}
              add character support
            </p>
          </div>
        : null}
      </div>
    </div>
  )
}
