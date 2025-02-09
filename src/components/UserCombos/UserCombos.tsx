import classNames from 'classnames'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { findCharacter, getAllCharacters } from '../../combos/datasource'
import { ApiCombo, Character, CharacterId } from '../../combos/models'
import { useDebug } from '../../hooks/useDebug'
import {
  useApiClient,
  useApiData,
} from '../../providers/api-provider/api-hooks.ts'
import { GetProfile } from '../../providers/api-provider/requests-responses.ts'
import { useAppSelector } from '../../state/hooks/redux-hooks'
import { selectCurrentUserUser } from '../../state/slices/current-user-slice'
import { CharacterAvatar } from '../CharacterAvatar'
import { CharacterSelect } from '../CharacterSelect/CharacterSelect.tsx'
import { IconToggleOff, IconToggleOn, IconTrash } from '../icons'
import { LoadingSpinner } from '../LoadingSpinner'
import { MoveDisplay } from '../MoveDisplay.tsx'

type UserCombosProps = {
  userId: string
  profile: GetProfile
}

export const UserCombos: FC<UserCombosProps> = ({
  userId,
  profile,
}: UserCombosProps) => {
  const apiClient = useApiClient()
  const currentUser = useAppSelector(selectCurrentUserUser)

  const debug = useDebug()
  const [searchParams, setSearchParams] = useSearchParams()

  // Default selected filtered combos
  const characterIdFromUrl = useMemo(
    () => searchParams.get('c'),
    [searchParams],
  )

  const isMe = currentUser?.id === userId

  const { loading, data, error, mutate } = useApiData<{
    combos: ApiCombo[] | null
  }>(`/api/combos/user?id=${userId}`)

  const combos = useMemo(() => data?.combos || [], [data?.combos])

  // Should show moves
  const [showMoves, setShowMoves] = useState(false)

  // Character select and filtering of combos
  const [filteredCharacter, setFilteredCharacter] =
    useState<CharacterId | null>(null)

  const charactersWithCombos: Character[] = useMemo(() => {
    const characters = getAllCharacters()
    const comboCharacters = new Set<CharacterId>()
    combos.forEach((combo) => {
      comboCharacters.add(combo.combo.combo.character)
    })

    return characters.filter((character) => comboCharacters.has(character.id))
  }, [combos])

  // Auto-filter combos based on ?c=X in the URL
  useEffect(() => {
    const validCharacterIds = charactersWithCombos.map((c) => c.id)

    if (characterIdFromUrl && validCharacterIds.includes(characterIdFromUrl)) {
      setFilteredCharacter(characterIdFromUrl)
    } else {
      setFilteredCharacter(null)
    }
  }, [charactersWithCombos, characterIdFromUrl])

  const visibleCombos = useMemo(() => {
    return combos.filter((combo) => {
      return filteredCharacter ?
          combo.combo.combo.character == filteredCharacter
        : true
    })
  }, [combos, filteredCharacter])

  const handleDeleteCombo = useCallback(
    (comboId: string) => {
      if (!isMe) return

      apiClient
        .makePost<
          { success: boolean },
          null
        >(`/api/combos/delete?id=${comboId}`, null)
        .then((res) => {
          console.log(res)
          mutate()
        })
    },
    [apiClient, isMe, mutate],
  )

  return (
    <>
      <div>
        {loading ?
          <div className="my-4">
            <LoadingSpinner />
          </div>
        : null}

        {error ?
          <div className="bg-cmyk_red text-white">
            <p className="font-bold">Failed to load combo data</p>
          </div>
        : null}

        {combos.length ?
          <div className="md:flex items-center justify-end mb-4 md:mb-1">
            <div className="flex justify-between md:justify-normal items-center gap-4 p-1 bg-sf6_royalpurple/40 rounded text-xs">
              <span className="px-2 text-white/60">
                Move display
              </span>

              <button
                className="bg-sf6_darkpurple px-2 py-1 rounded"
                onClick={() => setShowMoves((s) => !s)}
              >
                {showMoves ?
                  <div className="text-sf6_lightpurple flex items-center gap-2">
                    <span className="text-sf6_lightpurple font-bold">
                      Visible
                    </span>
                    <IconToggleOn size={19} />
                  </div>
                : <div className="text-white/60 flex items-center gap-2">
                    <span className="text-white/60">Hidden</span>
                    <IconToggleOff size={19} />
                  </div>
                }
              </button>
            </div>
          </div>
        : null}

        {!combos.length && isMe ?
          <div className="text-center p-6 md:p-8 bg-sf6_royalpurple/20 rounded-lg">
            <p className="mb-6">No combos yet.</p>

            <a
              href="/"
              className="bg-cmyk_pink/60 hover:bg-cmyk_pink font-semibold px-5 py-3 text-white rounded-full inline-block"
            >
              Create a Combo
            </a>
          </div>
        : !combos.length ?
          <div className="text-center p-6 md:p-8 bg-sf6_royalpurple/20 rounded-lg">
            <p className="">
              {profile.display_name} doesn't have any combos yet.
            </p>
          </div>
        : <div>
            <CharacterSelect
              size={40}
              selected={filteredCharacter}
              characters={charactersWithCombos}
              showHelpCTA={false}
              onCharacterSelect={(c) => {
                if (c.id === characterIdFromUrl) {
                  setSearchParams({})
                } else {
                  setSearchParams({ c: c.id })
                }
              }}
            />

            {!visibleCombos.length ?
              <p className="text-center mt-6">No combos for this filter</p>
            : null}
          </div>
        }

        {visibleCombos.map((combo) => {
          const character = findCharacter(combo.combo.combo.character)
          return (
            <div
              key={combo.slug}
              className={classNames({
                relative: isMe,
              })}
            >
              <a
                href={`/c/${combo.slug}`}
                className="my-4 p-4 md:p-6 bg-sf6_royalpurple/20 hover:bg-sf6_mediumpurple rounded-lg flex items-center gap-4"
              >
                <div
                  className="bg-sf6_royalpurple rounded-md overflow-hidden flex-none"
                  style={{ width: 60, height: 60 }}
                >
                  <CharacterAvatar character={character} />
                </div>

                <div className="w-full">
                  <h2 className="text-2xl font-bold ">
                    {character.name} Combo
                  </h2>

                  {debug ?
                    <p className="text-white/60 text-xs font-mono py-1">
                      {combo.slug}
                    </p>
                  : null}

                  <p>{combo.combo.notes}</p>

                  <div className="mt-2">
                    {showMoves ?
                      combo.combo.combo.moves.map((move, idx) => (
                        <div
                          key={`visual-move-${idx}-${move.name}`}
                          className="rounded-md bg-sf6_darkerpurple/70 py-2 px-2 mb-1"
                        >
                          <MoveDisplay
                            move={move}
                            size={19}
                            hideResourceBarMobile={true}
                            moveNameDisplay="hidden"
                            helpTextDisplay="hidden"
                          />
                        </div>
                      ))
                    : null}
                  </div>
                </div>
              </a>

              {isMe ?
                <button
                  className="text-white bg-cmyk_red/40 hover:bg-cmyk_red font-bold absolute -top-2 -right-2 p-1 rounded-full"
                  title={`Delete this ${character.name} combo`}
                  onClick={() => handleDeleteCombo(combo.slug)}
                >
                  <IconTrash size={20} />
                </button>
              : null}
            </div>
          )
        })}
      </div>

      {debug ?
        <div>
          <hr className="divider my-20" />

          <div className="font-mono overflow-x-scroll">
            <h2 className="text-2xl font-bold">Debug</h2>
            <pre className="">{JSON.stringify(data, null, 2)}</pre>
          </div>
        </div>
      : null}
    </>
  )
}
