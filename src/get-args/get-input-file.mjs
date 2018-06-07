import fs from 'mz/fs';
import terminal from '../terminal';

const getStat = path => fs.stat(path).catch(_ => null);

export default async function getInputFile(path) {
  while (true) {
    if (path) {
      const fileInfo = await getStat(path);
      if (fileInfo) {
        if (fileInfo.isFile()) {
          return path;
        }
        terminal.write(`Specified path is not a file: ${path}\n`);
      } else {
        terminal.write(`Specified path does not exist: ${path}\n`);
      }
    }
    path = await terminal.question('\nWhere is the file located?\n: ');
  }
}