import { mapHashToMoveType } from "../mappers/hash-to-move";
import { mapHashToResult } from "../mappers/hash-to-result";
import { reverseMapResultToMove } from "../mappers/result-to-move";
import { MoveTypes } from "./move-types";
import { Result } from "./result";

export class Move {
  constructor(public opponent: MoveTypes, public player: MoveTypes) {}

  public static fromInput(data: string[]): Move {
    return new Move(mapHashToMoveType[data[0]], mapHashToMoveType[data[1]]);
  }

  public static fromMoveResultInput(data: string[]): Move {
    const opponent: MoveTypes = mapHashToMoveType[data[0]];
    const playerResult: Result = mapHashToResult[data[1]];
    const player: MoveTypes = reverseMapResultToMove[playerResult][opponent];

    return new Move(opponent, player);
  }
}
