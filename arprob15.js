// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  const n = parseInt(userInput[0]);
  const arr = userInput[1].split(" ").map(Number);

  // Create a frequency map to count occurrences of each element
  const freqMap = {};
  for (const num of arr) {
    freqMap[num] = (freqMap[num] || 0) + 1;
  }

  // Find the minimum frequency of any element
  const minFreq = Math.min(...Object.values(freqMap));

  // Collect all elements that occur with minimum frequency
  const leastOccurring = [];
  for (const [num, freq] of Object.entries(freqMap)) {
    if (freq === minFreq) {
      leastOccurring.push(parseInt(num));
    }
  }

  // Sort and print the least occurring elements
  leastOccurring.sort((a, b) => b - a);
  console.log(leastOccurring.join(" "));
  //end-here
});
