const passwordBox = document.getElementById("password")
const copybtn = document.getElementById("copybtn");


// Password Length
const length = 13;

// All the characters that we want to use in our password.
const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const number = "0123456789";
const symbol = "@#$%&'()*+,-./:;<=>?"
const allChars = upperCase + lowerCase + number + symbol;


// Logic to generate the random digits password 
function createPassword() {
 let password = "";
 password += upperCase[Math.floor(Math.random() * upperCase.length)];
 password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
 password += number[Math.floor(Math.random() * number.length)];
 password += symbol[Math.floor(Math.random() * symbol.length)];

 while(length > password.length){
  password += allChars[Math.floor(Math.random() * allChars.length)];
 }

 passwordBox.value = password;

}



// Logic that runs on click operation(when we click on generatae password button).
passwordBox.addEventListener("click", createPassword);

// Function that copy the password 
function copyPassword() {
  passwordBox.select();
  document.execCommand("copy");
}


// Logic that runs on click operation(when we click on copy password button). 
copybtn.addEventListener("click", copyPassword);