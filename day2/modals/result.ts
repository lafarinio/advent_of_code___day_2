import { MoveTypes } from "./move-types";

export enum Result {
  win = 6,
  draw = 3,
  lose = 0,
}

export const mapToMoveValue: Record<MoveTypes, number> = {
  [MoveTypes.rock]: 1,
  [MoveTypes.paper]: 2,
  [MoveTypes.scissors]: 3,
};
