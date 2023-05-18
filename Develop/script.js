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
    // Character types.
  var includeLowercase = confirm("Do you want to include lowercase characters?");
  var includeUppercase = confirm("Do you want to include uppercase characters?");
  var includeNumeric = confirm("Do you want to include numeric characters?");
  var includeSpecial = confirm("Do you want to include special characters?"); 

    // Check if at least one character type is selected
  while (!includeLowercase && !includeUppercase && !includeNumeric && !includeSpecial) {
    alert("You must select at least one character type!");
    includeLowercase = confirm("Do you want to include lowercase characters?");
    includeUppercase = confirm("Do you want to include uppercase characters?");
    includeNumeric = confirm("Do you want to include numeric characters?");
    includeSpecial = confirm("Do you want to include special characters?");
  }
  
   // Defined character types.
   var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
   var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
   var numericChars = "0123456789";
   var specialChars = "!@#$%^&*()_+~`|}{[]:;?><,./-=";

   // Random Password
   var passwordStart = ""
   var availableChars = ""

   if (includeLowercase) {
    availableChars += lowercaseChars;
  }
  
  if (includeUppercase) {
    availableChars += uppercaseChars;
  }
  
  if (includeNumeric) {
    availableChars += numericChars;
  }
  
  if (includeSpecial) {
    availableChars += specialChars;
  }

   for (var i = 0; i < passwordLength; i++) {
    var randomIndex = Math.floor(Math.random() * availableChars.length);
    passwordStart += availableChars[randomIndex];
  }
  
  return passwordStart;
}