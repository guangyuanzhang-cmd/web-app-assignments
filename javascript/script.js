function setGreeting() {
    let now = new Date();
    console.log(" I am printing time :" + now.getHours());
    let hours = now.getHours();
    let greeting = "";

    if (hours < 12) {
        greeting = "Good morning";
    } else if (hours >= 12 && hours <= 18) {
        greeting = "Good afternoon";
    } else {
        greeting = "Good night";
    }

    console.log(greeting);
    document.getElementById("greetingOutput").textContent = greeting;
}

window.onload = function () {
    setGreeting();
}

// Renamed to handle the first button
function setButtonText() {
    document.getElementById("buttonClicktext").textContent = "Hello world ";
}

// Renamed to handle the second button
function setTimeText() {
    document.getElementById("buttonClicktext").textContent = "The time right now: " + new Date().toLocaleTimeString();
}

function findSum() {

    let num1 = document.getElementById("number1").value;
    let num2 = document.getElementById("number2").value;


    let sum = parseFloat(num1) + parseFloat(num2);

    document.getElementById("sumOutput").textContent = sum;


}


function setWordText() {

    let userInput = document.getElementById("anything").value;
    let length = userInput.length;

    console.log("Length: " + length);


    document.getElementById("wordLength").textContent = length;
}


function togglePassword() {
    let passwordInput = document.getElementById("password");
    let checkbox = document.getElementById("showPasswordCheckbox");

    // if click checkbox it will show thw password
    // else it will changed to *
    if (checkbox.checked) {
        passwordInput.type = "text";
    } else {
        passwordInput.type = "password";
    }
}

function changeText() {
    const inputElement = document.getElementById("changeText");

   //array containing different fonts sizes and colors
    const fonts = ["Arial", "Courier New", "Georgia", "Times New Roman", "Verdana"];
    const sizes = ["16px", "20px", "24px", "28px", "32px"];
    const colors = ["red", "blue", "green", "purple", "orange"];

   // Generate a random index and select a font /size /color from the sizes array
    const randomFont = fonts[Math.floor(Math.random() * fonts.length)];
    const randomSize = sizes[Math.floor(Math.random() * sizes.length)];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

   // Change the input element's font to the randomly selected font size and color
    inputElement.style.fontFamily = randomFont;
    inputElement.style.fontSize = randomSize;
    inputElement.style.color = randomColor;
}

// Create a function called display to show or hide an element
function display() {

    // Find the HTML element with the ID "hideOrShow"
    const inputElement = document.getElementById("hideOrShow");

    // Check if the element is currently hidden
    if (inputElement.style.display === "none") {

        // If hidden, show the element
        inputElement.style.display = "block";

    } else {

        // Otherwise, hide the element
        inputElement.style.display = "none";
    }
}