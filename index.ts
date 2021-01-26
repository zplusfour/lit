// The Lit Programming Language

import * as CLI from './src/cli.ts';

const ltxcli = new CLI.default();

if (ltxcli._argv.length < 2) {
	ltxcli.help();
}else {
	if (ltxcli._argv[0].toLowerCase() === "run") {
  		ltxcli.run();
	}
}

export {};
