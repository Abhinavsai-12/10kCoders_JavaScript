// JavaScript for Typing Speed Test App

// Variables
let timer = 90; // Timer set to 90 seconds
let interval = null;
let textPassage = "";
let totalChars = 0;
let correctChars = 0;
let incorrectChars = 0;

// Elements
const textPassageElement = document.getElementById("text-passage");
const typingArea = document.getElementById("typing-area");
const timerElement = document.getElementById("timer");
const wpmElement = document.getElementById("wpm");
const accuracyElement = document.getElementById("accuracy");
const startButton = document.getElementById("start-btn");
const resetButton = document.getElementById("reset-btn");
const submitButton = document.getElementById("submit-btn");

// Sample Texts
const passages = [
    "Practice makes perfect. Typing speed tests improve your efficiency. Keep typing!",
    "The quick brown fox jumps over the lazy dog.",
    "HTML, CSS, and JavaScript are essential tools. Learning to code is a valuable skill.",
    "Hypertext Markup Language (HTML) is the standard markup language for documents designed to be displayed in a web browser.",
    "Python is dynamically typed and garbage-collected. It supports multiple programming paradigms, including structured (particularly procedural), object-oriented and functional programming.",
    "Java Script is a High level Programing Language that is primarly used to enhance the interactivity and dynamic behaviour of web sites. It is knowns as Scripting Languages for websites.",
    "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione impedit aliquam assumenda omnis quas blanditiis commodi neque, nemo ipsa quae cumque, corporis autem.",
    "Cricket is a bat-and-ball game played between two teams of eleven players on a field, at the centre of pitch with a wicket at each end, each comprising two bails balanced on three stumps.",
    "It is often assisted by technologies such as Cascading Style Sheets (CSS) and scripting languages such as JavaScript, a programming language",
    "A computer is a machine that can be programmed to automatically carry out sequences of arithmetic or logical operations (computation).",
    "Modern digital electronic computers can perform generic sets of operations known as programs."    
];

// Functions

// Generate a random text passage
function generateText() {
    textPassage = passages[Math.floor(Math.random() * passages.length)];
    textPassageElement.textContent = textPassage;
}

// Start the typing test
function startTest() {
    resetTest(); // Ensure everything is reset
    generateText(); // Generate a new text
    typingArea.disabled = false; // Enable typing area
    typingArea.focus(); // Set focus to typing area
    submitButton.disabled = false; // Enable submit button

    // Start the countdown timer
    interval = setInterval(() => {
        timer--;
        timerElement.textContent = `Time: ${timer}s`;

        if (timer === 0) {
            endTest(); // End test when timer reaches 0
        }
    }, 1000);
}

// End the typing test
function endTest() {
    clearInterval(interval); // Stop the timer
    typingArea.disabled = true; // Disable typing area
    submitButton.disabled = true; // Disable submit button
    calculateResults(); // Finalize results
}

// Calculate WPM and accuracy
function calculateResults() {
    const typedText = typingArea.value;
    totalChars = typedText.length;

    correctChars = 0;
    incorrectChars = 0;

    // Compare typed text with original
    for (let i = 0; i < totalChars; i++) {
        if (typedText[i] === textPassage[i]) {
            correctChars++;
        } else {
            incorrectChars++;
        }
    }

    // Calculate WPM and Accuracy
    const wpm = Math.round((correctChars / 5) / (90 / 60)); // WPM formula: (correctChars / 5) / (time in minutes)
    const accuracy = totalChars === 0 ? 0 : Math.round((correctChars / totalChars) * 100); // Accuracy based on typed text length

    // Update the UI
    wpmElement.textContent = `WPM: ${wpm || 0}`;
    accuracyElement.textContent = `Accuracy: ${accuracy || 0}%`;
}

// Submit the typing test
function submitTest() {
    endTest(); // Stop the test and finalize results
    alert(`Test Complete!\nWPM: ${wpmElement.textContent}\nAccuracy: ${accuracyElement.textContent}`);
}

// Reset the typing test
function resetTest() {
    clearInterval(interval); // Stop the timer if running
    timer = 90; // Reset timer to 90 seconds
    totalChars = 0;
    correctChars = 0;
    incorrectChars = 0;

    // Reset UI elements
    timerElement.textContent = `Time: ${timer}s`;
    wpmElement.textContent = `WPM: 0`;
    accuracyElement.textContent = `Accuracy: 0%`;
    textPassageElement.textContent = "Click 'Start Test' to begin.";
    typingArea.value = "";
    typingArea.disabled = true; // Disable typing area
    submitButton.disabled = true; // Disable submit button
}

// Event Listeners
startButton.addEventListener("click", startTest); // Start test
resetButton.addEventListener("click", resetTest); // Reset test
submitButton.addEventListener("click", submitTest); // Submit test
typingArea.addEventListener("input", calculateResults); // Update results on typing
