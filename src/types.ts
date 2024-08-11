export enum Direction {
UP = 'UP',
RIGHT = 'RIGHT',
DOWN = 'DOWN',
LEFT = 'LEFT',
}
  
export enum Rotation {
CLOCKWISE = -1,
COUNTER_CLOCKWISE = 1,
}
  
export interface Position {
x: number;
y: number;
rotation: Direction;
}