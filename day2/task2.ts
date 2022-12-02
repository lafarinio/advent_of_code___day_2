import { readFileSync } from "fs";
import { EOL } from "os";
import * as R from "rambdax";
import { mapMoveToResult } from "./mappers/move-to-result";
import { Move } from "./modals/move";

const input: string = readFileSync("input2", "utf8");

const splitToArray = R.split(`${EOL}`);
const splitToMovesString = R.split(" ");
const filterInvalidMoveStrings = R.filter<string>(Boolean);
const result = R.piped(
  input,
  splitToArray,
  filterInvalidMoveStrings,
  R.map(R.pipe(splitToMovesString, Move.fromMoveResultInput)),
  R.map(mapMoveToResult),
  R.sum
);

console.log(result);
