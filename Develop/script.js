// Assignment Code
var generateBtn = document.querySelector('#generate');
var passcodeLength = "";
var passwordText = document.querySelector('#password');

passwordText.value = password;

var selectUpper = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var selectLower = ["q","w","e","r","t","y","u","i","o","p","a","s","d","f","g","h","j","k","l","z","x","c","v","b","n","m"];

var selectNumber = [""];

var selectSpecial = ["!","@","#","$","%","^","&","*","(",")","-","_","+","=","<",">","/","?","[","{","]","}","|"];

// // Add event listener to generate button
// generateBtn.addEventListener('click', writePassword);


// // Write password to the #password input
// function writePassword() { }

//when the button is pressed, User should be asked how long they want the
// Password to be.
generateBtn.addEventListener("click",generatePassword);


// THIS is what happens when the button is pressed
function generatePassword() {
 
  passcodeLength = window.prompt("How many characters would you like the password to have?")
  if (!passcodeLength) {
    return;
  }

  while (passcodeLength < 8 || passcodeLength > 128) {
    //window.alert("Enter a number between 8 and 128");
    window.alert("Password is too short or too long. Please press button again.");
    console.log("not going to work");
    return;
  } 
  if (passcodeLength > 7 || passcodeLength < 129) {
   // passcodeLength = window.prompt("How many characters would you like the password to have?")
    console.log( "we can work with " + passcodeLength);
  }

}


 


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
// }
