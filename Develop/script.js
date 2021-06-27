// Assignment Code  -- Please note that for simplicity I also placed the default
// value for my created variables up here.

var generateBtn = document.querySelector('#generate');
var passcodeLength = "";
var backupCharacters = "";
var passwordString = "";
var testPasscode = "";
var userChoice = 0;

// Random Number Generator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
} 
var randomIndex = getRandomInt(12); 

//The next few lines are initial arrays and variables to make the Bigger Arrays

var charactersIncluded = [];

var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowerArray = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

var specialArray = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","<",">","/","?","[","{","]","}","|"];

var numberArray = ["0","1","2","3","4","5","6","7","8","9"];

console.log(charactersIncluded);

// This is the equation to SHUFFLE THE ARRAY - which - I found HERE: https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
function shuffleArray() {
  upperArray.sort(() => Math.random() - 0.5);
  lowerArray.sort(() => Math.random() - 0.5);
  specialArray.sort(() => Math.random() - 0.5);
  numberArray.sort(() => Math.random() - 0.5);
}

shuffleArray();

// I also created the value shuffleCharacters, as the default for charactersIncluded is 
// null and it kept throwing up errors. So I took it out, placed the active function down
// the line and that solved the issue.

function shuffleCharacters() {
  charactersIncluded.sort(() => Math.random() - 0.5);
}

// This variable set is useful when confirming which character
// types the user selects, as well as the following variables that 
// rely on the status of these variables.

var selectUpper = true;
var selectLower = true;
var selectNumber = true;
var selectSpecial = true;

//when the button is pressed, User should be asked how long they want the
// Password to be.



// THIS is what happens when the button is pressed

