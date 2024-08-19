let listChosenNumbers = [];
let maxNumber = 10;
let secretNumber = generateRandom();
let tries = 1;

function showTextOnScreen(tag, writtenText) {
    let field = document.querySelector(tag);
    field.innerHTML = writtenText;
    responsiveVoice.speak(writtenText, 'UK English Female', {rate:1.1});
}
function showInitialMessage() {
    showTextOnScreen('h1', 'Secret number game');
    showTextOnScreen('p', 'Choose a number between 1 and 10:');
}

showInitialMessage();

function verifyGuess() {
    let guess = document.querySelector('input').value;
    
    if (guess == secretNumber) {
        showTextOnScreen('h1', 'You got it!');
        let attemptWord = tries > 1 ? 'tries' : 'try';
        let attemptMessage = `You found out the secret number with ${tries} ${attemptWord}!`;
        showTextOnScreen('p', attemptMessage);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        if (guess > secretNumber) {
            showTextOnScreen('p', 'The secret number is smaller.');
        } else {
            showTextOnScreen('p', 'The secret number is bigger.');
        }
        tries++;
        clearText();
    }
}
function generateRandom() {
    let chosenNumber = parseInt(Math.random() * maxNumber + 1);
    let elementQuantityList = listChosenNumbers.length;

    if (elementQuantityList == maxNumber) {
        listChosenNumbers = [];
    }
    if (listChosenNumbers.includes(chosenNumber)) {
        return generateRandom();
    } else {
        listChosenNumbers.push(chosenNumber);
        console.log(listChosenNumbers)
        return chosenNumber;
    }
}
function clearText() {
    guess = document.querySelector('input');
    guess.value = '';
}
function resetGame() {
    secretNumber = generateRandom();
    clearText();
    tries = 1;
    showInitialMessage();
    document.getElementById('reiniciar').setAttribute('disabled', true)
}







