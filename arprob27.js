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
    //  console.log(Object.entries(frequencyTable).sort ((a,b) => a[1] - b[1]));
     let OrderedArray = Object.entries(frequencyTable).sort ((a,b) => a[1] - b[1]);
      let result = [];

      for (let item of OrderedArray) {
        result.push(item[0]);
      }
      

    console.log(result.join(' '));
  
 //end-here
    });