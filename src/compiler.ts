import {
  input,
  output,
  split,
  len,
  has,
  endsWith,
  startsWith,
  replace,
  lower,
  upper,
  capitalize,
  trim
} from '../libs/builtin.ts';

export default class Compiler {
  _fn: string;
  _src: string;
  constructor(fn: string) {
    this._fn = fn;
    this._src = new TextDecoder('utf-8').decode(Deno.readFileSync(fn));
  }

  compile() {
    // todo: complete
    var bigger = this._src.split("\n");
    for (var p of bigger) {
      var onliner = p.split(" ");
      for (var line of onliner) {
        if (onliner[0] === "out") {
          if (onliner[1].includes("\"")) {
            return output(onliner[1].replace("\"", "").replace("\"", ""));
          } else if (onliner[1].includes("\'")) {
            return output(onliner[1].replace("\'", "").replace("\'", ""));
          }
        }
      }
    }
  }
}
