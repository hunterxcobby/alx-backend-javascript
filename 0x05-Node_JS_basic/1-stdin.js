// Print a welcome message to the standard output
process.stdout.write('Welcome to Holberton School, what is your name?\n');

// Check if the standard input is a TTY (terminal)
if (process.stdin.isTTY) {
  // If the standard input is a TTY, listen for data events
  process.stdin.on('data', (data) => {
    // Print the received data along with a message to the standard output
    process.stdout.write(`Your name is: ${data.toString()}`);
    // Exit the process
    process.exit();
  });
} else {
  // If the standard input is not a TTY, listen for data events
  process.stdin.on('data', (data) => {
    // Print the received data along with a message to the standard output
    process.stdout.write(`Your name is: ${data.toString()}`);
    // Exit the process
    process.exit();
  });
  // When the process is about to exit, execute the callback function
  process.on('exit', () => {
    // Print a closing message to the standard output
    process.stdout.write('This important software is now closing\n');
  });
}
