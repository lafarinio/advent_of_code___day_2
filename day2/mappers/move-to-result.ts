import { Move } from "../modals/move";
import { MoveEffectiveness } from "../modals/move-effectiveness";
import { mapToMoveValue } from "../modals/result";
import { mapToMoveEffectiveness } from "./move-to-move-effectiveness";

export function mapMoveToResult(move: Move): number {
  const playerEffect: MoveEffectiveness = mapToMoveEffectiveness[move.player];
  const moveValue: number = mapToMoveValue[move.player];
  return moveValue + playerEffect[move.opponent];
}
