const text = document.getElementById('text').innerText;
const typingArea = document.getElementById('typing-area');
const startBtn = document.getElementById('start-btn');
const resetBtn = document.getElementById('reset-btn');
const timerDisplay = document.getElementById('timer');
const resultsDisplay = document.getElementById('results');
const wpmDisplay = document.getElementById('wpm');
const accuracyDisplay = document.getElementById('accuracy');
const errorsDisplay = document.getElementById('errors');

let timer;
let timeLeft = 60;
let isStarted = false;
let typedCharacters = 0;
let errors = 0;

startBtn.addEventListener('click', startTest);
resetBtn.addEventListener('click', resetTest);
typingArea.addEventListener('input', handleTyping);

function startTest() {
    if (isStarted) return;
    isStarted = true;
    typingArea.disabled = false;
    typingArea.focus();
    startBtn.disabled = true;
    timer = setInterval(updateTimer, 1000);
}

function updateTimer() {
    if (timeLeft > 0) {
        timeLeft--;
        timerDisplay.innerText = `Time Left: ${timeLeft}s`;
    } else {
        endTest();
    }
}

function handleTyping() {
    const inputText = typingArea.value;
    typedCharacters = inputText.length;
    errors = calculateErrors(inputText);
    updateRealTimeStats();
}

function calculateErrors(inputText) {
    let errorCount = 0;
    const inputTextArray = inputText.split('');
    const textArray = text.split('');
    
    inputTextArray.forEach((char, index) => {
        if (char !== textArray[index]) {
            errorCount++;
        }
    });

    return errorCount;
}

function updateRealTimeStats() {
    const wpm = Math.round((typedCharacters / 5) / ((60 - timeLeft) / 60));
    const accuracy = Math.max(0, 100 - Math.round((errors / typedCharacters) * 100));
    
    wpmDisplay.innerText = isNaN(wpm) ? 0 : wpm;
    accuracyDisplay.innerText = isNaN(accuracy) ? 0 : accuracy;
    errorsDisplay.innerText = errors;
}

function endTest() {
    clearInterval(timer);
    typingArea.disabled = true;
    startBtn.disabled = false;
    resultsDisplay.classList.remove('d-none');
}

function resetTest() {
    clearInterval(timer);
    timeLeft = 60;
    isStarted = false;
    typedCharacters = 0;
    errors = 0;
    typingArea.value = '';
    timerDisplay.innerText = `Time Left: 60s`;
    resultsDisplay.classList.add('d-none');
    typingArea.disabled = true;
    startBtn.disabled = false;
}
