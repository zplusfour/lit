import * as compiler from './compiler.ts';

export default class LTXCli {
  _argv: string[];
  constructor() {
    this._argv = Deno.args;
  }

  run() {
    const decoder = new TextDecoder('utf-8');
    const fileData = decoder.decode(Deno.readFileSync(this._argv[1]));
    var Compiler = new compiler.default(this._argv[1]);

    console.log(Compiler.compile());
  }

  help() {
	  return (`
	  Run: ltx run <filename>
		 `);
  }
}
