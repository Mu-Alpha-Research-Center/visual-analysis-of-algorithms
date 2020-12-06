var readline = require('readline');

function toSeconds(time) {
  let result = 0;
  let items = time.split(':').reverse();
  for (let i = 0; i < items.length; i++) {
    result += items[i] * 60 ** i;
  }
  return result;
}

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  terminal: false
});

var lines = [];

rl.on('line', (line) => {
  line = line.trim();
  if (line !== '') {
    lines.push(line);
  }
});

rl.on('close', () => {
  let completed = lines.pop();

  let a = toSeconds('200:00:00');
  let b = toSeconds(completed);
  let c = a - b;
  let result = [];

  for (let i = 2; i >= 0; i--) {
    let n = Math.floor(c / 60 ** i);
    result.push(n)
    c -= n * 60 ** i
  }
  let remaining = result.join(':');

  console.log(`| ${completed} | ${remaining} |`);
});
