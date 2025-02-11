import { FC } from 'react'
import { Move } from '../combos/models'

type TextMoveDisplayProps = {
  move: Move
}

export const TextMoveDisplay: FC<TextMoveDisplayProps> = ({ move }) => {
  return (
    <>
      {move.inputs.length === 0 ?
        <span>(No input)</span>
      : null}
      {move.inputs.map((input, idx) => (
        <span key={`${input.image}-${idx}`} className="">
          {input.text}
        </span>
      ))}
    </>
  )
}
