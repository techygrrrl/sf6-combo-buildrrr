import classNames from 'classnames'
import { FC } from 'react'
import { Move } from '../combos/models'

export type MoveDisplayOption = 'hidden' | 'small' | 'normal'

type MoveDisplayProps = {
  size: number
  move: Move
  hideResourceBarMobile: boolean
  moveNameDisplay: MoveDisplayOption
  helpTextDisplay: MoveDisplayOption
}

export const MoveDisplay: FC<MoveDisplayProps> = ({
  size,
  move,
  hideResourceBarMobile,
  moveNameDisplay,
  helpTextDisplay,
}) => {
  return (
    <div className="relative w-full">
      {move.resources.drive || move.resources.super ?
        <div className="absolute top-0 right-0">
          {move.resources.drive ?
            <span
              className={classNames('gap-2 items-center', {
                hidden: hideResourceBarMobile,
                flex: !hideResourceBarMobile,
              })}
            >
              <div className="w-8 h-4 bg-cmyk_green -skew-y-12 rotate-12" />{' '}
              {move.resources.drive}
            </span>
          : null}
          {move.resources.super ?
            <span
              className={classNames('gap-2 items-center', {
                hidden: hideResourceBarMobile,
                flex: !hideResourceBarMobile,
              })}
            >
              <div className="w-8 h-4 bg-cmyk_pink -skew-y-12 rotate-12" />{' '}
              {move.resources.super}
            </span>
          : null}
        </div>
      : null}

      {moveNameDisplay === 'hidden' ?
        null
      : moveNameDisplay === 'small' ?
        <p className="text-xxs mb-[6px]">{move.name}</p>
      : <p className="font-bold mb-1">{move.name}</p>}

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

      {!move.helpText || helpTextDisplay === 'hidden' ?
        null
      : helpTextDisplay === 'normal' ?
        <p className="mt-2 text-sm text-white/60">{move.helpText}</p>
      : <p className="mt-[6px] text-xxs text-white/70">{move.helpText}</p>}
    </div>
  )
}
