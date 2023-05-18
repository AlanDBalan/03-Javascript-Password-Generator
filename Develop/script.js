    // Initial variables and source code.
var generateBtn = document.querySelector("#generate");

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

generateBtn.addEventListener("click", writePassword);

function generatePassword() {
  var passwordLength = prompt("Please enter the desired password length (between 8 and 128 characters):");
  
    // Validating length of password.
  while (passwordLength < 8 || passwordLength > 128) {
    passwordLength = prompt("Invalid length. Please enter a password length between 8 and 128 characters:");
  }