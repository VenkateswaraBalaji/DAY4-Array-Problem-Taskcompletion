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
  let array = userInput[1].split(' ').map(item => parseInt(item));
//  console.log(array);


   let frequencyTable = {}; 
    // console.log(frequencyTable);

    for (let index = 0; index < array.length; index++) {
    frequencyTable [array[index]] = 0;
  }
              
   for (let index=0;index<array.length; index++) {
  frequencyTable [array[index]]++;
  }
  // console.log(frequencyTable);
    for (let key in frequencyTable) {
      if (frequencyTable[key]== 2) {
        console.log (key);
      }
    }


   //end-here
  });