 //guessing game;
 //guess a number from 1 to 5;
 //generate a random number between 1 to 5;
 //If the guess number matches random number, then print the number;
 //run the game for 5 times;
 //show the number of wons and losts;
   
   let numOfWon = 0;
   let numOfLost = 0;

 for(let i = 1; i <=5; i++){
    let guessNumber = parseInt(prompt("Enter a number: "));
    let randomNumber = Math.floor(Math.random() * 5 + 1);
  
    if(guessNumber == randomNumber){
      console.log("You have won");
      numOfWon++;
    }
    else{
      console.log("You have lost. The random number is "+ randomNumber);
      numOfLost++;
    }

 }
//for display in my webpage not to the console:
 document.write("Total number of won: "+numOfWon+"<br>");
 document.write("Total number of Lost: "+numOfLost);
 