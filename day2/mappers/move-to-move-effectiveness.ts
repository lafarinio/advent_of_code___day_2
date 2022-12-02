import { MoveEffectiveness } from "../modals/move-effectiveness";
import { MoveTypes } from "../modals/move-types";
import { Result } from "../modals/result";

const mapPaperToResult: MoveEffectiveness = {
  [MoveTypes.paper]: Result.draw,
  [MoveTypes.rock]: Result.win,
  [MoveTypes.scissors]: Result.lose,
};
const mapRockToResult: MoveEffectiveness = {
  [MoveTypes.paper]: Result.lose,
  [MoveTypes.rock]: Result.draw,
  [MoveTypes.scissors]: Result.win,
};
const mapScissorsToResult: MoveEffectiveness = {
  [MoveTypes.paper]: Result.win,
  [MoveTypes.rock]: Result.lose,
  [MoveTypes.scissors]: Result.draw,
};
export const mapToMoveEffectiveness: Record<MoveTypes, MoveEffectiveness> = {
  [MoveTypes.paper]: mapPaperToResult,
  [MoveTypes.rock]: mapRockToResult,
  [MoveTypes.scissors]: mapScissorsToResult,
};
