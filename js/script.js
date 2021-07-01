/*console.log("Hello World");
console.log("Alfonso");

//declaring variable x, setting it to 20
var x; //variable declaration
x = 20;//varaible assignment

console.log(x); //Prints out the value stored in x

var myName = "Christopher";
console.log(myName);

var my_age = 52;

var userAge = prompt("How old are you?");
console.log(userAge);

*/

/*var sleepy = false;
var hungry = false;

console.log(!sleepy);

if(sleepy||hungry){
  alert("Eat and get some rest");
}*/

function writeName(){
  var userName = prompt("What is your name?");
  //document.write();
  document.getElementsById("welcome").innerHTML=("Welcome " + userName + "!");
}

function getUserAge(){
  var userAge = prompt("What is your age?");
  if (userAge >= 21){
    writeName();
  }
  else if(userAge >= 13){
    writeName();
  }
  else{
    alert("You need parental permission");
  }
}

//A return statement returns a value and leaves the function immediately once it does

function checkWord(guessedWord){
  if(guessedWord == "sun"){
    return true;
  }
  else{
    return false;
  }
}

function guessingGame(){
  var word = prompt("I'm thinking of a word with three letters that is in the sky");
  var guessedCorrectly = checkWord(word);
    if(guessedCorrectly){
      alert("Correct word guessed");
    }
    else{
      alert("Incorrect word guessed");
    }
}

//guessingGame();
//console.log(checkNumber());

var human = "mortal";
var god = "immortal";
var socrates = god;

if(socrates == human){
  console.log("Socrates is mortal");
}
else{
  console.log("Socrates is not human");
}


//console.log(hungry);


