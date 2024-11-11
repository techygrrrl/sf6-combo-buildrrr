import { FC, useMemo } from 'react'
import { useParams } from 'react-router-dom'
import { findCharacter } from '../combos/datasource.ts'
import { ComboInfoHeader } from '../components/ComboInfoHeader.tsx'
import { MoveDisplay } from '../components/MoveDisplay.tsx'
import { useDebug } from '../hooks/useDebug.ts'
import { Base64EncodeDecode, BinaryEncodeDecode } from '../utils/encoding.ts'
import { ComboState } from './CreateComboScreen/combo-state.ts'
import { Disclaimer } from '../components/Disclaimer.tsx'

export const ViewComboScreen: FC = () => {
  const showDebug = useDebug()
  const { encodedCombo } = useParams()

  const comboState: ComboState | null = useMemo(() => {
    if (!encodedCombo) return null

    try {
      if (encodedCombo.startsWith('ey')) {
        return Base64EncodeDecode.decode<ComboState>(encodedCombo)
      } else {
        return BinaryEncodeDecode.decode<ComboState>(encodedCombo)
      }
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
        <Disclaimer />
      </div>

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
                <MoveDisplay move={move} size={40} />
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
        // : <div className="text-center text-xs mt-8">
        //     <a className="text-cmyk_pink" href={`${location.href}?debug=1`}>
        //       Debug? Click then scroll 👇
        //     </a>
        //   </div>
        : null
        }
      </div>

      <div className="text-center pt-4">
        <a href="/" className="bg-cmyk_pink/60 hover:bg-cmyk_pink font-semibold px-5 py-3 text-white rounded-full">
          Create a Combo
        </a>
      </div>
    </div>
  )
}
