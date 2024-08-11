import { useState } from 'react';
import { ArrowBigUpDash, Bot } from 'lucide-react';
import { Direction, Position, Rotation } from '../types';
import RobotMovementControls from './RobotMovementControls';

// Starting grid size and position.
const gridSize = 5;

const startingPosition: Position = {
  x: 0,
  y: 0,
  rotation: Direction.RIGHT,
};

const RobotGrid = () => {
  const [positionState, setPositionState] = useState(startingPosition);

  // Move the robot within the grid updating the position state.
  const move = () => {
    const newPosition = { ...positionState };
    switch (positionState.rotation) {
      case Direction.UP:
        newPosition.y -= 1;
        if (newPosition.y < 0 || newPosition.y >= gridSize) {
          return;
        }
        break;
      case Direction.RIGHT:
        newPosition.x += 1;
        if (newPosition.x < 0 || newPosition.x >= gridSize) {
          return;
        }
        break;
      case Direction.DOWN:
        newPosition.y += 1;
        if (newPosition.y < 0 || newPosition.y >= gridSize) {
          return;
        }
        break;
      case Direction.LEFT:
        newPosition.x -= 1;
        if (newPosition.x < 0 || newPosition.x >= gridSize) {
          return;
        }
        break;
    }
    setPositionState(newPosition);
  };

  // Rotate the robot and update the position.
  const rotate = (rotation: Rotation) => {
    const newPosition = { ...positionState };
    switch (positionState.rotation) {
      case Direction.UP:
        newPosition.rotation =
          rotation === Rotation.CLOCKWISE ? Direction.RIGHT : Direction.LEFT;
        break;
      case Direction.RIGHT:
        newPosition.rotation =
          rotation === Rotation.CLOCKWISE ? Direction.DOWN : Direction.UP;
        break;
      case Direction.DOWN:
        newPosition.rotation =
          rotation === Rotation.CLOCKWISE ? Direction.LEFT : Direction.RIGHT;
        break;
      case Direction.LEFT:
        newPosition.rotation =
          rotation === Rotation.CLOCKWISE ? Direction.UP : Direction.DOWN;
        break;
    }
    setPositionState(newPosition);
  };

  // Used to get the grid number based on the x and y coordinates, matching the grid layout index.
  const getGridNumber = (x: number, y: number) => {
    return y * gridSize + x;
  };

  // Render the robot based on the rotation
  const robotHtml = () => {
    const bot = (
      <>
        <ArrowBigUpDash /> <Bot /> <ArrowBigUpDash />
      </>
    );

    switch (positionState.rotation) {
      case Direction.UP:
        return (
          <p className='text-black flex items-center justify-center'>{bot}</p>
        );
      case Direction.RIGHT:
        return (
          <p className='rotate-90 text-black flex items-center justify-center'>
            {bot}
          </p>
        );
      case Direction.DOWN:
        return (
          <p className='rotate-180 text-black flex items-center justify-center'>
            {bot}
          </p>
        );
      case Direction.LEFT:
        return (
          <p className='-rotate-90 text-black flex items-center justify-center'>
            {bot}
          </p>
        );
    }
  };

  return (
    <div>
      <div className='grid grid-cols-5 gap-1'>
        {Array.from({ length: gridSize * gridSize }).map((_, index) => {
          const shouldContainRobot =
            getGridNumber(positionState.x, positionState.y) === index;
          return (
            <div
              key={index}
              className={`text-black ${
                shouldContainRobot ? 'bg-[#ECEAE4]' : 'bg-[#F7F7F7]'
              } h-[8rem] w-[8rem] text-lg flex items-center justify-center`}
            >
              {shouldContainRobot ? robotHtml() : ''}
            </div>
          );
        })}
      </div>

      <div className='mt-6'>
        <RobotMovementControls rotate={rotate} move={move} />
      </div>
    </div>
  );
};

export default RobotGrid;
