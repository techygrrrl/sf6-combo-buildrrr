import { FC, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { findCharacter } from '../combos/datasource.ts'
import { ComboInfoHeader } from '../components/ComboInfoHeader.tsx'
import { MoveDisplay } from '../components/MoveDisplay.tsx'
import { base64DecodeJson } from '../utils/base64.ts'
import { ComboState } from './CreateComboScreen/combo-state.ts'

export const ViewComboScreen: FC = () => {
  const { encodedCombo } = useParams()

  // const combo = getSampleCombo()
  const comboState: ComboState | null = useMemo(() => {
    if (!encodedCombo) return null

    try {
      return base64DecodeJson<ComboState>(encodedCombo)
    } catch {
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

        <hr className="divider my-20" />

        <div className="font-mono">
          <h2 className='text-2xl font-bold'>Debug</h2>
          <pre>{JSON.stringify(comboState, null, 2)}</pre>
        </div>
      </div>
    </div>
  )
}
