// Assignment Code
var generateBtn = document.querySelector('#generate');
var passcodeLength = "";
var backupCharacters = "";
var stringArray = "";
var testPasscode = "";
var passwordText = document.querySelector('#password');

passwordText.value = password;

// Random Number Generator
function getRandomInt(max) {
  return Math.floor(Math.random() * max);
} 
var randomIndex = getRandomInt(12); 

//The next few lines are purely arrays and variables to make the Bigger Arrays

var charactersIncluded = [];

var upperArray = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var lowerArray = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

var specialArray = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","<",">","/","?","[","{","]","}","|"];

var numberArray = ["0","1","2","3","4","5","6","7","8","9"];

console.log(charactersIncluded);

// console.log(upperArray[0]);
// console.log(lowerArray[0]);
// console.log(specialArray[0]);
// console.log(numberArray[0]);

// This is the equation to SHUFFLE THE ARRAY - which - I found HERE: https://www.w3docs.com/snippets/javascript/how-to-randomize-shuffle-a-javascript-array.html
function shuffleArray() {
  upperArray.sort(() => Math.random() - 0.5);
  lowerArray.sort(() => Math.random() - 0.5);
  specialArray.sort(() => Math.random() - 0.5);
  numberArray.sort(() => Math.random() - 0.5);
 // charactersIncluded.sort(() => Math.random() - 0.5);
}
shuffleArray();

function shuffleCharacters() {
  charactersIncluded.sort(() => Math.random() - 0.5);
}

// Below is just a check to confirm that the array shuffled

// console.log(upperArray[0]);
// console.log(lowerArray[0]);
// console.log(specialArray[0]);
// console.log(numberArray[0]);

// This variable set will be useful when confirming which character
// types the user selects.

var selectUpper = true;
var selectLower = true;
var selectNumber = true;
var selectSpecial = true;

//SECRET WEAPON
// For every character type the user selects, there is immediately 1 characters of that type added to the passcode.
var userChoice = 0;

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);


// // Write password to the #password input
// function writePassword() { }

//when the button is pressed, User should be asked how long they want the
// Password to be.
generateBtn.addEventListener("click",generatePassword);


