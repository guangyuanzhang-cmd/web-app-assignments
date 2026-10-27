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
