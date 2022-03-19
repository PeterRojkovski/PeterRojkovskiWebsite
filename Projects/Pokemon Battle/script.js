//set variables for while and if statement conditions
var validMove=false;
var wantsToPlay=true;
var validPokemon;
var runAway=false
var playerMove;

//Set future pokemon game undefined variables
var playerPokemon;var playerPokemonType;var playerEnergyType;var playerAttack1;var playerAttack2;var playerAttack3;var enemyPokemonType;var enemyAttack1;var enemyAttack2;var enemyAttack3;var superEffective;var playerAttack1Damage;var playerAttack2Damage;var playerAttack13amage;var enemyAttack1Damage;var enemyAttack2Damage;var enemyAttack3Damage;

//While loop for if the player wants to play again, and also if the player doesn't want to play anymore (they click cancel on any prompts)
while(wantsToPlay===true){

//The values of these variables change every game, so I reset them every time the player wants to play again
  var playerHP=100
  var playerEnergyNum=10
  var playerHealNum=5
  var enemyPokemon=Math.ceil(Math.random()*3) 
  var enemyHP=100

//Alerts game name
  alert('Welcome to Pokemon Battle!')

//Sets validPokemon to false so that if the player does not enter the correct values the code will repeat
  validPokemon=false;

  while (validPokemon===false){  

//Player chooses pokemon, each pokemon is set to a numerical value so that the user has to enter 1, 2 or 3 (or 0 but that's a secret...)
    playerPokemon=prompt('⍑⍊Choose a pokemon!⍑⍊ \nMake sure to enter the number for the pokemon of your choice! \n 1=Squirtle \n 2=Bulbasoar \n 3=Charmander')

//This if/elseif/else statement sets outcomes based on the answer to the prompt given to the user, and if the number is 0, 1, 2 or 3, the answer is valid and the while and if statements close. If the user clicks cancel, the value returned is null and the while statement closes, bringing the user to the very end of the code because they do not want to play. If an invalid value is entered (anything except for null, 0, 1, 2 or 3) there is an alert telling the user to fix the answer and the prompt repeats.
    if (playerPokemon>=1 && playerPokemon<=3 && Number.isInteger(Number(playerPokemon))||playerPokemon==='0') {

      validPokemon=true
    
    }else if(playerPokemon===null){
    
      wantsToPlay=false
    
      validPokemon=true
    
    }else{
      
      alert('Come on dude, don\'t embarass yourself! \nEnter the number that corresponds to the Pokemon you want to choose.')
    
    }
  
  }
//Here is a switch statement for the value entered by the user in the prompt asking to choose a pokemon. This statement only works if the user does not click cancel, because then wantsToPlay is false and the player is sent to the end of the code. For every valid case (1, 2, 3, 0) there are different values going into the variables playerPokemon, playerPokemonType, playerEnergyType, and all of the player atacks. In the special case of '0', the numerical values for # of HP, damage, heals and energy are all set to infinity.
  if (wantsToPlay===true){
    switch (Number(playerPokemon)){
      case 1:
        playerPokemon='Squirtle';
        playerPokemonType="Water";
        playerEnergyType='Water Energy';
        playerAttack1='Tail Slap';    
        playerAttack2='Water Pistol';   
        playerAttack3='Geiser Blast';
        break;
      case 2:
        playerPokemon='Bulbasoar';    
        playerPokemonType="Grass";
        playerEnergyType='Grass Energy';
        playerAttack1='Bite';
        playerAttack2='Bullet Seed';
        playerAttack3='Razor Leaf';
        break;
      case 3:
        playerPokemon='Charmander';
        playerPokemonType="Fire";
        playerEnergyType="Fire Energy";
        playerAttack1='Charge';
        playerAttack2='Ember';
        playerAttack3='Fire Fang';
        break;
      case 0:
        playerPokemon='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣';
        playerPokemonType="E⍊ᒷ∷||ℸ ̣ ⍑╎リ⊣";
        playerEnergyType="Uリ╎⍊ᒷ∷ᓭᒷ";
        playerHP=Infinity;
        playerAttack1Damage=Infinity;
        playerAttack2Damage=Infinity;
        playerAttack3Damage=Infinity;
        playerHealNum=Infinity;
        playerEnergyNum=Infinity;
        playerAttack1="E ̇/ᓵᔑꖎ╎ʖ⚍∷";
        playerAttack2="C∷ᒷᔑℸ ̣ ╎𝙹リ";
        playerAttack3="Fᔑℸ ̣ ᒷ";
        break;
    }
    
//Here I alert the introduction for the pokemon (which is different for each pokemon chosen) and if the easter egg is chosen, there is a cryptic line of messages. 
    if (playerPokemon!='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
      alert('You chose ' + playerPokemon + '! ' + playerPokemon + ' is a '+ playerPokemonType + ' type pokemon, and is ready for battle!')
    }else if (playerPokemon==='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
      alert('...')
      alert('oh no')
      alert("SyntaxError: Iリ⍊ᔑꖎ╎↸ 𝙹∷ ⚍リᒷ ̇/!¡ᒷᓵℸ ̣ ᒷ↸ ℸ ̣ 𝙹ꖌᒷリᔑℸ ̣  /ᓭᓵ∷╎!¡ℸ ̣.⋮ᓭ:77:26")
    }

//Here I alert the data for different aspects of the pokemon such as their HP, attacks, attack damage, name, pokemon type and energy type. Again, the answers are different if the easter egg is chosen.
    if (playerPokemon!='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
      alert(playerPokemon+' has '+playerHP+' HP (health) and has the following attacks:\n'+playerAttack1 + ' (Normal Attack, 10-15 base damage, uses 1 '+playerEnergyType+')\n'+playerAttack2 + ' (' + playerPokemonType+' Attack, 20-25 base damage, uses 2 '+playerEnergyType+')\n'+playerAttack3 + ' ('+ playerPokemonType+' Attack, 30-35 base damage, uses 3 '+playerEnergyType+')\n\nNOTE: All attack damages are random in the shown ranges.')
    }else{
      alert(playerPokemon+'  ⍑ᔑᓭ '+playerHP+' ᔑリ↸ ⍑ᔑᓭ ℸ ̣ ⍑ᒷ ⎓𝙹ꖎꖎ𝙹∴╎リ⊣ ᔑℸ ̣ ℸ ̣ ᔑᓵꖌᓭ:'+playerAttack1 + ' (mᔑꖎᒷ⍊𝙹ꖎᒷリᓵᒷ  ' + playerAttack1Damage + ' ʖᔑᓭᒷ ↸ᔑᒲᔑ⊣ᒷ, ⚍ᓭᒷᓭ ╎リ⎓╎リ╎ℸ ̣ || '+playerEnergyType+')'+playerAttack2 + ' (' + playerPokemonType+' Aℸ ̣ ℸ ̣ ᔑᓵꖌ, ' +playerAttack2Damage + 'ʖᔑᓭᒷ ↸ᔑᒲᔑ⊣ᒷ, ⚍ᓭᒷᓭ ╎リ⎓╎リ╎ℸ ̣ || '+playerEnergyType+')'+playerAttack3 + ' ('+ playerPokemonType+' Aℸ ̣ ℸ ̣ ᔑᓵꖌ, ' + playerAttack3Damage + ' ʖᔑᓭᒷ ↸ᔑᒲᔑ⊣ᒷ, ⚍ᓭᒷᓭ ╎リ⎓╎リ╎ℸ ̣ ||  '+playerEnergyType+')\nWhat have you done...')
    }

//Enemy Pokemon is set as a random computer generated number (1, 2 or 3), and so different values are set based on the number that is generated. These values are the name of the enemy pokemon, its type, energy type, and attacks.
    switch(enemyPokemon){
      case 1:
        enemyPokemon='Shadow Piplup';
        enemyPokemonType='Water';
        enemyEnergyType='Water Energy';
        enemyAttack1= 'Peck';
        enemyAttack2='Bubble Hold';
        enemyAttack3='Wave Splash';
        break;
      case 2:
        enemyPokemon='Shadow Snivy';
        enemyPokemonType='Grass';
        enemyEnergyType='Grass Energy';
        enemyAttack1= 'Cut';
        enemyAttack2='Leaf Blade';
        enemyAttack3='Vine Whip';
        break;
      case 3:
        enemyPokemon='Shadow Tepig';
        enemyPokemonType='Fire';
        enemyEnergyType='Fire Energy';
        enemyAttack1= 'Tackle';
        enemyAttack2='Fire Breath';
        enemyAttack3='Flare';
        break;
    }

//Here I alert the scenario for the pokemon meeting an enemy to battle, and the enemy pokemon is defined. If the easter egg is picked, there is no enemy and you are alerted that you step out of the shadows.
    if (playerPokemon!='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣') {
      alert('As you\'re walking around with your new pokemon, a strange figure steps out of the shadows and lurches into your path...')
      alert('This figure looks devoid of life, as if it has ⍑0⍊  soul...')
      alert('You\'ve been officially challenged to a duel!\nYou have no choice but to accept...')
      alert('Your enemy chooses '+enemyPokemon+'!')
      alert('May the best pokemon win!')
    } else{
      alert('You and Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣step out of the shadows...')
      alert('Something\'s not right...')
    }

    

//This is the beginning of the battle. The while statement will keep the battle going as long as the player has more than 0 HP, the enemy has more than 0 HP, the player did not click cancel on any prompts, and the player did not choose to run away.
    while (playerHP>0 && enemyHP>0 && runAway===false && wantsToPlay===true){

//Here, if the player does not choose the easter egg pokemon, each battle round that is played, the values for each attack (player and enemy) are reset randomly in ranges of 5. (minimum 10 for attack 1)
      if (playerPokemon !='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
        playerAttack1Damage=Math.ceil(Math.random()*5+10)
        playerAttack2Damage=Math.ceil(Math.random()*5+20)
        playerAttack3Damage=Math.ceil(Math.random()*5+30)
        enemyAttack1Damage=Math.ceil(Math.random()*5+10)
        enemyAttack2Damage=Math.ceil(Math.random()*5+20)
        enemyAttack3Damage=Math.ceil(Math.random()*5+30)
      }
//Here I check what the value is for the variables defining the type of the players pokemon and the type of the enemys pokemon. If the values correlate in a certain way (eg. player pokemon is water type and the enemy pokemon is fire type) then one of the pokemon gets a damage boost and the other gets a damage drop. Which pokemon gets the advantage, and the values that correlate, are based on actual pokemon weaknesses and resistance. If the user picks the easter egg, the value is changed to a string (damage bonus or drop won't change because the damage is infinity). These bonuses and drops to damage only work for the second and third attacks because the first attack is a 'basic' attack. If the player gets a bonus, the attack is super effective. If the player gets a drop, the attack is not super effective. Otherwise nothing is changed.
      switch (playerPokemonType){
        case 'Water':
          if (enemyPokemonType==='Fire'){
            playerAttack2Damage=playerAttack2Damage+3
            playerAttack3Damage=playerAttack3Damage+3
            enemyAttack2Damage=enemyAttack2Damage+3
            enemyAttack3Damage=enemyAttack3Damage+3
            superEffective=true
          }else if(enemyPokemonType==='Grass'){
            playerAttack2Damage=playerAttack2Damage-3
            playerAttack3Damage=playerAttack3Damage-3
            enemyAttack2Damage=enemyAttack2Damage+3
            enemyAttack3Damage=enemyAttack3Damage+3
            superEffective=false
          }
          break;
        case 'Fire':
          if (enemyPokemonType==='Grass'){
            playerAttack2Damage=playerAttack2Damage+3;
            playerAttack3Damage=playerAttack3Damage+3;
            enemyAttack2Damage=enemyAttack2Damage-3;
            enemyAttack3Damage=enemyAttack3Damage-3;
            superEffective=true
          }else if(enemyPokemonType==='Water'){
            playerAttack2Damage=playerAttack2Damage-3
            playerAttack3Damage=playerAttack3Damage-3
            enemyAttack2Damage=enemyAttack2Damage+3
            enemyAttack3Damage=enemyAttack3Damage+3
            superEffective=false
          }
          break;
        case 'Grass':
          if (enemyPokemonType==='Water'){
            playerAttack2Damage=playerAttack2Damage+3;
            playerAttack3Damage=playerAttack3Damage+3;
            enemyAttack2Damage=enemyAttack2Damage-3;
            enemyAttack3Damage=enemyAttack3Damage-3;
            superEffective=true
          }else if(enemyPokemonType==='Fire'){
            playerAttack2Damage=playerAttack2Damage-3
            playerAttack3Damage=playerAttack3Damage-3
            enemyAttack2Damage=enemyAttack2Damage+3
            enemyAttack3Damage=enemyAttack3Damage+3
            superEffective=false
          }
          break;
        case "E⍊ᒷ∷||ℸ ̣ ⍑╎リ⊣":
          superEffective="O⎓ ᓵ𝙹⚍∷ᓭᒷ";
      }
      
      
//At the beginning of every turn, I alert the HP of the player and the enemy. If the easter egg is chosen, a creepy message is shown instead because the values do not matter (there is no enemy and you have infinity HP)
      if (playerPokemon !='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
        alert(playerPokemon+' has '+playerHP+' HP left, and '+enemyPokemon+ ' has '+enemyHP+' HP left.')
      }else{
        alert('A chill goes down your spine...')
      }

//This while statement repeats as long as the player does not enter a valid move (1, 2, 3, 4, 5, 6, or 7). If the player clicks cancel, the while statement closes and the player is sent to the end of the code.  
      while (validMove===false){
        if (playerPokemon !='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
          playerMove=prompt('It\'s your turn! What will you do? Note: Only one move per turn! \nEnter the number for the move of your choice.\nYou have '+playerEnergyNum+' '+playerEnergyType+', '+playerHP+' HP, and '+playerHealNum+' Heal Potions left.\n1='+playerAttack1+' \n2='+playerAttack2+' \n3='+playerAttack3+'\n4=Add '+playerEnergyType+ '\n5=Heal\n6=Add Heal Potion \n7=Run')
        }else{
          playerMove=prompt('Don\'t do this... \n1='+playerAttack1+' \n2='+playerAttack2+' \n3='+playerAttack3+'\n4=ᔑ↸↸ '+playerEnergyType+ '\n5=Hᒷᔑꖎ\n6=ᔑ↸↸ Hᒷᔑꖎ P𝙹ℸ ̣ ╎𝙹リ \n7=R⚍リ'  )
        }
        if (playerMove>0 && playerMove<8 && Number.isInteger(Number(playerMove))){
        validMove=true
        }else if (playerMove===null){
          wantsToPlay=false
          validMove=true
        }else{
          validMove=false
          alert('Come on man, answer correctly already!')
        }
      }

//In this huge switch statement, different actions are carried out based on the move that the player chooses. 
        switch(Number(playerMove)){
          
//If the player enters '1', as long as the player has at least 1 energy, they attack the enemy, lowering their HP by the amount of damage that the attack does. 1 is subtracted from the value of the players energy. If the easter egg pokemon is picked, the damage always kills instantly. If the player does not have enough energy, nothing happens and they waste their turn (they are told they have no energy). If the damage done to the enemy lowers their HP below zero, it is rounded to zero.
          case 1:
            if (playerEnergyNum>0){ 
              alert(playerPokemon+' uses '+ playerAttack1+'!')
              enemyHP=enemyHP-playerAttack1Damage
              if (enemyHP<0&&playerPokemon !='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
                enemyHP=0
              }else if(playerPokemon==='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
                enemyHP=-9999999999999999
              }
              alert(enemyPokemon+'\'s HP drops to '+enemyHP)
              playerEnergyNum=playerEnergyNum-1
            }else{
              alert('Not enough energy!')
            }
            break;
          
//If the player enters '2', as long as the player has at least 2 energy, they attack the enemy, lowering their HP by the amount of damage that the attack does. 2 is subtracted from the players energy value. The damage done depends both on the value of the attack damage and also on the bonus/penalty done to the attack damage. If there is a penalty or drop in damage, the player is alerted the effectivity of the attack. If the easter egg pokemon is picked, the damage always kills instantly. If the player does not have enough energy, nothing happens and they waste their turn (they are told they have no energy). If the damage done to the enemy lowers their HP below zero, it is rounded to zero. 
          case 2:
            if (playerEnergyNum>1){ 
              alert(playerPokemon+' uses '+ playerAttack2+'!')
              enemyHP=enemyHP-playerAttack2Damage
              playerEnergyNum=playerEnergyNum-2
              if (enemyHP<0&&playerPokemon !='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
                enemyHP=0
              }else if(playerPokemon==='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
                enemyHP=-9999999999999999
              }
              if (superEffective===true){
                alert(playerAttack2+' was super effective! ' +enemyPokemon+'\'s HP drops to '+enemyHP)
              }else if(superEffective===false){
                alert(playerAttack2+' was not very effective. ' +enemyPokemon+'\'s HP drops to '+enemyHP)
              }else{
                alert(enemyPokemon+'\'s HP drops to '+enemyHP)
              }
            }else{
              alert('Not enough energy!')
            }
            break;
        
//If the player enters '3', as long as the player has at least 3 energy, they attack the enemy, lowering their HP by the amount of damage that the attack does. 3 is subtracted from the players energy value. The damage done depends both on the value of the attack damage and also on the bonus/penalty done to the attack damage. If there is a penalty or drop in damage, the player is alerted the effectivity of the attack. If the easter egg pokemon is picked, the damage always kills instantly. If the player does not have enough energy, nothing happens and they waste their turn (they are told they have no energy). If the damage done to the enemy lowers their HP below zero, it is rounded to zero. 
          case 3:
            if (playerEnergyNum>2){ 
              alert(playerPokemon+' uses '+ playerAttack3+'!')
              enemyHP=enemyHP-playerAttack3Damage
              playerEnergyNum=playerEnergyNum-3
              if (enemyHP<0&&playerPokemon !='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
                enemyHP=0
              }else if(playerPokemon==='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
                enemyHP=-9999999999999999
              }
              if (superEffective===true){
                alert(playerAttack3+' was super effective! ' +enemyPokemon+'\'s HP drops to '+enemyHP)
              }else if(superEffective===false){
                alert(playerAttack3+' was not very effective. ' +enemyPokemon+'\'s HP drops to '+enemyHP)
              }else{
                alert(enemyPokemon+'\'s HP drops to '+enemyHP)
              }
            }else{
              alert('Not enough energy!')
            }
            break;

//If the player enters '4', one is added to the value of the variable of the pokemons energy and the player is alerted that they have added energy. If the easter egg pokemon is chosen, nothing happens. 
          case 4:
            if (playerPokemon !='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
              alert('You have added 1 '+ playerEnergyType+ ' to your pokemon!')
              playerEnergyNum=playerEnergyNum+1
            }else{
              alert('W⍑|| ∴𝙹⚍ꖎ↸ ||𝙹⚍ リᒷᒷ↸ ℸ ̣ ⍑╎ᓭ...')
            }
            break;
          
//If the player enters '5', the player uses 1 heal potion. This means that the value of the number of heals that the player has drops by 1, and the value of the player pokemon HP (health) increases by 15.The player is alerted that their pokemons HP increases. If they do not have any heal potions (PlayerHealNum equals to 0) then they are alerted that they ran out and they do nothing for their turn. If the easter egg is chosen, only a cryptic message alerts (nothing happens).
          case 5:
            if (playerPokemon !='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
              if (playerHealNum>0){
                playerHealNum=playerHealNum-1
                alert(playerPokemon+' uses Heal!')
                playerHP=playerHP+15
                alert(playerPokemon+'\'s HP rose to '+playerHP)
              }else{
                alert('No more Heal Potions left!')
              }
            }else{
              alert('H𝙹∴ ↸ᔑ∷ᒷ ||𝙹⚍...')
            }
            break;
          
//If the player enters '6', the player adds 1 to the value of playerHealNum (the number of heal potions that the player has) and they are alerted that 1 is added. If the easter egg pokemon is chosen, nothing happens.
          case 6:
            if (playerPokemon !='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
              alert('You have added 1 Heal Potion to your pokemon!')
              playerHealNum=playerHealNum+1
            }else{
              alert('Y𝙹⚍ ⎓𝙹𝙹ꖎ...')
            }
            break;

//If the player enters '7', the while loop for the game ends (runAway=true) and the user is brought to the end of the code where they are asked if they want to play again.  You cannot run away if you choose the easter egg pokemon.
          case 7:
            if (playerPokemon !='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
              alert('You call '+playerPokemon+' to run away!')
              alert(playerPokemon+' is very disappointed in you...')
              runAway=true
            }else{
              alert('Oh you can\'t run away...')
            }
        }
      
//This if statement makes sure that the switch statement below only works if the player still wants to play (and did not cick cancel on any prompts), did not run away (didn't enter '7' into the move prompt), both pokemon are still alive, and if the player did not pick the easter egg pokemon.
      if (playerHP>0 && enemyHP>0 &&runAway===false&&wantsToPlay===true&&playerPokemon !='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
        
//Here I create a random number (1, 2, 3, or 4) and then complete an action depending on which number is generated. The actions are the exact same as the actions that the players pokemon carries out in the switch statement above, except for the fact that the enemy never runs out of heal potions, never runs out of energy, and cannot run, add heal, or add energy. For every attack, if the enemy does more damage than the player has HP, the value of player HP rounds to 0. Also if supereffective is true, their moves are ineffective because supereffective relates to the player.
        var enemyMove=Math.ceil(Math.random()*4)
        switch(enemyMove){
          case 1:
            alert(enemyPokemon+' uses '+ enemyAttack1+'!')
            playerHP=playerHP-enemyAttack1Damage
            if(playerHP<0){
                playerHP=0
              }
            alert(playerPokemon+'\'s HP drops to '+playerHP)
            break;
          case 2:
            alert(enemyPokemon+' uses '+ enemyAttack2+'!')
            playerHP=playerHP-enemyAttack2Damage
            if(playerHP<0){
                playerHP=0
              }
            if (superEffective===true){
              alert(enemyAttack2+' was not very effective. ' +playerPokemon+'\'s HP drops to '+playerHP)
            }else if(superEffective===false){
              alert(enemyAttack2+' was super effective! ' +playerPokemon+'\'s HP drops to '+playerHP)
            }else{
              alert(playerPokemon+'\'s HP drops to '+playerHP)
            }
            break;
          case 3:
            alert(enemyPokemon+' uses '+ enemyAttack3+'!')
            playerHP=playerHP-enemyAttack3Damage
            if(playerHP<0){
                playerHP=0
              }
            if (superEffective===true){
              alert(enemyAttack3+' was not very effective. ' +playerPokemon+'\'s HP drops to '+playerHP)
            }else if(superEffective===false){
              alert(enemyAttack3+' was super effective! ' +playerPokemon+'\'s HP drops to '+playerHP)
            }else{
              alert(playerPokemon+'\'s HP drops to '+playerHP)
            }
            break;
          case 4:
            alert(enemyPokemon+' uses Heal!')
            enemyHP=enemyHP+15
            alert(enemyPokemon+'\'s HP rose to '+enemyHP)
        }
      }

//Here is where I alert different alerts to the player based on their choices in the game. If the players pokemon has 0 HP and they have some energy and heal potions, they are alerted that they were defeated. If the enemy died and the easter egg was chosen, a creepy message is alerted telling the player to regret their choices. If a normal pokemon was chosen, the player is alerted that they won. As another easter egg, if the player is defeated with 0 HP, 0 energy and 0 heal potions, they are alerted that they are terrible at the game. (if the player is still going and has 0 potions and energy, they are alerted a worrying uh oh...)
      if (playerHP<=0 && playerHealNum>0 && playerEnergyNum>0){
        alert('Oh no! Your pokemon was defeated!')
      } else if (enemyHP<=0){
         if (playerPokemon !='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
           alert('Congratulations, you won the battle!')
         }else{
           alert('Think of the sins you have committed...')
         }
      } else if (playerHealNum===0 && playerEnergyNum===0 && playerHP>0){
        alert('Uh oh...')
      } else if (playerHealNum===0 && playerEnergyNum===0 && playerHP===0){
        alert('How are you possibly this bad at pokemon?')
      }
      
//Here I reset validMove to false because then the prompt asking for the players move will appear every turn and will still repeat as long as an invalid value is entered.
     validMove=false
    }  
 
  }

//Here I set the value of wantsToPlay to the answer to a confirm asking the user if they want to play again. If the user clicks okay, wantsToPlay is true and the game repeats from the alert "Welcome to Pokemon Battle!" and the player is alerted that they are playing again (creepy message with easter egg). The values for runAway and validMove are reset to false because then all of the while loop are still active. If the player clicks cancel, the value of wantsToPlay is null and the game ends with a prompt (creepy if the easter egg is picked) because the while loop that the whole game is incased in is not active.
  wantsToPlay=confirm('Do you want to play again?')
  if (wantsToPlay===true){
     if (playerPokemon !='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
       alert('Here we go again!')
     }else{
       alert('You have doomed us all......')
     }
    runAway=false
    validMove=false
  }else{
     if (playerPokemon !='Oᒲリ╎!¡𝙹ℸ ̣ ᒷリℸ ̣'){
       alert('Thanks for playing!')
     }else{
       alert('Your actions do not fall without consequences...')
     }
  }
 
} 
