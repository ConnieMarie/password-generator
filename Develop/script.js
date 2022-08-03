// Assignment code here

//Ask how many charactors user would like in password (8-128)
//Prompt for correct input if user enters less or more than required
//Ask if user would like lowercase, uppercase, numbers, and/or special charactors
//Confirm password criteria
//Generate random password

//Make arrays for lowercase, uppercase, numbers, and special caractors
//Make define variables to randomize charactors

var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericChar = ['1','2','3','4','5','6','7','8','9','0'];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','_','+','?','<','>','~','|'];


var chosenChar = [];
// If user confirms the following selections, add selections to chosenChar array




function generatePassword() {

  var pw = ""
//Ask user to input how many characters they would like their password to be.
passwordLength = window.prompt("Please choose your password length between 8-128 characters.");
var length = parseInt(passwordLength);
console.log(length, typeof length);
if(length < 8 || length > 128 || !length) {
  window.alert("You must choose a number between 8-128! Please try again.");
  return generatePassword();
} //*how to loop this in case of clicking cancel*



//**How to call getRandomChar to these prompts */
//Ask if user wants password to include lowercase letters.
var lowercaseCharConfirm = window.confirm("Would you like your password to contain lowercase characters?");
  if(lowercaseCharConfirm) {
    window.alert("Your password will include lowercase characters.");
      chosenChar = chosenChar.concat(lowercaseChar);
      console.log(chosenChar);
    
  } else {
    window.alert("Your password will NOT include lowercase characters.");
     
  }
  console.log(lowercaseChar);

//Ask if user wants password to include uppercase letters.
var uppercaseCharConfirm = window.confirm("Would you like your password to contain uppercase characters?");
  if(uppercaseCharConfirm) {
    window.alert("Your password will include uppercase characters.");
    chosenChar = chosenChar.concat(uppercaseChar);
      console.log(chosenChar);
  } else {
  window.alert("Your password will NOT include uppercase characters.");
  
  
  }
  console.log(uppercaseChar);
  
  //Ask if user wants password to include numbers.
var numericCharConfirm = window.confirm("Would you like your password to contain numbers?");
  if(numericCharConfirm) {
    window.alert("Your password will include numbers.");
    chosenChar = chosenChar.concat(numericChar);
      console.log(chosenChar);
  } else {
    window.alert("Your password will NOT include numbers.");
    
  }
  console.log(numericChar);
  //Ask if user wants password to include special characters.
  var specialCharConfirm = window.confirm("Would you like your password to contain special characters?");
    if(specialCharConfirm) {
      window.alert("Your password will include special characters.");
      chosenChar = chosenChar.concat(specialChar);
      console.log(chosenChar);
    } else {
      window.alert("Your password will NOT include special characters.");
      
  }
  console.log(specialChar);
  for (let i = 0; i < passwordLength; i++) {
    pw += chosenChar[Math.floor(Math.random() * chosenChar.length)]
  }

  return pw;
};



// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword()
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
