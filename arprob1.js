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

  const stack = [];
  const result = [];

  // Iterate over the array from right to left
  for (let i = n - 1; i >= 0; i--) {
    // Pop elements from the stack until we find one that is smaller than the current element
    while (stack.length > 0 && stack[stack.length - 1] >= arr[i]) {
      stack.pop();
    }

    // If there is no smaller element, add -1 to the result
    if (stack.length === 0) {
      result.unshift(-1);
    } else {
      result.unshift(stack[stack.length - 1]);
    }

    // Push the current element onto the stack
    stack.push(arr[i]);
  }

  // Print the result array
  console.log(result.join(" "));
  //end-here
});
