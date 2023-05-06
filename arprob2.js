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
  //Your code goes here … replace the below line with your code logic 
 
   let length = parseInt(userInput[0]);
   let passports = userInput[1].split(' ');

   // uniquepassports array
   let originalpassports = [];

   // traverse / iterate through the passports arrat
   for (let passport of passports) {
    // check if the passport is already present in unique passports array
    //do nothing
    //else, if the passport is not present in the uniquepassports array
    // push the passport to the uniquepassports array
if (!originalpassports.includes(passport)) {
    originalpassports.push(passport);
}

   }
  console.log(originalpassports.join(' '));

  //end-here
});