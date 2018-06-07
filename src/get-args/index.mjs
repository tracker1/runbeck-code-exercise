import minimist from 'minimist';
import getInputFile from './get-input-file';
import getFormat from './get-format';
import getFieldCount from './get-field-count';
import terminal from '../terminal';

export default async function getArgs() {
    var argv = minimist(process.argv.slice(2));
    if (argv['?'] || argv.h || argv.help) return { help: true };

    const input = await getInputFile(argv.input || argv.i);
    const format = await getFormat(argv.format || argv.f);
    const count = await getFieldCount(argv.count || argv.c);

    // terminal.write(`\n\n\ninput: ${input}\nformat: ${format}\ncount: ${count}\n\n`);
    return { input, format, count };
}
