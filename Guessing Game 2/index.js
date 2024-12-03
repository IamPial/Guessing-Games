/*Day 5: Loops
- Morning: for, while, do-while loops
- Project: Create a number guessing game*/ 

let numOfwon = 0;
let numOfloss = 0;

for(let i = 1; i <= 6 ; i++){
    let guessNumber = parseInt(prompt("Enter  a number from 1 to 6:"));

    //validate inputs;
    if(guessNumber > 7 || guessNumber < 1 || isNaN(guessNumber)){
        document.write("Invalid inputs! Please provide numbers between 1 to 6!!");
        continue; //skip the rest of the loop for this iteration;
    }

    let randomNumber = Math.floor(Math.random() * 5 + 1);
   
    if(guessNumber === randomNumber){
       numOfwon++;
       console.log("You have won");
    }
    else{
       numOfloss++;
       console.log("You have loss");
    }
}

document.write(`<h3>You have won ${numOfwon} times. <br> You have loss ${numOfloss} times.</h3>`)
 
 


