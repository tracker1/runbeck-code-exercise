import fs from 'mz/fs';
import terminal from '../terminal';

export default async function getFormat(fmt) {
  while (true) {
    fmt = String(fmt || '').trim().toLowerCase();
    if (fmt === 'csv' || fmt === 'tsv') {
      return fmt;
    }
    if (fmt) {
      terminal.write('\nInvalid format, expected "CSV" or "TSV".\n')
    }
    fmt = await terminal.question('\nIs the file format CSV (comma-separated values) or TSV (tab-separated values)?\n: ');
  }
}