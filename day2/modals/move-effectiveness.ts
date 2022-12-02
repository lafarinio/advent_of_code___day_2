import { MoveTypes } from "./move-types";
import { Result } from "./result";

export type MoveEffectiveness = Record<MoveTypes, Result>;
