let inputLength = document.getElementById("inputLength");

const submitBtn = document.getElementById("submit");
const upperBtn = document.getElementById("Upper");
const lowerBtn = document.getElementById("Lower");
const numberBtn = document.getElementById("Number");
const symbolBtn = document.getElementById("Symbol");

const errorInput = document.getElementById("error");

let finalPassword = document.getElementById("finalPassword");

let allowedChars = "";
const upperChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowerChars = "abcdefghijklmnopqrstuvwxyz";
const numberChars = "1234567890";
const symbolChars = "!@#$*?.()%^+-=_";


submitBtn.onclick = function() {
    let randomPassword = [];
    let passwordLength = inputLength.value;
    passwordLength = Number(passwordLength);

    errorInput.textContent = ``;

    passwordLength === 0 ? errorInput.textContent = `Please enter a number greater than 0.` : "";

    // Includes the character list to be selected based on the checked radio button
    upperBtn.checked ? allowedChars += upperChars : "";
    lowerBtn.checked ? allowedChars += lowerChars : "";
    numberBtn.checked ? allowedChars += numberChars : "";
    symbolBtn.checked ? allowedChars += symbolChars : "";

    for(let i = 0; i < passwordLength; i++) {
        // For each index in array randomPassword, select a random character from the allowedChars
        let randomElement = allowedChars[Math.floor(Math.random() * allowedChars.length)];
        randomPassword.push(randomElement);
    }

    // Show password generated
    stringPassword = randomPassword.join("");
    finalPassword.textContent = `Password: ${stringPassword}`;
}

