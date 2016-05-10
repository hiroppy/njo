#!/usr/bin/env node

'use strict';

const program = require('commander');
const pjson = require('../package.json');
const parse = require('./parse');

program
  .version(pjson.version)
  .option('-i, --indent [width]', 'Set indent size [default: 2]', 2);

program.on('--help', () => {
  console.log('  Examples:');
  console.log('');
  console.log('    $ njo string=hoge object[key]=value array=[fuga,piyo]');
  console.log('');
  console.log('    {');
  console.log('      "string": "hoge",');
  console.log('      "object": {');
  console.log('        "key": "value"');
  console.log('      },');
  console.log('      "array": [');
  console.log('        "fuga",');
  console.log('        "piyo"');
  console.log('      ]');
  console.log('    }');
  console.log('');
});

program.parse(process.argv);

if (process.argv.length === 2) {
  program.help();
}

const args = program.parse(process.argv).args;
const result = parse(args);

console.log(JSON.stringify(result, null, ~~program.indent));