// THIS is what happens when the button is pressed
function generatePassword() {

  //by reinserting this variable from the top of the page,
  // we are generating a new integer each time the button is pressed,
  // as well as shuffling the array around.
  shuffleArray();
  var randomIndex = getRandomInt(10); 

 
  passcodeLength = window.prompt("How many characters would you like the password to have?")

  // This essentially states that if the user chooses cancel rather than enter a button, they can
  // exit the window.

  if (!passcodeLength) {
    return;
  }

  // Ensures that the user enters an appropriate function length.

  while (passcodeLength < 8 || passcodeLength > 128) {
    window.alert("Password is too short or too long. 8<= password => 128.");
    console.log("not going to work");
    generatePassword();
    return;
  } 

  if (passcodeLength > 7 || passcodeLength < 129) {
   // passcodeLength = window.prompt("How many characters would you like the password to have?")
    console.log( "we can work with " + passcodeLength);
  }

  // Seriese of alerts asking what the characters the user would like.

  selectUpper = window.confirm("Would you like your passwork to have Uppercase Letters?")
  if (!selectUpper){
    selectUpper = false;
    console.log(selectUpper);
  } else {
    console.log("We want Uppercase Characters in the passcode");
    selectUpper = true;
    console.log(selectUpper);
    userChoice = userChoice+1;
  }

  selectLower = window.confirm("Would you like your passwork to have Lowercase Letters?")
  if (!selectLower){
    selectLower = false;
    console.log(selectLower);
  } else {
    console.log("We want Lowercase Characters in the passcode");
    selectLower = true;
    console.log(selectLower);
    userChoice = userChoice+1;
  }

  selectSpecial = window.confirm("Would you like your passwork to have Special Characters?")
  if (!selectSpecial){
    selectSpecial = false;
    console.log(selectSpecial);
  } else {
    console.log("We want Special Characters in the passcode");
    selectSpecial = true;
    console.log(selectSpecial);
    userChoice = userChoice+1;
  }

  selectNumber = window.confirm("Would you like your passwork to have Numbers?")
  if (!selectNumber){
    selectNumber = false;
    console.log(selectNumber);
  } else {
    console.log("We want numbers in the passcode");
    selectNumber = true;
    console.log(selectNumber);
    userChoice = userChoice+1;
  }

  if (!selectUpper && !selectLower && !selectSpecial && !selectNumber) {
    console.log("You need to choose SOME characters!!!");
    window.alert("You do realise that when we want to generate a password, we need to select at least ONE type of character right? Try again");
    generatePassword();
  }


  console.log(userChoice);

// what character type to include

  // if (selectUpper) {
  //   charactersIncluded = charactersIncluded.concat(upperArray);
  //   backupCharacters = backupCharacters + upperArray[randomIndex];
  //   passcodeLength = passcodeLength - userChoice;
  //   console.log(charactersIncluded);
  // } else if (selectLower) {
  //   charactersIncluded = lowerArray.concat();
  // } else if (selectSpecial) {
  //   charactersIncluded = specialArray.concat();
  // } else if (selectNumber)  {
  //   charactersIncluded = numberArray.concat();
  // }

  // if (selectUpper){
  //   backupCharacters = upperArray[randomIndex]
  // }
 
  // if ((selectUpper) && (selectLower) && (selectSpecial) && (selectNumber)) {
  //   charactersIncluded = upperArray.concat(lowerArray,specialArray,numberArray);
  //   shuffleCharacters();
  //   passcodeLength = passcodeLength - userChoice;
  //   stringArray = charactersIncluded.slice(0,passcodeLength);
  //   stingArray = stringArray.join('');
  //   console.log(stringArray);
  // }

  if (selectUpper){
    charactersIncluded = charactersIncluded.concat(upperArray);
    backupCharacters +=  upperArray[randomIndex];
    console.log("Random add at end of password = " + backupCharacters);
    
  }  
  if (selectLower){
      charactersIncluded = charactersIncluded.concat(lowerArray);
      //passcodeLength = passcodeLength - userChoice;
      backupCharacters += lowerArray[randomIndex];
      console.log("Random add at end of password = " + backupCharacters);
      //  console.log(charactersIncluded);
  }

  // Independent statements that we want regardless of chosen characters.
      passcodeLength = passcodeLength - userChoice;
      shuffleCharacters();
      charactersIncluded = charactersIncluded.slice(0,passcodeLength);
      console.log(charactersIncluded);
      charactersIncluded = charactersIncluded.join("");
      console.log(charactersIncluded);
      testPasscode = charactersIncluded + backupCharacters;
      console.log(testPasscode);
      
      userChoice = 0;
      charactersIncluded = [];
      backupCharacters = "";
  //   } else if (userChoice = 4){
  //   charactersIncluded = upperArray.concat(lowerArray);
  //   passcodeLength = passcodeLength - 2;
  //   backupCharacters = upperArray[randomIndex] + lowerArray[randomIndex];
  //   console.log(backupCharacters)
  // }

  // function shuffleCharacters() {
  //   charactersIncluded.sort(() => Math.random() - 0.5);
  // }

 // shuffleCharacters();

  //Now we need to add a piece of code to disect the array to appropriate length
    
    // var stringArray = charactersIncluded.slice(0,passcodeLength);
    // stringArray.join(" ");
    // console.log(stringArray);
    // var newPassword = stringArray + backupCharacters;
    // console.log(newPassword);
    // userChoice = 0;
    // console.log(userChoice);
    // backupCharacters = "";
    // console.log(backupCharacters);

  // the .join function turns the array into a single string
  // charactersIncluded.join('');
  // window.alert(charactersIncluded.join(''));

  // for (i=0;i<passcodeLength;i++) {
  //   window.alert(charactersIncluded[i]);
  // }
  //console.log(charactersIncluded[randomIndex] + charactersIncluded[randomIndex]);

}





// for (i=0;i<5;i++) {
//   upperArray[i] = quickArray[i];
//   console.log(quickArray[i])
// }



// var fruitBowl = ["oranges", "bananas", "apples"];
// var saladKit  = ["tomatoes", "olives", "feta", "rocket"];
// var granolaMix= ["almonds","oats","honey","ginger","pepitas"];
// var shoppingList = fruitBowl.concat(saladKit,granolaMix);

// for (i=0;i<10;i++) {
//   console.log(shoppingList[i]);

//  }

 
//   //var compAnswer = possibleAnswers[randomIndex]; 
//   var speficifIngredient = shoppingList[randomIndex]
 
// console.log(getRandomInt(12));
// console.log(speficifIngredient)

// if (passcodeLength < 8 || passcodeLength > 128) {
//   //window.alert("Enter a number between 8 and 128");
//   console.log("password is too short or too long");
//   return;
// } else {
//   passcodeLength = window.prompt("How many characters would you like the password to have?")
//   console.log("This we can work with");
// }
 

//   var passcodeLength = window.prompt("How long should the password be?", "8 <= x => 128")
//   console.log(passcodeLength);

//   if ((passcodeLength < 8) || (passcodeLength > 128)) {
//     window.alert("Password cannot be less than 8 characters or more than 128 characters.");
    
//   }


//   var password = generatePassword();





// while (passcodeLength < 8 || passcodeLength > 128) {
//   window.alert("Enter a number between 8 and 128");
//   window.prompt("How many characters would you like the password to have?")
//  
