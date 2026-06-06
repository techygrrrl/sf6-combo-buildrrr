import classNames from 'classnames'
import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { NavLink, useNavigate, useParams } from 'react-router-dom'
import { findCharacter } from '../combos/datasource.ts'
import { ApiComboWithUser } from '../combos/models.ts'
import { AppFooter } from '../components/AppFooter/AppFooter.tsx'
import { AppHeader } from '../components/AppHeader/AppHeader.tsx'
import { ComboInfoHeader } from '../components/ComboInfoHeader.tsx'
import { LoadingSpinner } from '../components/LoadingSpinner.tsx'
import { MoveDisplay } from '../components/MoveDisplay.tsx'
import { useDebug } from '../hooks/useDebug.ts'
import { useOverlay } from '../hooks/useOverlay.ts'
import { useApiClient } from '../providers/api-provider/api-hooks.ts'
import { useAppSelector } from '../state/hooks/redux-hooks.ts'
import { selectCurrentUserUser } from '../state/slices/current-user-slice.ts'
import { Base64EncodeDecode, BinaryEncodeDecode } from '../utils/encoding.ts'
import { ComboState } from './CreateComboScreen/combo-state.ts'

type ComboCreator = {
  id: string
  displayName: string
  username: string
  profileUrl: string
}

export const ViewComboScreen: FC = () => {
  const showDebug = useDebug()
  const { encodedCombo } = useParams()
  const apiClient = useApiClient()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [comboState, setComboState] = useState<ComboState | null>(null)

  const [creator, setCreator] = useState<ComboCreator | null>()

  const profile = useAppSelector(selectCurrentUserUser)
  const isMe = profile?.id && profile?.id === creator?.id
  const creatorId = creator?.id

  useEffect(() => {
    if (!encodedCombo) return

    if (encodedCombo.length <= 36) {
      // This is a short link combo. Let's get it from the backend
      apiClient
        .makeGet<ApiComboWithUser>(`/api/combos?id=${encodedCombo}`)
        .then(({ data }) => {
          setComboState(data.combo)
          setCreator({
            id: data.twitch_user_id,
            displayName: data.display_name,
            username: data.login,
            profileUrl: data.profile_image_url,
          })
        })
        .finally(() => {
          setLoading(false)
        })
      return
    }

    // It's a long link combo, let's try to decode it.
    try {
      if (encodedCombo.startsWith('ey')) {
        const decoded = Base64EncodeDecode.decode<ComboState>(encodedCombo)
        setComboState(decoded)
      } else {
        const decoded = BinaryEncodeDecode.decode<ComboState>(encodedCombo)
        setComboState(decoded)
      }
    } catch (e) {
      console.error(e)
    } finally {
      setLoading(false)
    }
  }, [encodedCombo, navigate, apiClient])

  const combo = comboState?.combo || null

  const currentCharacter = useMemo(() => {
    if (!combo) return null

    return findCharacter(combo.character)
  }, [combo])

  const handleDeleteCombo = useCallback(() => {
    if (!isMe) return
    if (!creatorId) return

    apiClient
      .makePost<
        { success: boolean },
        null
      >(`/api/combos/delete?id=${encodedCombo}`, null)
      .then(() => {
        navigate(`/u/${creatorId}`)
      })
  }, [apiClient, isMe, creatorId, encodedCombo, navigate])

  const isOverlay = useOverlay()

  const displayElement = useMemo(() => {
    if (!creator) return null

    if (creator.username === creator.displayName) {
      return (
        <strong>{creator.username}</strong>
      )
    }

    return (
      <span>
        <strong>{creator.displayName}</strong> ({creator.username})
      </span>
    )
  }, [creator])

  if (loading) {
    return <LoadingSpinner />
  }

  if (!currentCharacter || !combo || !comboState) {
    return (
      <div className="text-center p-10">
        Failed to load combo data. Check the console.
      </div>
    )
  }

  return (
    <div>
      {isOverlay ? null : (
        <div className="mb-6">
          <AppHeader />
        </div>
      )}

      <div
        className={classNames({
          'md:py-8': !isOverlay,
        })}
      >
        <div
          className={classNames('', {
            container: !isOverlay,
            'py-1 px-1': isOverlay,
          })}
        >
          {isOverlay ? null : (
            <NavLink
              className="text-cmyk_pink text-right mb-2 block"
              title="The overlay view is optimized for embedding in OBS"
              to="?overlay=1"
            >
              Go to overlay view
            </NavLink>
          )}
          {isOverlay ? null : (
            <ComboInfoHeader
              avatarSize={160}
              character={currentCharacter}
              notes={comboState.notes}
              showNoNotes={false}
            />
          )}

          <div
            className={classNames({
              'mt-4': !isOverlay,
            })}
          >
            {combo.moves.map((move, idx) => (
              <div
                key={`visual-move-${idx}-${move.name}`}
                className={classNames('rounded-md', {
                  'bg-sf6_royalpurple/30 py-3 px-4 mb-2': !isOverlay,
                  'bg-sf6_darkerpurple/70 py-2 px-2 mb-[3px]': isOverlay,
                })}
              >
                <MoveDisplay
                  move={move}
                  size={isOverlay ? 19 : 40}
                  hideResourceBarMobile={isOverlay}
                  moveNameDisplay={isOverlay ? 'small' : 'normal'}
                  helpTextDisplay={isOverlay ? 'small' : 'normal'}
                />
              </div>
            ))}
          </div>

          {!isOverlay && creator ? (
            <div className="flex items-center gap-2 my-4 text-white/70 text-xs">
              <img src={creator?.profileUrl} alt="" className="w-6 h-6 rounded-full" />
              <span>Combo contributed by <a href={`/u/${creator?.id}`}>{displayElement}</a></span>
            </div>
          ) : null}

          {showDebug ?
            <hr className="divider my-20" />
          : null}
        </div>

        {showDebug ?
          <div className="font-mono overflow-x-scroll">
            <h2 className="text-2xl font-bold">Debug</h2>
            <pre className="">{JSON.stringify(comboState, null, 2)}</pre>
          </div>
        : null}
      </div>

      {isMe && creatorId && !isOverlay ?
        <div className="text-center pt-4 pb-14">
          <button
            onClick={handleDeleteCombo}
            className="bg-cmyk_red/60 hover:bg-cmyk_red font-semibold px-5 py-3 text-white rounded-full"
          >
            Delete this combo
          </button>
        </div>
      : null}

      {/* {isOverlay ? null : (
        <div className="container">
          <textarea
            className="w-full selection:bg-cmyk_pink border-2 border-sf6_royalpurple outline-none focus:border-sf6_lightpurple px-3 py-2 bg-sf6_darkerpurple rounded-md p-3 font-mono"
            // @ts-expect-error This is an input and so this is valid. React's synthetic event doesn't appear to support this.
            onClick={(e) => e.target.select()}
            defaultValue={combo.moves
              .map((move) => move.inputs.map((input) => input.text).join(''))
              .join(' ')}
          />
        </div>
      )} */}

      {isOverlay ? null : (
        <div className="text-center pt-4 pb-14">
          <a
            href="/"
            className="bg-cmyk_pink/60 hover:bg-cmyk_pink font-semibold px-5 py-3 text-white rounded-full"
          >
            Create a Combo
          </a>
        </div>
      )}

      {isOverlay ? null : <AppFooter />}
    </div>
  )
}
