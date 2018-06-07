import fs from 'fs';
import csv from 'csv-streamify';

import { TSV_OPTIONS, CSV_OPTIONS } from './constants';
import cleanup from './cleanup'
import handleRow from './handle-row';

export default async ({input, format, count}) => {
  const ctx = {
    rows: -1,
    fieldCount: count,
    valid: 0,
    validPath: './output/valid.csv',
    invalid: 0,
    invalidPath: './output/invalid.csv',
    reader: null,
  };
  try {
    ctx.reader = fs.createReadStream(input);
    var options = format === 'tsv' ? TSV_OPTIONS : CSV_OPTIONS;
    var parser = csv({ ...options });
    parser.on('data', data => handleRow(ctx, data));
    var completion = new Promise((resolve, reject) =>
      parser.on('end', () => {
        delete ctx.reader;
        resolve();
      }).on('error', () => {
        delete ctx.reader;
      })
    );

    ctx.reader.pipe(parser);
    await completion;

    return cleanup(ctx);
  } catch(error) {
    await cleanup(ctx);
    throw error;
  }
};
