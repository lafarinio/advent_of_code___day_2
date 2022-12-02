import { Result } from "../modals/result";

export const mapHashToResult: Record<string, Result> = {
  X: Result.lose,
  Y: Result.draw,
  Z: Result.win,
};
