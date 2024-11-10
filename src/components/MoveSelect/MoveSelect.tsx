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
    <div>
      {moves.map((move) => (
        <div
          key={move.name}
          className="bg-sf6_mediumpurple/20 hover:bg-sf6_mediumpurple cursor-pointer py-3 px-4 mb-2 rounded-md"
          onClick={() => onMoveSelect(move)}
        >
          <MoveDisplay move={move} size={inputSize} />
        </div>
      ))}
    </div>
  )
}
