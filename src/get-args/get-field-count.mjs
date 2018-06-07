import fs from 'mz/fs';
import terminal from '../terminal';

export default async function getFieldCount(count) {
  while (true) {
    if (count && !isNaN(count)) {
      count = parseInt(count, 10);
      if (count < 1 || count > 1024) {
        terminal.write('\nInvalid field count, should be a number between 1 and 1024.\n');
      } else {
        return count;
      }
    }
    count = await terminal.question('\nHow many fields should each record contain?\n: ');
  }
}