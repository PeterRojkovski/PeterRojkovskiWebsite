//Set variable for while loop wantsToPlay
var wantsToPlay=true

//Here I am creating a while loop that will repeat as long as the player wants to play, and telling the player the scenario of the game.

while (wantsToPlay){
  
//Set variable for valid input of the prompt asking which cave you will go into
  var isValidInput=false

  alert ('You are in a land full of dragons. In front of you, you see three caves. In one cave, the dragon is friendly and will share his treasure with you. The dragons in the other two caves are greedy and hungry, and will eat you on sight.')
   
//If the input to "Which cave will you go into" is valid, the loop will end, and if it is not the number 3, 2 or 1 it will repeat.

  while(isValidInput===false){

//Here I ask the player to choose a number, either "1" "2" or "3"

    var caveChoice=prompt('Which cave will you go into? (1, 2, or 3)')
    
//Here I chose a random whole number, either "1" "2" or "3" and assigned it to the 'safe' cave.

    var safeCave=Math.ceil(Math.random()*3)
      
//I checked if the input is either "1"  "2" or "3" because those are the only valid answers. If they are, then isValidInput is true and the isValidInput loop will not repeat. I turn the answer to the prompt into a number.
    if (caveChoice==1||caveChoice==2||caveChoice==3){
     
      alert('You approach the cave…')
     
      alert('It is dark and spooky…')
     
      isValidInput=true
    
      var caveChoiceNum=parseInt(caveChoice)
      
//If the user clicks cancel, they skip the game because they do not want to play.
    }else if(caveChoice===null){

      wantsToPlay=false

      isValidInput=true

//If the entry is not valid, the whole process repeats because isValidInput stays false.
    }else {

      alert('Invalid entry, please enter either \'1\' , \'2\' or \'3\')')
      
    }
      
  
  }
  
//In this if/else statement I check if the choice (either "1" "2" or "3") that the player inputs into the prompt is the same as the safe cave. If so, then a positive message will play saying that the player gets a treasure. If the player chose a number that the computer did not assign to the safe cave, (but is still a valid input because of line 10-47) then the player is shown a negative message that varies based on the chosen cave.

  if (wantsToPlay===true){

   if (caveChoiceNum===safeCave){
    
      alert('A large dragon jumps out in front of you! It opens its jaws and... Gives you a treasure!')
    
      alert('You won the game!')
  
    }else if (caveChoiceNum===1){

      alert('A large dragon jumps out in front of you! It opens its jaws and... Gobbles you down in one bite!')
          
    }else if(caveChoiceNum===2){

      alert('A large dragon jumps out in front of you! It opens its jaws and... Burns you to a crisp!')

    }else if(caveChoiceNum===3){

      alert('A large dragon jumps out in front of you! It opens its jaws and... Melts you with stomache acid!')

    }

    if(caveChoiceNum!==safeCave){
      
      alert('You lost...')
    
    }
  //Here I ask the player if they want to play again, and set their answer as a boolean variable. If they click "ok" then wantsToPlay is true, if they click "cancel" then wantsToPlay is false.
  }
  wantsToPlay=confirm('Do you want to play again?')
  
//I close the "when" statement for the variable wantsToPlay because if wantsToPlay is true, the game will forever repeat and the user will get alerted "Here we go again". This happens when the player clicks "ok" in the last confirm. If wantsToPlay is false, this means the player clicked cancel, they will get alerted "Thanks for playing!", and then the game will end.

  if (wantsToPlay){
    
    alert('Here we go again...')
    isValidInput=false
  } else {
    
    alert('Thanks for playing!')
  
  }
}
