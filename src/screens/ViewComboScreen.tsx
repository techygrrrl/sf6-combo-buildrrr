import { FC, useCallback, useEffect, useMemo, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { findCharacter } from '../combos/datasource.ts'
import { ApiCombo } from '../combos/models.ts'
import { AppFooter } from '../components/AppFooter/AppFooter.tsx'
import { AppHeader } from '../components/AppHeader/AppHeader.tsx'
import { ComboInfoHeader } from '../components/ComboInfoHeader.tsx'
import { LoadingSpinner } from '../components/LoadingSpinner.tsx'
import { MoveDisplay } from '../components/MoveDisplay.tsx'
import { useDebug } from '../hooks/useDebug.ts'
import { useApiClient } from '../providers/api-provider/api-hooks.ts'
import { useAppSelector } from '../state/hooks/redux-hooks.ts'
import { selectCurrentUserUser } from '../state/slices/current-user-slice.ts'
import { Base64EncodeDecode, BinaryEncodeDecode } from '../utils/encoding.ts'
import { ComboState } from './CreateComboScreen/combo-state.ts'

export const ViewComboScreen: FC = () => {
  const showDebug = useDebug()
  const { encodedCombo } = useParams()
  const apiClient = useApiClient()
  const navigate = useNavigate()

  const [loading, setLoading] = useState(true)
  const [comboState, setComboState] = useState<ComboState | null>(null)
  const [creatorId, setCreatorId] = useState<string | null>(null)

  const profile = useAppSelector(selectCurrentUserUser)
  const isMe = profile?.id && profile?.id === creatorId

  useEffect(() => {
    if (!encodedCombo) return

    if (encodedCombo.length <= 36) {
      // This is a short link combo. Let's get it from the backend
      apiClient
        .makeGet<ApiCombo>(`/api/combos?id=${encodedCombo}`)
        .then(({ data }) => {
          setComboState(data.combo)
          setCreatorId(data.twitch_user_id)
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

  const combo = comboState?.combo ?? null

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
      <div className="mb-6">
        <AppHeader />
      </div>

      <div className="md:py-8">
        <div className="container">
          <ComboInfoHeader
            avatarSize={160}
            character={currentCharacter}
            notes={comboState.notes}
            showNoNotes={false}
          />

          <div className="mt-4">
            {combo.moves.map((move, idx) => (
              <div
                key={`${idx}-${move.name}`}
                className="bg-sf6_royalpurple/30 py-3 px-4 rounded-md mb-2"
              >
                <MoveDisplay
                  move={move}
                  size={40}
                  hideResourceBarMobile={false}
                />
              </div>
            ))}
          </div>

          {showDebug ?
            <hr className="divider my-20" />
          : null}
        </div>

        {
          showDebug ?
            <div className="font-mono overflow-x-scroll">
              <h2 className="text-2xl font-bold">Debug</h2>
              <pre className="">{JSON.stringify(comboState, null, 2)}</pre>
            </div>
            // : <div className="text-center text-xs mt-8">
            //     <a className="text-cmyk_pink" href={`${location.href}?debug=1`}>
            //       Debug? Click then scroll 👇
            //     </a>
            //   </div>
          : null
        }
      </div>

      {isMe && creatorId ?
        <div className="text-center pt-4 pb-14">
          <button
            onClick={handleDeleteCombo}
            className="bg-cmyk_red/60 hover:bg-cmyk_red font-semibold px-5 py-3 text-white rounded-full"
          >
            Delete this combo
          </button>
        </div>
      : null}

      <div className="text-center pt-4 pb-14">
        <a
          href="/"
          className="bg-cmyk_pink/60 hover:bg-cmyk_pink font-semibold px-5 py-3 text-white rounded-full"
        >
          Create a Combo
        </a>
      </div>

      <AppFooter />
    </div>
  )
}
