import util from 'util';
import readline from 'readline';

const terminal = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});
const question = terminal.question.bind(terminal);

terminal.question = query => new Promise(r => question(query, r));
terminal.setPrompt(': ');

export default terminal;