// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


  //arry holding uppercase letters
  var upperCharacters = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L",
  "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  //arry holding lowercase letters
  var lowerCharacters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l",
  "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  //array holding numbers
  var numericCharacters = ["0","1","2","3","4","5","6","7","8","9"];
  //array holding special characters
  var specialCharacters = ["~","!","#","$","%","&","*","@","?","^","_","-","|","/"];


// declare function generatePassword()
function generatePassword() {
  //var used for prompts
  var uppercase;
  var lowercase;
  var numeric;
  var special;

  //set password length
  var pwdLength = 0;
  //Clear password text
  var password = "";

  // for loop, passwordLength is intially 0; passwordLength should be no less than 8 and no more than 128; length increases by 1
  for (passwordLength = 0; passwordLength >= 8 || passwordLength <= 128; passwordLength++) {
    // Var holding password length prompt
    var passwordLength = prompt("How many characters would you like in your password?");

    // if password length does not meet criteria, alert user of criteria and stop function
    if (passwordLength < 8 || passwordLength > 128) {
      alert("Password must be between 8 and 128 characters");
     // Returns to placeholder text
      return placeholder;
    // if password meets criteria
    } else if (passwordLength >= 8 || passwordLength <= 128) {
      //calls the function to show prompts for criteria
      criteriaPrompts();

      // Add characters until pwdLength = passwordLength set by user
      while (pwdLength < passwordLength) {
      // If user presses cancel for all criteria show alert to make sure user chooses at least one
      if (uppercase === false && lowercase === false && numeric === false && special === false) {
      alert("Password must include at least one criteria of uppercase, lowercase, numeric or special character")
      criteriaPrompts();
      } else {
        // if uppercase is true and pwdlength is less than selected length
        // Grab a random uppercaseCharacter and add to password
        // Update pwdLength by 1
        if (uppercase === true && pwdLength < passwordLength) {
          var upper = upperCharacters[Math.floor(Math.random() * upperCharacters.length)];
          password = password + upper;
          pwdLength++;
        }

        // if lowercase is true and pwdlength is less than selected length
        // Grab a random lowercaseCharacter and add to password
        // Update pwdLength by 1
        if (lowercase === true && pwdLength < passwordLength) {
          var lower = lowerCharacters[Math.floor(Math.random() * lowerCharacters.length)];
          password = password + lower;
          pwdLength++;
        }

        // if numeric is true and pwdlength is less than selected length
        // Grab a random numericCharacter and add to password
        // Update pwdLength by 1
        if (numeric === true && pwdLength < passwordLength) {
          var num = numericCharacters[Math.floor(Math.random() * numericCharacters.length)];
          password = password + num;
          pwdLength++;
        }

        // if special is true and pwdlength is less than selected length
        // Grab a random specialCharacter and add to password
        // Update pwdLength by 1
        if (special === true && pwdLength < passwordLength) {
          var sp = specialCharacters[Math.floor(Math.random() * specialCharacters.length)];
          password = password + sp;
          pwdLength++;
        }
        
      }
    } 
  }
// Returns generated password and displays on page
return password;
}

  //internal function to prompt user for password criteria
  function criteriaPrompts() {
    uppercase = confirm("Would you like to include uppercase characters?");
    lowercase = confirm("Would you like to include lowercase characters?");
    numeric = confirm("Would you like to include numeric characters?");
    special = confirm("Would you like to include special characters?");
  }
}
