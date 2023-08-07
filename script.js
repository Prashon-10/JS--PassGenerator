const length = 12; //Length of the password

const upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerCase = "abcdefghijklmnopqrstuvwxyz";
const Symbols = "!@#$%^&*()_+=-<>?/.';[]{}";
const numberValue = "0123456789";

const allChars = upperCase + lowerCase + Symbols + numberValue;
function createPassword() {
  let password = "";

  password += upperCase[Math.floor(Math.random() * upperCase.length)];
  password += lowerCase[Math.floor(Math.random() * lowerCase.length)];
  password += Symbols[Math.floor(Math.random() * Symbols.length)];
  password += numberValue[Math.floor(Math.random() * numberValue.length)];

  while (length > password.length) {
    password += allChars[Math.floor(Math.random() * allChars.length)];
  }

  console.log(password);
  genPassword(password);
};

function genPassword(psw){
  const passwordBox = document.getElementById("Password");
  passwordBox.setAttribute("value", psw);
};