function generatePassword() {

  var passwordText = document.querySelector('#password');



  // By reinserting this variable from the top of the page,
  // we are generating a new integer each time the button is pressed,
  // as well as shuffling the array around.

  shuffleArray();

  // 10 is the length of the smallest array, and as such will throw up no errors
  // when calling for randomIndex down the line.

  var randomIndex = getRandomInt(10); 

  //User input dictates length of passcode.

  passcodeLength = window.prompt("How many characters would you like the password to have?")

  // This essentially states that if the user chooses cancel rather than enter a button, they can
  // exit the window.

  if (!passcodeLength) {
    return;
  }

  // Ensures that the user enters an appropriate integer to fit the criteria.

  while (passcodeLength < 8 || passcodeLength > 128) {
    window.alert("Password needs to be between 8 and 128 characters. Please try again.");
    console.log("not going to work");
    generatePassword();
    return;
  } 

  if (passcodeLength > 7 || passcodeLength < 129) {
    console.log( "we can work with " + passcodeLength);
  } else {
    window.alert("Password needs to be between 8 and 128 characters. Please try again.");
    console.log("not going to work");
    generatePassword();
    return;
  }

  // Seriese of alerts asking what the characters the user would like.
  // The sequential order for the arrays is Uppercase, Lowercase, Special, then Numbers.

  selectUpper = window.confirm("Would you like your password to have Uppercase Letters?")
  if (!selectUpper){
    selectUpper = false;
    console.log(selectUpper);
  } else {
    console.log("We want Uppercase Characters in the passcode");
    selectUpper = true;
    console.log(selectUpper);
    userChoice = userChoice+1;
  }

  selectLower = window.confirm("Would you like your password to have Lowercase Letters?")
  if (!selectLower){
    selectLower = false;
    console.log(selectLower);
  } else {
    console.log("We want Lowercase Characters in the passcode");
    selectLower = true;
    console.log(selectLower);
    userChoice = userChoice+1;
  }

  selectSpecial = window.confirm("Would you like your password to have Special Characters?")
  if (!selectSpecial){
    selectSpecial = false;
    console.log(selectSpecial);
  } else {
    console.log("We want Special Characters in the passcode");
    selectSpecial = true;
    console.log(selectSpecial);
    userChoice = userChoice+1;
  }

  selectNumber = window.confirm("Would you like your password to have Numbers?")
  if (!selectNumber){
    selectNumber = false;
    console.log(selectNumber);
  } else {
    console.log("We want numbers in the passcode");
    selectNumber = true;
    console.log(selectNumber);
    userChoice = userChoice+1;
  }

  // This line only runs if the user does not select any character types.

  if (!selectUpper && !selectLower && !selectSpecial && !selectNumber) {
    console.log("You need to choose SOME characters!!!");
    window.alert("You do realise that when we want to generate a password, we need to select at least ONE type of character right? Try again");
    generatePassword();
    return;
  }

  // This indicates how many character styles the user has selected. 
  // This comes in handy after we define our backupCharacters.

  console.log(userChoice);

 // This next statement is about creating the value of the backupCharacters variable,
 // so that we have at least 1 of each character style in the generated password.
 // This statement series also adds the relevant variable to the variable set
 // charactersIncluded: which was empty prior to running this function.

  if (selectUpper){
    charactersIncluded = charactersIncluded.concat(upperArray,upperArray,upperArray,upperArray,upperArray);
    backupCharacters +=  upperArray[randomIndex];
    console.log("Random add at end of password = " + backupCharacters);
  }  

  if (selectLower){
      charactersIncluded = charactersIncluded.concat(lowerArray,lowerArray,lowerArray,lowerArray,lowerArray);
      backupCharacters += lowerArray[randomIndex];
      console.log("Random add at end of password = " + backupCharacters);
  }

  if (selectSpecial){
    charactersIncluded = charactersIncluded.concat(specialArray,specialArray,specialArray,specialArray,specialArray,specialArray,);
    backupCharacters += specialArray[randomIndex];
    console.log("Random add at end of password = " + backupCharacters);
  }

    if (selectNumber){
    charactersIncluded = charactersIncluded.concat(numberArray,numberArray,numberArray,numberArray,numberArray,numberArray,numberArray,numberArray,numberArray,numberArray,numberArray,numberArray,numberArray,);
    backupCharacters += numberArray[randomIndex];
    console.log("Random add at end of password = " + backupCharacters);
  }

  // Independent statements that we want regardless of chosen characters.
  // We want to add the backupCharacters to the end of the random numbers
  // generated by the charactersIncluded array. 
  // This is where the userChoice variable came in handy, as we redefine 
  // passcodeLength to accommodate those backupCharacters.
  // The shuffleCharacters function ensures that all the values
  // in all the selected arrays are randomised, rather than being Upper => Lower
  // => Special => Number, after which we cut up the new array charactersIncluded.

      passcodeLength = passcodeLength - userChoice;
      shuffleCharacters();
      charactersIncluded = charactersIncluded.slice(0,passcodeLength);
      console.log(charactersIncluded);

  // The .join("") function turns all the keys inside charactersIncluded into
  // a single string. To which we then add the backupCharacters string.
  // Then the passcode aka variable passwordText will be added to the HTML
  // via the innerHTML command, which I believe is then printed due to the
  // nature of textarea elements.

      charactersIncluded = charactersIncluded.join("");
      console.log(charactersIncluded);
      passwordText = charactersIncluded + backupCharacters;
      console.log(passwordText);

      window.alert("Your new password is " + passwordText);
      document.getElementById('password').textContent = passwordText;
      passwordText.value = password;
      console.log(password);

      
  // This is the reset block, essentially stating that once the code has finalised,
  // we want the following variables to return to 0 or null. IF these lines aren't here,
  // the code keeps track of previous selections and it quickly becomes a mess when generating
  // multiple passwords.
      

      userChoice = 0;
      charactersIncluded = [];
      backupCharacters = "";
 
}

// And finally, we tie the generatePassword function to the HTML button

generateBtn.addEventListener("click",generatePassword);
