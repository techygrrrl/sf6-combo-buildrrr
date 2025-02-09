import { FC } from 'react'
import { AppHeader } from '../../components/AppHeader/AppHeader'
import { useApiData } from '../../providers/api-provider/api-hooks'
import { ApiCombo } from '../../combos/models'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { findCharacter } from '../../combos/datasource'
import { CharacterAvatar } from '../../components/CharacterAvatar'

export const FeedScreen: FC = () => {
  const { loading, data, error } = useApiData<{
    combos: ApiCombo[] | null
  }>('/api/feed')

  const combos = data?.combos || []

  return (
    <div>
      <div className="mb-6">
        <AppHeader />
      </div>

      <div className="md:py-8">
        <div className="container">
          <h2 className="font-bold text-2xl">Latest Combos from the community</h2>

          {loading ?
            <LoadingSpinner />
          : error ?
            <div className="text-center">
              <h1 className="text-lg font-bold">Error loading feed</h1>
              <p className="">There was an error loading the combo feed</p>
            </div>
          : <div className="mt-3">
              {combos.map((combo) => {
                const character = findCharacter(combo.combo.combo.character)

                return (
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
                      <h2 className="text-xl font-bold ">
                        {character.name} Combo
                      </h2>

                      <p className="text-white/60 text-xs font-mono py-1">
                        {new Date(combo.created_at).toLocaleDateString(
                          'en-CA',
                          {
                            weekday: 'long',
                            year: 'numeric',
                            month: 'long',
                            day: 'numeric',
                          },
                        )}
                      </p>

                      <p>{combo.combo.notes}</p>
                    </div>
                  </a>
                )
              })}
            </div>
          }
        </div>
      </div>
    </div>
  )
}
