// Assignment Code
var generateBtn = document.querySelector("#generate");
var characterAmountNumber = prompt("How many characters should the password include?", "Enter a number between 8 and 128");
var includeUppercaseElement = confirm("Include upper case characters?")
var includeNumbersElement = confirm("Include numbers?");
var includeSymbolsElement = confirm("Include special symbols?");


var UPPERCASE_CHAR_CODES = arrayFromLowToHigh(65, 90)
var LOWERCASE_CHAR_CODES = arrayFromLowToHigh(97, 122)
var NUMBER_CHAR_CODES = arrayFromLowToHigh(48, 57)
var SYMBOL_CHAR_CODES = arrayFromLowToHigh(33, 47).concat(
  arrayFromLowToHigh(58, 64)
).concat(
  arrayFromLowToHigh(91, 96)
).concat(
  arrayFromLowToHigh(123, 126)
);

var parsed = parseInt(characterAmountNumber);
console.log (parsed);
console.log (includeUppercaseElement);
console.log (includeNumbersElement);
console.log (includeSymbolsElement);
console.log (typeof parsed);


// Write password to the #password input
function generatePassword(includeUppercaseElement, includeNumbersElement, includeSymbolsElement) {
  var charCodes = LOWERCASE_CHAR_CODES
  if (includeUppercaseElement) {
    charCodes = charCodes.concat(UPPERCASE_CHAR_CODES)};
  if (includeSymbolsElement) {
    charCodes = charCodes.concat(SYMBOL_CHAR_CODES)};
  if (includeNumbersElement) {
    charCodes = charCodes.concat(NUMBER_CHAR_CODES)};
  

  var passwordCharacters = []
  for (var i = 0; i < parsed; i++) {
    var characterCode = charCodes[Math.floor(Math.random() * charCodes.length)]
    console.log(characterCode);
    passwordCharacters.push(String.fromCharCode(characterCode))
  }

 
  console.log(passwordCharacters);

  return passwordCharacters.join('')

};


function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
  
  console.log (password);

};

function arrayFromLowToHigh(low, high) {
  const array = []
  for (let i = low; i <= high; i++) {
    array.push(i)
  }
  return array
};


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);






