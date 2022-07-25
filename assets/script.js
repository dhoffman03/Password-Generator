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



// var holding password criteria
var criteria = {
  //arry holding uppercase letters
  upperCharacters: ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"],
  //arry holding lowercase letters
  lowerCharacters: ['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],
  //array holding numbers
  numericCharacters: ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"],
  //array holding special characters
  specialCharacters: ["~","!","#","$","%","&","*","@","?","^","_","-","|","/"],
}


// declare function generatePasswor()
function generatePassword() {

  // var for selected characters
  var selectedCharacters = []


  //var used for prompts
  var uppercase;
  var lowercase;
  var numeric;
  var special;

  // Var holding password length prompt 
  var passwordLength = prompt("How many characters would you like in your password?")
  // if password length does not meet criteria, stop function
  if (passwordLength < 8 || passwordLength > 128) {
    return password;
  }

  //calls the function to show prompts for criteria
  criteriaPrompts ();

  return password;

  //internal function to prompt user for password criteria
  function criteriaPrompts() {
    uppercase = confirm("Would you like to include uppercase characters?");
    lowercase = confirm("Would you like to include lowercase characters?");
    numeric = confirm("Would you like to include numeric characters?");
    special = confirm("Would you like to include special characters?");
  }
}




// once each prompt/confirm is answered 
// if confirms are true keep or get character type for the confirm
// if confirm is true then concact related arr to selected characters arr s
//if(isUppercase) { selectedCharacters.concat(uppercaseCharacters); }
// i.e. ['A','a', 1, %, $]


// is !confirm stop function


// for loop on passwordLength 


// use Math.floor(Math.random() * selectedCharacters) to get random index of selectedCharacters