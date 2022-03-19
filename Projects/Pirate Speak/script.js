//Created variables for future use

var invalidDate=true;

var name;

var birthdate;

var currentDate = new Date

var currentYear = currentDate.getFullYear()

var nextBirthday;

//Set the variable 'name' to the input of the prompt below, meant to ask the user to input their name. Then the user is alerted with a personal greeting.

var name=prompt('Ahoy thar human! Th\' name\'s Jumanji th\' pirate \'n th\' pleasure\'s all mine. Wha\'\'s yer name?')

alert('Nice t\' meet ye, '+name+'!')
  
//This while loop is very important because if the birthdate input is not structured correctly (mm/dd/yyyy, not in the future or too far in the past) my code will not work.

while (invalidDate){
  
//Asked the user for their birthdate, and seperated the response into day, month and year.

  birthdate=prompt('Wha\'\'s yer birthdate? Board th\' information in mm/dd/yyyy format.')
  
  var month=parseInt(birthdate.slice(0,2))

  var day=parseInt(birthdate.slice(3,5))

  var year=parseInt(birthdate.slice(6,11))

//Check if input is valid, very strict because I need it to be in mm/dd/yyyy format with no letters, no spaces, proper slashes and has to be real (eg. not born in the future or more than 100 years ago)

  if (Number.isNaN(month) || Number.isNaN(day) || Number.isNaN(year) || month<1 || month>12 || day<1 || day>31 || year<(currentYear - 100) || year>currentYear || birthdate.slice(2,3)!=="/" || birthdate.slice(5,6)!=="/"){
         
//If the input is invalid, the user is alerted that it is invalid and is given a hint as to what may fix the input. InvalidDate is set to true because then the loop will repeat 

    alert('wha\' are ye doin\'? Enter it correctly ye scumbag!')
      
   alert("Hint: If yer birth day or birth month be one digit, put a zero in front o' it. Make sure to put slashes in the correct spots!")

   invalidDate=true

//If there is nothing wrong with the input, invalidDate is set to false and the while loop is broken  

 } else {
      
   invalidDate=false

  }

}

//Here the year that I took from the users input of their birthdate has 100 added to it, then I alert the user that this is the year that they will be 100 years old.

alert('That be a mighty fine birthday!')

year=year+100

alert("Oy, ye want ta' hear a fun fact? Ye will be 100 in th' year "+year+"!")

//Took information from the original birthdate prompt (the month and day) and the current date (the year) to create the users birthday in the current year, and the users birthday next year. I did this by creating two new variables in mm/dd/yyyy format with the month and day of the birthdate and then the current year and the current year + 1.

var birthdayThisYear=new Date (month + "/" + day + "/" + currentYear)

var birthdayNextYear=new Date (month + "/" + day + "/" + (currentYear+ 1))

//Turned the birthday this year and current date into numerical values for the purpose of easy mathimatical operations

var birthdayThisYearTime=birthdayThisYear.getTime()
 
var currentDateTime=currentDate.getTime()

//compared the numerical values of the birthday this year to the current date so that the next birthday does not end up being before the current date

if (birthdayThisYearTime<currentDateTime) {

  nextBirthday=birthdayNextYear

} else {

  nextBirthday=birthdayThisYear

}

//Found the difference between the numerical values of the next birthday and the current date

nextBirthdayTime=nextBirthday.getTime()

var birthdayAndDateDifferenceTime = nextBirthdayTime - currentDateTime

//changed the difference in next birthday and current date from miliseconds into days

var daysUntilNextBirthday = Math.ceil(birthdayAndDateDifferenceTime / 8.64e+7)

//Alerted the user when their next birthday will be

alert("Ye know ye best be excited, right?")

alert('Thar are only ' + daysUntilNextBirthday + ' more days \'til yer birthday!')