// Assignment code here

//Ask how many charactors user would like in password (8-128)
//Prompt for correct input if user enters less or more than required
//Ask if user would like lowercase, uppercase, numbers, and/or special charactors
//Confirm password criteria
//Generate random password

//Make arrays for lowercase, uppercase, numbers, and special caractors
//Make for loops to randomize charactors

var lowercaseChar = ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
var uppercaseChar = ['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'];
var numericChar = ['1','2','3','4','5','6','7','8','9','0'];
var specialChar = ['!','@','#','$','%','^','&','*','(',')','_','+','?','<','>','~','|'];

var generatePassword = function() {
  var chosenChar = "";
  // If user confirms the following selections, add selections to chosenChar array
  if(lowercaseChar === true) {
    chosenChar += lowercaseChar;
  }
  if(uppercaseChar === true) {
    chosenChar += uppercaseChar;
  }
  if(numericChar === true) {
    chosenChar += numericChar;
  }
  if(specialChar === true) {
    chosenChar += specialChar;
  }
};

function generatePassword() {
//Ask user to input how many characters they would like their password to be.
passwordLength = window.prompt("Please choose your password length between 8-128 characters.");
var length = parseInt(passwordLength);
console.log(length, typeof length);
if(length < 8 || length > 128) {
  window.alert("You must choose a number between 8-128! Please try again.");
} else {
  window.alert("Invalid selection! You must enter a number between 8-128.");
}


//Ask if user wants password to include lowercase letters.
lowercaseChar = window.confirm("Would you like your password to contain lowercase characters?");
  if(lowercaseChar) {
    window.alert("Your password will include lowercase characters.");
  } else {
    window.alert("Your password will NOT include lowercase characters.");
    
  }

//Ask if user wants password to include uppercase letters.
uppercaseChar = window.confirm("Would you like your password to contain uppercase characters?");
  if(uppercaseChar) {
    window.alert("Your password will include uppercase characters.");
  } else {
  window.alert("Your password will NOT include uppercase characters.");
  
  }

  //Ask if user wants password to include numbers.
numericChar = window.confirm("Would you like your password to contain numbers?");
  if(numericChar) {
    window.alert("Your password will include numbers.");
  } else {
    window.alert("Your password will NOT include numbers.");
    
  }
  
  //Ask if user wants password to include special characters.
  specialChar = window.confirm("Would you like your password to contain special characters?");
    if(uppercaseChar) {
      window.alert("Your password will include special characters.");
    } else {
      window.alert("Your password will NOT include special characters.");
      
  }

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
