import { FC } from 'react'
import { useParams } from 'react-router-dom'
import { AppFooter } from '../../components/AppFooter/AppFooter.tsx'
import { AppHeader } from '../../components/AppHeader/AppHeader'
import { IconTwitch } from '../../components/icons'
import { LoadingSpinner } from '../../components/LoadingSpinner'
import { UserCombos } from '../../components/UserCombos/UserCombos'
import { useApiData } from '../../providers/api-provider/api-hooks.ts'
import { GetProfile } from '../../providers/api-provider/requests-responses'

export const UserProfileScreen: FC = () => {
  const { userId } = useParams()
  const { loading, data, error } = useApiData<GetProfile>(
    `/api/profile?id=${userId}`,
  )

  return (
    <div>
      <div className="mb-6">
        <AppHeader />
      </div>

      <div className="md:py-8">
        <div className="container">
          {loading ?
            <LoadingSpinner />
          : error ?
            <div className="text-center">
              <h1 className="text-lg font-bold">Error loading profile</h1>
              <p className="">This user may not exist in the system</p>
            </div>
          : <div>
              <div className="flex justify-center items-center gap-3">
                <img
                  className="w-10 h-10 rounded-full"
                  src={data?.profile_image_url}
                  alt={data?.display_name}
                />

                <h1 className="text-lg font-bold">
                  {data?.display_name}'s combos
                </h1>

                <a
                  className="bg-[#9147FF] p-[8px] rounded-full"
                  href={`https://twitch.tv/${data?.username}`}
                  target="_blank"
                  rel="nofollow noreferrer noopener"
                >
                  <IconTwitch size={14} />
                </a>
              </div>

              <div className="mt-3">
                <UserCombos userId={data!.id} profile={data!} />
              </div>
            </div>
          }
        </div>
      </div>

      <AppFooter />
    </div>
  )
}
