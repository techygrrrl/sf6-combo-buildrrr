import classNames from 'classnames'
import { FC, useCallback, useReducer, useState } from 'react'
import {
  findCharacter,
  getAllCharacters,
  getAllMovesForCharacter,
} from '../../combos/datasource.ts'
import { Character, Move } from '../../combos/models.ts'
import { CharacterAvatar } from '../../components/CharacterAvatar.tsx'
import { CharacterSelect } from '../../components/CharacterSelect/CharacterSelect.tsx'
import { MoveDisplay } from '../../components/MoveDisplay.tsx'
import { MoveSelect } from '../../components/MoveSelect/MoveSelect.tsx'
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

  return (
    <div className="p-4 md:p-8">
      <div className="md:flex md:flex-row-reverse md:gap-6">
        <div className="md:w-1/2 py-3 px-4 border-2 border-sf6_royalpurple rounded-lg">
          <h2 className="text-lg font-bold">Character Select</h2>

          <div className="my-3">
            <CharacterSelect
              size={80}
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

        <div className="md:w-1/2">
          <header className="flex items-center">
            <div className="w-40 bg-sf6_royalpurple rounded-md overflow-hidden flex-none">
              <CharacterAvatar character={comboCharacter} />
            </div>

            <div className="px-4 ">
              <h2 className="text-2xl font-bold ">
                {comboCharacter.name} Combo
              </h2>

              <p>{state.notes}</p>
            </div>
          </header>

          <section className="mt-4">
            {state.combo.moves.map((move, idx) => (
              <div
                key={move.name}
                onClick={() => handleRemoveMoveAtIndex(idx)}
                className="group cursor-pointer flex justify-between items-center bg-sf6_royalpurple/30 hover:bg-cmyk_red/30 py-3 px-4 rounded-md mb-2"
              >
                <MoveDisplay move={move} size={40} />

                <span className="hidden group-hover:block text-cmyk_red font-bold">
                  Remove
                </span>
              </div>
            ))}
          </section>
        </div>
      </div>
    </div>
  )
}