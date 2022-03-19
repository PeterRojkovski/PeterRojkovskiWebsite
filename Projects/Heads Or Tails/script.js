//Setting variables for the computer generated coin toss, user guess (to compare with computer generated coin toss) and a variable that will check the validity of the users input

var coinToss=Math.ceil(Math.random()*2)

var guess;

var validInput;

//In this if/else if statement I turned the random number chosen by the computer into string values of either Heads or Tails

if (coinToss===1){
  
  coinToss='Heads'

} else if (coinToss===2){
  
  coinToss='Tails'
  
}

//Here I alert the instructions and idea of the game.

alert('Hello there Human!')

alert('Welcome to Heads Or Tails!')

alert('In this game I (the computer) will flip a coin behind the screen and your job is to guess whether it is heads or tails.')

alert('You can input your guess into the question prompt.')

alert('Let the game begin!')

alert('Flipping coin...')

//Setting the data (either heads or tails) that the user inputs as the data for guess

guess=prompt('What\'s your guess, Heads or Tails?')

//In this if/elseif/else statement I check if the user input is valid. The only valid inputs are heads, Heads, tails and Tails (just in case someone wanted to capitalize). If the input is not valid the user is alerted that it is not, and if the input is valid then either Heads or Tails is set as the value of guess, depending on which one the user inputted.

if (guess==='heads' || guess==='Heads'){
  
  guess ='Heads'

  validInput=true
  
} else if (guess==='tails' || guess==='Tails'){
  
  guess ='Tails'
  
  validInput=true

} else {
  
  alert('Invalid entry, try again!')
  
  validInput=false

}

//This if statement alerts to the user their guess and the computer generated coin toss, and this if statement only works if the users input was valid

if (validInput){
  
  alert ('You chose '+guess+'. Now lets see what I flipped...')
  
  alert('I flipped '+coinToss+'!')

}

//In this if/elseif statement I compare the user inputted guess and the computer generated coin toss, and if they are equal then the user is alerted that they won. Otherwise they are alerted that they lost (eg. if they chose heads and the computer chose tails).

if (guess===coinToss){
  
  alert("Congratulations, you won!")
  
} else if (validInput && guess!==coinToss){
  
  alert('Incorrect, you lost!')
  
}

