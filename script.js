// Assignment code here
let numArray = ['0','1','2','3','4','5','6','7','8','9'];
let alphaArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let specialChars = ['!','@','#','$','%','^','&','*','<','>','?'];
let generatedPassword = [];

const generatePassword = () => {
    window.prompt("What is your desired password length? (8-128 characters). Please choose a number.")
};





// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
