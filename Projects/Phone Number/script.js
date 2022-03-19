var validInput=false

while (validInput===false){
  var inputNum=prompt('Enter your phone number, no spaces, no dashes.')

  if (inputNum!==null && (isNaN(inputNum)||inputNum.length<10||inputNum.length>10)){
  alert("NO")
  
  } else if (inputNum!==null){

  var areaCode=inputNum.slice(0,3)

  var restOfNumFirst=inputNum.slice(3,6)

  var restOfNumSecond=inputNum.slice(6)

  var outputNum="("+areaCode+") "+restOfNumFirst+'-'+restOfNumSecond

  alert(outputNum)
  
  validInput=true
  
  } else if (inputNum===null){
  
    alert ("Oh wow, is my code that boring?🙄")
  
    validInput=true
  
  }
}