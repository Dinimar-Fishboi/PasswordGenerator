// Assignment Code
var generateBtn = document.querySelector('#generate');
var passcodeLength = "";

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

  if (passcodeLength < 8 || passcodeLength > 128) {
    //window.alert("Enter a number between 8 and 128");
    console.log("password is too short or too long");
    return;
  } else {
   // passcodeLength = window.prompt("How many characters would you like the password to have?")
    console.log("This we can work with");
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
//   var passwordText = document.querySelector('#password');

//   passwordText.value = password;





// while (passcodeLength < 8 || passcodeLength > 128) {
//   window.alert("Enter a number between 8 and 128");
//   window.prompt("How many characters would you like the password to have?")
// }
