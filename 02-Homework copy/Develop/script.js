// Assignment Code
var generateBtn = document.querySelector('#generate');

// Write password to the #password input
function writePassword() {

//when the button is pressed, User should be asked how long they want the
// Password to be.

  var passcodeLength = window.prompt("How long should the password be?", "8 <= x => 128")
  console.log(passcodeLength);

  if ((passcodeLength < 8) || (passcodeLength > 128)) {
    window.alert("Password cannot be less than 8 characters or more than 128 characters.");
    
  }


  var password = generatePassword();
  var passwordText = document.querySelector('#password');

  passwordText.value = password;
}






















// Add event listener to generate button
generateBtn.addEventListener('click', writePassword);
