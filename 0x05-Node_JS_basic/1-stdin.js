// Importing the readline module to handle input/output
const readline = require('readline');

// Creating an interface to read lines from stdin and output to stdout
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// Displaying the initial message
console.log('Welcome to Holberton School, what is your name?');

// Waiting for the user input
rl.question('', (name) => {
  // Displaying the user's input
  console.log(`Your name is: ${name}`);

  // Closing the readline interface and displaying the closing message
  rl.close();
});

// Listening for the close event to display the closing message
rl.on('close', () => {
  console.log('This important software is now closing');
  process.exit(0);
});
