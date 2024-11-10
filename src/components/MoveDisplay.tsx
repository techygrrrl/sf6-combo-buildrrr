import { FC } from 'react'
import { Move } from '../combos/models'

type MoveDisplayProps = {
  size: number
  move: Move
}

export const MoveDisplay: FC<MoveDisplayProps> = ({ size, move }) => {
  return (
    <div key={move.name}>
      <p className="font-bold my-1">{move.name}</p>

      <div className="flex">
        {move.inputs.map((input) => (
          <div key={input.image} className="flex">
            {input.prefix}
            <img
              style={{ width: size }}
              src={`/images/icons/${input.image}.png`}
            />
            {input.suffix}
          </div>
        ))}
      </div>
    </div>
  )
}
