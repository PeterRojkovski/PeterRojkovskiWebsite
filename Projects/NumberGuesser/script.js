//Creating variables

var randomNumber=Math.ceil(Math.random()*10)

var guess;

var myInput;

var validInput=false;

//Alerting instructions

alert ('Hello there human!')

alert ("Welcome to the random number guesser...")

alert ('In this game, you will guess a random whole number between 1 and 10 and input it into the prompt response.')

alert ('The computer (me) will then pick a random whole number between 1 and 10, and you can see if you guessed correctly!')

alert ('Let the games begin...')


//Created while loop so that number guesses will not work unless input is whole number between 1 and 10

while (validInput===false) {
  
//Set the only valid inputs to be every whole number from 1 to 10
  
  guess=prompt ('Pick a random whole number between 1 and 10')

  if (guess > 0 && guess < 11) {
  
//Alerted to the user their number and the computer generated number, stopped the while loop, and turned the guess into a number for comparison

    alert ('Your guess is '+guess+', now lets see what number I picked...')

    alert ('I chose '+randomNumber+'!')

    myInput=parseInt(guess)

    validInput=true
   
//Compared the numerical value of the users guess to the computer generated number, and if they are the same then the user will be alerted that they won
   
   if (myInput===randomNumber){
    
      alert ('Judging by my calculations, you won!')
      
//If the numerical value of the users guess is not the same as the computer generated number, the user is alerted that they lost
    
    }else {
    
      alert ('Judging by my calculations, you lost... Better luck next time!')

    }

//If the user does not want to input a number (and therefore does not want to play) and they click cancel, the value is returned as null, the user is bid farewell and the loop is ended

  } else if (guess===null) {

    alert ('Never mind then, have a good day!')

    validInput=true
  
//If the user does not click cancel, and the user does not enter a valid input, they are alerted that their input was not valid and the loop repeats

  } else {
  
    alert ('Has to be a whole number between 1 and 10, nice try!') 
  
  }
  
}