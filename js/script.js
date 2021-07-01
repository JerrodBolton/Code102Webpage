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
  if(guessedWord == 5){
    return true;
  }
  else{
    return false;
  }
}

function guessingGame(){
  var word = prompt("Guess a number between 1 and 10");
  var guessedCorrectly = checkWord(word);
    if(guessedCorrectly){
      alert("Correct number guessed");
      return true;
    }
    else{
      alert("Incorrect number guessed");
      return false;
    }
}

//guessingGame();
//console.log(checkNumber());


//console.log(hungry);



for(let i = 0; i < 10; i++){
  if(guessingGame() == true){
    break;
  }
}

var sleepy = true;
var question;

while(sleepy == true){
  question = prompt("are you sleepy?, yes or no?")
  if(question == "no"){
    sleepy = false;
  }
}


