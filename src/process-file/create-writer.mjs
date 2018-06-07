import path from 'path';
import fs from 'fs';
import mkdirp from 'mkdirp';

export default filePath => {
  mkdirp.sync(path.dirname(filePath));
  const output = fs.createWriteStream(filePath);
  const finish = new Promise((res, rej) => output.on('close', res).on('error', rej))
  const write = data => {
    output.write(data.map(d => {
      d = String(d).trim();
      if (d.indexOf('"') >= 0 || d.indexOf(',') >= 0) d = d.replace(/\"/g, '""');
      return d;
    }).join('\,'));
    output.write('\n');
  }
  return { output, finish, write };
};