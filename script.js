var Intro = document.getElementById("Intro");
var NumGes = document.getElementById("NumGes");
var HT = document.getElementById("HT");
var Drag = document.getElementById("Drag");
var Pirate1 = document.getElementById("Pirate1");
var Phone = document.getElementById("Phone");
var Pokemon1 = document.getElementById("Pokemon1");
var Pirate2 = document.getElementById("Pirate2");
var Pokemon2 = document.getElementById("Pokemon2");
var Pacman = document.getElementById("Pacman")
var IntroChosen = false;var NumGesChosen = false;var HTChosen = false;var DragChosen = false;var Pirate1Chosen = false;var PhoneChosen = false;var Pokemon1Chosen = false;var Pirate2Chosen = false;var Pokemon2Chosen = false;var PacmanChosen = false
var check1 = document.getElementById("check1")
var check2= document.getElementById("check2")
var check3 = document.getElementById("check3")
var check4 = document.getElementById("check4")
var check5 = document.getElementById("check5")
var check6 = document.getElementById("check6")
var check7 = document.getElementById("check7")
var check8 = document.getElementById("check8")
var check9 = document.getElementById("check9")
var check10 = document.getElementById("check10")
var checklist = document.getElementById("Checklist")
var checkcounter = 0
var randombutton = document.getElementById("Random Button")
var savedname = document.getElementById("savedname")
var namebutton = document.getElementById("namebutton")
var username = document.getElementById("username")
var usernamelabel = document.getElementById("usernamelabel")

function lookat(game){
    var gameimage = game+".png"
    this[game].style.backgroundImage="url("+gameimage+")"
    this[game].style.color= "transparent"
}

function lookoff(game){
    this[game].style.backgroundImage=null
    this[game].style.color= "black"
}
 
function choose(checknum){

    if( this[checknum].getElementsByTagName('img').length == 0) {
        this[checknum].innerHTML+='<img src="check.png">'
        checkcounter+=1
    }
    if (checkcounter==10){
        checklist.innerHTML+="Thank you for trying all of the projects!"
    }
}

function randomgame(button){
    randomnum = Math.ceil(Math.random()*10)
    if (randomnum == 1){
        window.open("Projects/Project 1/index.html")
    }
    else if (randomnum == 2){
        window.open("Projects/NumberGuesser/index.html")
    }
    else if (randomnum == 3){
        window.open("Projects/Heads Or Tails/index.html")
    }
    else if (randomnum == 4){
        window.open("Projects/Dragon Game/index.html")
    }
    else if (randomnum == 5){
        window.open("Projects/Pirate Speak/index.html")
    }
    else if (randomnum == 6){
        window.open("Projects/Phone Number/index.html")
    }
    else if (randomnum == 7){
        window.open("Projects/Pokemon Battle/index.html")
    }
    else if (randomnum == 8){
        window.open("Projects/Talk Like A Pirate/index.html")
    }
    else if (randomnum == 9){
        window.open("https://htmlpokemon-battle-part-2-peterrojkovski.blenkhornecs10.repl.co/")
    }
    else if (randomnum == 10){
        window.open("https://final-projectfinal-project-sblenkhorne-peterrojkovski.blenkhornecs10.repl.co/")
    }
}

savedname.innerHTML = sessionStorage.getItem("finalname")
if (sessionStorage.getItem("finalname") !== null){
    username.style.display = "none"
    namebutton.style.display = "none"
    usernamelabel.style.display = "none"
}
function setname(){
    if (sessionStorage.getItem("finalname") == null){
        var usernamevalue = document.getElementById("username").value
        sessionStorage.setItem("finalname", "This page belongs to: "+usernamevalue)
        savedname.innerHTML = sessionStorage.getItem("finalname")
        username.style.display = "none"
        namebutton.style.display = "none"
        usernamelabel.style.display = "none"
    }
}