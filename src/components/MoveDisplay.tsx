import { FC } from 'react'
import { Move } from '../combos/models'

type MoveDisplayProps = {
  size: number
  move: Move
}

export const MoveDisplay: FC<MoveDisplayProps> = ({ size, move }) => {
  return (
    <div key={move.name} className="relative w-full">
      {move.resources.drive || move.resources.super ?
        <div className="absolute top-0 right-0">
          {move.resources.drive ?
            <span className="flex gap-2 items-center">
              <div className="w-8 h-4 bg-cmyk_green -skew-y-12 rotate-12" /> {move.resources.drive}
            </span>
          : null}
          {move.resources.super ?
            <span className="flex gap-2 items-center">
              <div className="w-8 h-4 bg-cmyk_pink -skew-y-12 rotate-12" /> {move.resources.super}
            </span>
          : null}
        </div>
      : null}

      <p className="font-bold my-1">{move.name}</p>

      <div className="flex items-start gap-1">
        {move.inputs.length === 0 ?
          <p>(No input)</p>
        : null}
        {move.inputs.map((input, idx) => (
          <div key={`${input.image}-${idx}`} className="flex items-start">
            {input.prefix}
            <img
              style={{ width: size }}
              src={`/images/icons/${input.image}.png`}
            />
            {input.suffix}
          </div>
        ))}
      </div>

      {move.helpText && (
        <p className="mt-2 text-sm text-white/60">{move.helpText}</p>
      )}
    </div>
  )
}
