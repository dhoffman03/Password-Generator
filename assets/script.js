// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}



// declare function generatePasswor()
// var holding differnt characters: i.e. arr[]
// var selectedCharacter = []
// Use prompt() to gater password criteria
// var passwordLength = prompt("How many characters would you like in your password?") 
// if (paswordLength < 8) stop function || if (paswordLength > 128) stop function
// confirm() for uppercase letters
// confirm() for lowercase letters
// confirm() for numeric characters
// confirm() for special characters
// one each prompt/confirm is answered 
// if confirms are true keep or get character type for the confirm
// is !confirm stop function
// if confirm is true then concact related arr to selected characters arr s
//if(isUppercase) {selectedCharacters.concat(uppercaseCharacters);}
// i.e. ['A','a', 1, %, $]
// for loop on passwordLength 
// use Math.floor(Math.random() * selectedCharacters) to get random index of selectedCharacters
// return password;




// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);