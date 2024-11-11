import classNames from 'classnames'
import { FC, useCallback, useReducer, useState } from 'react'
import {
  findCharacter,
  getAllCharacters,
  getAllMovesForCharacter,
} from '../../combos/datasource.ts'
import { Character, Move } from '../../combos/models.ts'
import { CharacterSelect } from '../../components/CharacterSelect/CharacterSelect.tsx'
import { ComboInfoHeader } from '../../components/ComboInfoHeader.tsx'
import { Disclaimer } from '../../components/Disclaimer.tsx'
import { MoveDisplay } from '../../components/MoveDisplay.tsx'
import { MoveSelect } from '../../components/MoveSelect/MoveSelect.tsx'
import { ShareLink } from '../../components/ShareLink.tsx'
import { Base64EncodeDecode, BinaryEncodeDecode } from '../../utils/encoding.ts'
import { comboStateReducer, initialComboState } from './combo-state.ts'

export const CreateComboScreen: FC = () => {
  const [formNote, setFormNote] = useState('')
  const characters = getAllCharacters()

  // WebStorm bug (this should be valid): https://youtrack.jetbrains.com/issue/WEB-53963/Dispatch-function-from-Reacts-useReducer-reports-wrong-argument-requirements
  const [state, dispatch] = useReducer(comboStateReducer, initialComboState())

  const handleCharacterSelect = useCallback((character: Character) => {
    dispatch({
      type: 'set-character',
      payload: character.id,
    })
  }, [])

  const handleAddMove = useCallback((move: Move) => {
    dispatch({
      type: 'add-move',
      payload: move,
    })
  }, [])

  const handleRemoveMoveAtIndex = useCallback((index: number) => {
    dispatch({
      type: 'remove-move-at-index',
      payload: index,
    })
  }, [])

  const moves = getAllMovesForCharacter(state.combo.character)

  const comboCharacter = findCharacter(state.combo.character)

  const NOTE_MAX_CHARS = 200
  const noteIsValid = formNote.length <= NOTE_MAX_CHARS
  const remainingChars = NOTE_MAX_CHARS - formNote.length

  const handleSetNote = useCallback(() => {
    if (formNote.length >= NOTE_MAX_CHARS) {
      return
    }

    dispatch({
      type: 'set-note',
      payload: formNote,
    })
  }, [formNote])

  const encodedComboLinks = [
    {
      name: 'Binary encoding (Experimental): Slightly shorter URL but using a third-party library "qntm/base2048"',
      url: `${location.href.replace('/create', '/view')}/${BinaryEncodeDecode.encode(JSON.stringify(state))}`,
    },
    {
      name: 'Base64: Longer URL but looks more familiar',
      url: `${location.href.replace('/create', '/view')}/${Base64EncodeDecode.encode(JSON.stringify(state))}`,
    },
  ]

  return (
    <div>
      <div className="mb-6">
        <Disclaimer />
      </div>

      <div className="p-4 md:p-8">
        <div className="md:flex md:flex-row-reverse md:gap-6">
          <div className="md:w-1/2 p-4 border-2 border-sf6_royalpurple rounded-lg">
            <h2 className="text-lg font-bold">Character Select</h2>

            <div className="mt-3">
              <CharacterSelect
                size={77}
                selected={state.combo.character}
                characters={characters}
                onCharacterSelect={handleCharacterSelect}
              />

              <textarea
                className={classNames(
                  'w-full h-28 mt-4 bg-transparent border-2 border-sf6_royalpurple outline-none focus:border-sf6_lightpurple rounded-md px-3 py-2',
                  {
                    'focus:border-cmyk_red': !noteIsValid,
                  },
                )}
                placeholder="Add a note for this combo..."
                value={formNote}
                onChange={(e) => setFormNote(e.target.value)}
              />

              <div className="flex items-center gap-3 mt-1">
                <button
                  className="bg-sf6_royalpurple hover:bg-sf6_mediumpurple px-3 py-2 text-white text-sm rounded-md"
                  disabled={!noteIsValid}
                  onClick={() => handleSetNote()}
                >
                  Add note
                </button>

                <span
                  className={classNames('text-white/60 text-sm', {
                    'text-cmyk_red': !noteIsValid,
                  })}
                >
                  {remainingChars} / {NOTE_MAX_CHARS}
                </span>
              </div>

              <div className="mt-6">
                <h2 className="text-lg font-bold">Move Select</h2>
                <MoveSelect
                  moves={moves}
                  onMoveSelect={handleAddMove}
                  inputSize={30}
                />
              </div>
            </div>
          </div>

          <div className="md:w-1/2 mt-8 md:mt-0">
            <ComboInfoHeader
              avatarSize={160}
              character={comboCharacter}
              notes={state.notes}
            />

            <section className="mt-4">
              {state.combo.moves.map((move, idx) => (
                <div
                  key={`${move.name}-${idx}`}
                  onClick={() => handleRemoveMoveAtIndex(idx)}
                  className="relative group cursor-pointer flex justify-between items-center bg-sf6_royalpurple/30 hover:bg-cmyk_red/30 py-3 px-4 rounded-md mb-2"
                >
                  <MoveDisplay move={move} size={40} />

                  <span className="hidden group-hover:block text-cmyk_red font-bold absolute right-4 bottom-4">
                    Remove
                  </span>
                </div>
              ))}
            </section>

            {
              state.combo.moves.length ?
                <div className="my-10 p-4 md:p-6 bg-sf6_royalpurple/20 rounded-lg">
                  <p className="font-bold text-lg">Share this combo</p>
                  {encodedComboLinks.map(({ url, name }) => (
                    <div
                      key={name}
                      className="py-6 last:pb-0 border-b border-sf6_lightpurple/50 last:border-0"
                    >
                      <ShareLink
                        description={name}
                        url={url}
                        title={state.notes || comboCharacter.name + ' Combo'}
                      />
                    </div>
                  ))}
                </div>
                // Empty state
              : <div>
                  <p className="text-center  py-8">
                    Pick a character and some moves to start building your
                    combo.
                  </p>
                </div>

            }
          </div>
        </div>
      </div>
    </div>
  )
}
