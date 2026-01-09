// evenOdd
const num = parseInt(process.argv[2]);

if (num % 2 === 0) {
  console.log(`${num} is Even`);
} else {
  console.log(`${num} is Odd`);
}
