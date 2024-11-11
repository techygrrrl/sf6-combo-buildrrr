import { FC, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { findCharacter } from '../combos/datasource.ts'
import { ComboInfoHeader } from '../components/ComboInfoHeader.tsx'
import { MoveDisplay } from '../components/MoveDisplay.tsx'
import { ComboState } from './CreateComboScreen/combo-state.ts'
import { useDebug } from '../hooks/useDebug.ts'
import { Encoding } from '../utils/encoding.ts'

export const ViewComboScreen: FC = () => {
  const showDebug = useDebug()
  const { encodedCombo } = useParams()

  const comboState: ComboState | null = useMemo(() => {
    if (!encodedCombo) return null

    try {
      return Encoding.decode<ComboState>(encodedCombo)
    } catch (e) {
      console.error(e)
      return null
    }
  }, [encodedCombo])

  const combo = comboState?.combo ?? null

  const currentCharacter = useMemo(() => {
    if (!combo) return null

    return findCharacter(combo.character)
  }, [combo])

  // TODO: Redirect
  if (!currentCharacter || !combo || !comboState) {
    return <div className="text-center p-10">Loading...</div>
  }

  return (
    <div className="p-4 md:p-8">
      <div className="container">
        <ComboInfoHeader
          avatarSize={160}
          character={currentCharacter}
          notes={comboState.notes}
        />

        <div className="mt-4">
          {combo.moves.map((move) => (
            <div
              key={move.name}
              className="bg-sf6_royalpurple/30 py-3 px-4 rounded-md mb-2"
            >
              <MoveDisplay move={move} size={50} />
            </div>
          ))}
        </div>

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
  )
}
