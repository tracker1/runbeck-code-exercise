export const TSV_OPTIONS = Object.freeze({
  objectMode: true,
  columns: false,
  headers: false,
  ignoreEmpty: true,
  delimiter: '\t',
  quote: '',
  escape: '',
  empty: '',
  trim: true,
});

export const CSV_OPTIONS = Object.freeze({
  objectMode: true,
  columns: false,
  headers: false,
  ignoreEmpty: true,
  delimiter: ',',
  quote: '"',
  escape: '"',
  empty: '',
  trim: true,
});