import getArgs from './get-args';
import terminal from './terminal';
import processFile from './process-file';

const delay = ms => new Promise(r => setTimeout(r, ms));

export async function quit() {
  await delay(1000);
  terminal.close();
}

export function showHelp() {
  terminal.write(`runbeck-code-exercise

    USAGE: npm start -- -i test/data/input.csv -f csv -c 3

      --input, -i   path to the input file
      --format, -f  "csv" or "tsv"
      --count, -c   expected number of fields

  `);
  return quit();
}

export const writeResults = results => {
  if (results.valid) {
    terminal.write(`${results.valid} results written to ${results.validPath}\n`);
  }
  if (results.invalid) {
    terminal.write(`${results.invalid} results written to ${results.invalidPath}\n`);
  }
  terminal.write('\n');
}

export default async function main() {
  try {
    const argv = await getArgs();
    if (argv.help) {
      return showHelp();
    }
    const results = await processFile(argv);
    writeResults(results);
    return quit();
  } catch(error) {
    console.error(error);
    return quit();
  }
}
