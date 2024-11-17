import classNames from 'classnames'
import { FC, useCallback, useReducer, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import {
  findCharacter,
  getAllCharacters,
  getAllMovesForCharacter,
} from '../../combos/datasource.ts'
import { Character, Move } from '../../combos/models.ts'
import { AppHeader } from '../../components/AppHeader/AppHeader.tsx'
import { CharacterSelect } from '../../components/CharacterSelect/CharacterSelect.tsx'
import { ComboInfoHeader } from '../../components/ComboInfoHeader.tsx'
import { MoveDisplay } from '../../components/MoveDisplay.tsx'
import { MoveSelect } from '../../components/MoveSelect/MoveSelect.tsx'
import { ShareLink } from '../../components/ShareLink.tsx'
import { useAppSelector } from '../../state/hooks/redux-hooks.ts'
import { selectCurrentUserUser } from '../../state/slices/current-user-slice.ts'
import { Base64EncodeDecode, BinaryEncodeDecode } from '../../utils/encoding.ts'
import {
  ComboState,
  comboStateReducer,
  initialComboState,
} from './combo-state.ts'
import { useApiClient } from '../../providers/api-provider/api-hooks.ts'
import { AppFooter } from '../../components/AppFooter/AppFooter.tsx'

export const CreateComboScreen: FC = () => {
  const currentUser = useAppSelector(selectCurrentUserUser)
  const navigate = useNavigate()

  const [formNote, setFormNote] = useState('')
  const characters = getAllCharacters()

  const [isSaving, setIsSaving] = useState(false)
  const apiClient = useApiClient()

  // todo: Move this into Redux now that we have Redux
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

  const handleSaveShortLink = useCallback(() => {
    if (isSaving) return

    setIsSaving(true)

    apiClient
      .makePost<{ combo: string }, ComboState>('/api/combos/save', state)
      .then(({ data }) => {
        navigate(`/c/${data.combo}`)
      })
      .finally(() => {
        setIsSaving(false)
      })
  }, [isSaving, apiClient, state, navigate])

  const encodedComboLinks = [
    {
      name: 'Base64: Longer URL but looks more familiar',
      url: `${location.href}c/${Base64EncodeDecode.encode(JSON.stringify(state))}`,
    },
    {
      name: 'Binary encoding (Experimental): Slightly shorter URL but not always recognized as a URL. Using a third-party library "qntm/base2048"',
      url: `${location.href}c/${BinaryEncodeDecode.encode(JSON.stringify(state))}`,
    },
  ]

  return (
    <div>
      <div className="mb-6">
        <AppHeader />
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
                showHelpCTA={true}
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
              showNoNotes={true}
            />

            <section className="mt-4">
              {state.combo.moves.map((move, idx) => (
                <div
                  key={`${move.name}-${idx}`}
                  onClick={() => handleRemoveMoveAtIndex(idx)}
                  className="relative group cursor-pointer flex justify-between items-center bg-sf6_royalpurple/30 hover:bg-cmyk_red/30 py-3 px-4 rounded-md mb-2"
                >
                  <MoveDisplay
                    move={move}
                    size={40}
                    hideResourceBarMobile={false}
                  />

                  <span className="hidden group-hover:block text-cmyk_red font-bold absolute right-4 bottom-4">
                    Remove
                  </span>
                </div>
              ))}
            </section>

            {
              state.combo.moves.length ?
                <>
                  {currentUser ?
                    <div className="my-10 p-4 md:p-6 bg-sf6_royalpurple/20 rounded-lg">
                      <div className="flex flex-col flex-wrap items-center">
                        <h3 className="font-bold text-lg">
                          Save combo and get short link
                        </h3>

                        <p className="mb-3">
                          This will save it to your combos and create a short
                          link that's easier to share on Twitch and Discord.
                        </p>
                        <button
                          onClick={handleSaveShortLink}
                          disabled={isSaving}
                          className="bg-cmyk_pink/60 hover:bg-cmyk_pink font-semibold px-5 py-3 text-white rounded-full disabled:opacity-60 disabled:bg-cmyk_pink/60"
                        >
                          Save and Get Short Link
                        </button>
                      </div>
                    </div>
                  : null}

                  <div className="my-10 p-4 md:p-6 bg-sf6_royalpurple/20 rounded-lg">
                    <h3 className="font-bold text-lg">
                      Share this combo without saving
                    </h3>
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
                </>
                // Empty state
              : <div>
                  <p className="text-center  py-8">
                    Pick a character and some moves to start building your
                    combo.
                  </p>

                  {currentUser ?
                    <div className="text-center py-8 max-w-md mx-auto p-4 md:p-6 bg-sf6_royalpurple/20 rounded-lg">
                      <p className="text-lg font-bold">✅ You're logged in!</p>

                      <p className="">
                        You'll be able to save a short link of your combo for
                        sharing on Twitch and Discord
                      </p>
                    </div>
                  : <div className="text-center py-8 max-w-md mx-auto p-4 md:p-6 bg-sf6_royalpurple/20 rounded-lg">
                      <p className="text-lg font-bold">
                        ❌ You're not logged in!
                      </p>

                      <p className="">
                        You won't be able to share a short link but you can
                        still share one of the really long links (not supported
                        on Twitch and only really short combos are supported on
                        Discord)
                      </p>
                    </div>
                  }
                </div>

            }
          </div>
        </div>
      </div>

      <AppFooter />
    </div>
  )
}
