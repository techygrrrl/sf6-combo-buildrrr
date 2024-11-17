import classNames from 'classnames'
import { FC, useCallback, useState } from 'react'
import { findCharacter, getAllCharacters } from '../../combos/datasource'
import { ApiCombo, CharacterId } from '../../combos/models'
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
import { IconTrash } from '../icons'
import { LoadingSpinner } from '../LoadingSpinner'

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

  const isMe = currentUser?.id === userId

  const debug = useDebug()

  const { loading, data, error, mutate } = useApiData<{
    combos: ApiCombo[] | null
  }>(`/api/combos/user?id=${userId}`)

  const combos = data?.combos || []

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

  const characters = getAllCharacters()

  const [filteredCharacter, setFilteredCharacter] =
    useState<CharacterId | null>(null)

  const visibleCombos = combos.filter((combo) => {
    return filteredCharacter ?
        combo.combo.combo.character == filteredCharacter
      : true
  })

  return (
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
      {debug ?
        <div>
          <hr className="divider my-20" />

          <div className="font-mono overflow-x-scroll">
            <h2 className="text-2xl font-bold">Debug</h2>
            <pre className="">{JSON.stringify(data, null, 2)}</pre>
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
            characters={characters}
            showHelpCTA={false}
            onCharacterSelect={(c) => {
              setFilteredCharacter((prev) => (prev === c.id ? null : c.id))
            }}
          />
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

              <div className="">
                <h2 className="text-2xl font-bold ">{character.name} Combo</h2>

                <p className="text-white/60 text-sm font-mono">{combo.slug}</p>
                <p>{combo.combo.notes}</p>
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
  )
}