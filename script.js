// Assignment code here
let numArray = ['0','1','2','3','4','5','6','7','8','9'];
let capsArray = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
let lowersArray = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z']
let specialChars = ['!','@','#','$','%','^','&','*','<','>','?'];
let emptyArray = [];

const forLoop = (Array) => {
  for (i = 0; i < Array.length; i++) {
    console.log(forLoop())
  }
  
}
forLoop(numArray);

const randomItems = (Array) => {
  return Array[Math.floor(Math.random() * Array.length)]
};   




const generatePassword = () => {
    let passwordLength = window.prompt("What is your desired password length? (8-128 characters). Please choose a number.")
    
     if (isNaN(passwordLength)) {
      window.alert ("That is not a valid number. Please enter a number between 8-128")
     return generatePassword();
    }
    
    else if (passwordLength < 8 || passwordLength > 128) {
      window.alert("That is not a valid number. Please enter a number between 8-128")
     return generatePassword();
    };




};
const charLoop = () => {
    let charChoice = {
      capsLetters: window.confirm("Confirm to add capital letters to your password"),
      lowersLetters: window.confirm("Confirm to add Lower Case letters to your password"),
      includeNumbers: window.confirm("Confirm to add numbers to your password"),
      specials: window.confirm("Confirm to add special characters to your password")
    }
   
    if (charChoice.capsLetters) {
      let tempVar =  randomItems(capsArray)
      window.alert("Confirmed capital letters!")
      emptyArray.push(tempVar)
    }
    if (charChoice.lowersLetters) {
      let tempVar = randomItems(lowersArray)
      window.alert("Confirmed lowercase letters!")
      emptyArray.push(tempVar)
    }
    if (charChoice.includeNumbers) {
      let tempVar = randomItems(numArray) 
      window.alert("Confirmed numbers!")
      emptyArray.push(tempVar)
    }
    if(charChoice.specials) {
      let tempVar = randomItems(specialChars)
      window.alert("Confirmed special characters!")
      emptyArray.push(tempVar)
    }
    else {
      window.alert("You must choose at least one Character option!")
      charLoop();
    }
}

console.log(emptyArray)

// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword(); 
  charLoop();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

