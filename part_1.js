const fs = require('fs');
const readline = require('readline');

const input = [];

async function processLineByLine() {
  const fileStream = fs.createReadStream('input.txt');

  const rl = readline.createInterface({
    input: fileStream,
    crlfDelay: Infinity,
  });
  // Note: we use the crlfDelay option to recognize all instances of CR LF
  // ('\r\n') in input.txt as a single line break.

  for await (const line of rl) {
    input.push(parseInt(line));
  }

  console.error(input);

  for (let i = 0; i < input.length; i++) {
    for (let k = i + 1; k < input.length; k++) {
      if (input[i] + input[k] === 2020) {
        console.error('Got it! ', i, input[i], k, input[k]);
        const result = input[i] * input[k];
        console.error('Result: ', result);
      }
    }
  }
}

processLineByLine();
