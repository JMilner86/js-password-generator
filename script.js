//Declared my different arrays
let numArray = ['0','1','2','3','4','5','6','7','8','9'];
let capsArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let specialChars = ['!','@','#','$','%','^','&','*','<','>','?'];
//Random function for choosing random things from arrays
const randomItems = (Array) => {
  return Array[Math.floor(Math.random() * Array.length)]
};   
//Prompts user for password length
const generatePassword = () => {
    let emptyArray = [];
    let passwordLength = window.prompt("What is your desired password length? (8-128 characters). Please choose a number.")
    //If is not a number then run the function again
     if (isNaN(passwordLength)) {
      window.alert ("That is not a valid number. Please enter a number between 8-128")
     return generatePassword();
    }
    //If number is not between 8-128 then run the function again
    else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("That is not a valid number. Please enter a number between 8-128")
     return generatePassword();
    };
    //Prompts user to confirm character types
    let charChoice = {
      capsLetters: window.confirm("Confirm to add capital letters to your password"),
      lowersLetters: window.confirm("Confirm to add Lower Case letters to your password"),
      includeNumbers: window.confirm("Confirm to add numbers to your password"),
      specials: window.confirm("Confirm to add special characters to your password")
    };
    if (!charChoice.capsLetters && !charChoice.lowersLetters && !charChoice.includeNumbers && !charChoice.specials){
      window.alert("You must choose at least one option, try again.")
      return generatePassword();
    };
    //For loop of if statements that pushes random characters to emptyArray
const charLoop = () => {
    for (i = 0; i < (passwordLength); i++) {
    if (charChoice.capsLetters && emptyArray.length < passwordLength) {
      let tempVar =  randomItems(capsArray)
      emptyArray.push(tempVar)
    }
    if (charChoice.lowersLetters && emptyArray.length < passwordLength) {
      let tempVar = randomItems(lowersArray)
      emptyArray.push(tempVar)
    }
    if (charChoice.includeNumbers && emptyArray.length < passwordLength) {
      let tempVar = randomItems(numArray) 
      emptyArray.push(tempVar)
    }
    if(charChoice.specials && emptyArray.length < passwordLength) {
      let tempVar = randomItems(specialChars)
      emptyArray.push(tempVar)
    }; 
  };
};
  charLoop();
  return emptyArray;
};
// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  var passwordText = document.querySelector("#password");
  passwordText.value = password.join('');
}
// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);