import { FC } from 'react';
import { RotateCcw, RotateCw } from 'lucide-react';
import { Rotation } from '../types';

interface RobotMovementControlsProps {
  rotate: (rotation: Rotation) => void;
  move: () => void;
}

const RobotMovementControls: FC<RobotMovementControlsProps> = ({
  rotate,
  move,
}) => {
  return (
    <div className='grid grid-cols-3 gap-1'>
      <button
        className='flex items-center justify-center gap-2'
        onClick={() => rotate(Rotation.COUNTER_CLOCKWISE)}
      >
        {<RotateCcw />} Rotate Left
      </button>
      <button onClick={move}>Forward</button>
      <button
        className='flex items-center justify-center gap-2'
        onClick={() => rotate(Rotation.CLOCKWISE)}
      >
        {<RotateCw />}
        Rotate Right
      </button>
    </div>
  );
};

export default RobotMovementControls;
