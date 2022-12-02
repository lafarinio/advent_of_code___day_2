import { MoveTypes } from "../modals/move-types";

export const mapHashToMoveType: Record<string, MoveTypes> = {
  A: MoveTypes.rock,
  B: MoveTypes.paper,
  C: MoveTypes.scissors,
  X: MoveTypes.rock,
  Y: MoveTypes.paper,
  Z: MoveTypes.scissors,
};
