import { FC, useMemo } from 'react'
import { findCharacter, getSampleCombo } from '../combos/datasource.ts'
import { useParams } from 'react-router-dom'
import { Combo } from '../combos/models.ts'
import { base64DecodeJson } from '../utils/base64.ts'
import { MoveDisplay } from '../components/MoveDisplay.tsx'
import { CharacterAvatar } from '../components/CharacterAvatar.tsx'

export const ViewComboScreen: FC = () => {
  const { encodedCombo } = useParams()

  const combo = getSampleCombo()
  // const combo: Combo | null = useMemo(() => {
  //   if (!encodedCombo) return null

  //   try {
  //     return base64DecodeJson<Combo>(encodedCombo)
  //   } catch {
  //     return null
  //   }
  // }, [encodedCombo])

  const currentCharacter = useMemo(() => {
    if (!combo) return null

    return findCharacter(combo.character)
  }, [combo])

  // TODO: Redirect
  if (!currentCharacter || !combo) {
    return <div className="text-center p-10">Loading...</div>
  }

  return (
    <>
      <div className="container">
        <h1></h1>

        <h2>{currentCharacter.name}</h2>
        <div className="w-56">
          <CharacterAvatar character={currentCharacter} />
        </div>

        {combo.moves.map((move) => (
          <MoveDisplay key={move.name} move={move} size={70} />
        ))}

        <div className="my-6">
          <div className="md:w-1/2">
            <h2>Combo</h2>
            <pre>{JSON.stringify(combo, null, 2)}</pre>
          </div>
        </div>
      </div>
    </>
  )
}
