// Assignment code here


// Get references to the #generate element
// generateBtn is targeting the button generate password.
var generateBtn = document.querySelector("#generate");


function generatePassword() {
  //var lengthOfPassword = prompt("What is password lenght?");
 //var numbers = confirm('would you like to include numbers');
 // var lowerCase = confirm('would you like to include lowercase');
  //var upperCase = confirm('would you like to  include uppercase');
  //var symbol = confirm('would you like to include special characters');

// the varibles I concat.
 var num  = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
  var alphUpper = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];
  var alphLower = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  var sym = ['@', '%', '+', '\\', '/', "'", '!', '#', '$', '^', '?', ':', ',', ')', '(', '}', '{', ']', '[', '~', '-', '_', '.'];
  var characterOptions = [];

    // validate input
    lengthOfPassword = prompt("How many characters do you want in your password? Choose between 8-128 characters.");
    if (lengthOfPassword < 8 || lengthOfPassword > 128) {
      return "Please choose a valid number of characters.";
    } else if (isNaN(lengthOfPassword)) {
      lengthOfPassword = prompt("Please enter a number.");
    }
    else {
      alert("Your password will be " + lengthOfPassword + " characters long.");
      
    }
  
    lowerCase = confirm('would you like to include lowercase');
    if (lowerCase) {
      alert("Your password will have lowercase letters.");
      characterOptions = characterOptions.concat(alphLower);
      console.log(alphLower);
    }
    else {
      alert("Your password will NOT have lowercase letters.");
    }
  
    upperCase = confirm('would you like to include uppercase');
    if (upperCase) {
      alert("Your password will have uppercase letters.");
      characterOptions = characterOptions.concat(alphUpper);
      console.log(alphUpper);
    }
    else {
      alert("Your password will NOT have uppercase letters.");
    }
  
    numbers = confirm('would you like to include numbers');
    if (numbers) {
      alert("Your password will have numbers.");
      characterOptions = characterOptions.concat(num);
      console.log(num);
    }
    else {
      alert("Your password will NOT have numbers.");
    }
  
    symbol = confirm('would you like to include special characters');
    if (symbol) {
      alert("Your password will have special characters.");
      characterOptions = characterOptions.concat(sym);
      console.log(sym);
    }
    else {
      alert("Your password will NOT have special characters.");
    }
  
    if (lowerCase === false && upperCase === false && numbers  === false && symbol === false) {
      return "Please select at least one of each character types.";
    };
    // create the random password
    let completePassword = ""
    for (let i = 0; i <  lengthOfPassword; i++) {
      let random =[Math.floor(Math.random() * characterOptions.length)];
      completePassword = completePassword + characterOptions[random];
    }
    return completePassword;
  };
    
    

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
 
 //passwordtext is targeting the textarea.
  var passwordText = document.querySelector("#password");
  
  passwordText.value = password;


}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
