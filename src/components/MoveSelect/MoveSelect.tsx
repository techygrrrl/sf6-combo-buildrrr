import { FC } from 'react'
import { Move } from '../../combos/models'
import { MoveDisplay } from '../MoveDisplay'

type MoveSelectProps = {
  inputSize: number
  moves: Move[]
  onMoveSelect: (move: Move) => void
}

export const MoveSelect: FC<MoveSelectProps> = ({
  moves,
  inputSize,
  onMoveSelect,
}) => {
  return (
    <div className="flex flex-wrap justify-between gap-3">
      {moves.map((move) => (
        <div
          key={move.name}
          className="bg-sf6_mediumpurple/20 hover:bg-sf6_mediumpurple cursor-pointer py-3 px-4 rounded-md"
          style={{
            width: move.width ? `calc(${move.width}% - 0.5rem)` : '100%',
          }}
          onClick={() => onMoveSelect(move)}
        >
          <MoveDisplay move={move} size={inputSize} hideResourceBarMobile={true} />
        </div>
      ))}
    </div>
  )
}
