import { MoveTypes } from "../modals/move-types";
import { Result } from "../modals/result";

const mapWinToMove: Record<MoveTypes, MoveTypes> = {
  [MoveTypes.paper]: MoveTypes.rock,
  [MoveTypes.rock]: MoveTypes.scissors,
  [MoveTypes.scissors]: MoveTypes.paper,
};
const mapDrawToMove: Record<MoveTypes, MoveTypes> = {
  [MoveTypes.paper]: MoveTypes.paper,
  [MoveTypes.rock]: MoveTypes.rock,
  [MoveTypes.scissors]: MoveTypes.scissors,
};
const mapLoseToMove: Record<MoveTypes, MoveTypes> = {
  [MoveTypes.paper]: MoveTypes.scissors,
  [MoveTypes.rock]: MoveTypes.paper,
  [MoveTypes.scissors]: MoveTypes.rock,
};
// we get REVERSE MOVE to map
export const reverseMapResultToMove: Record<Result, Record<MoveTypes, MoveTypes>> = {
  [Result.win]: mapLoseToMove,
  [Result.draw]: mapDrawToMove,
  [Result.lose]: mapWinToMove,
};
