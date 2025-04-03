//Mouse Event Script

var hover = document.getElementById("mouse");

hover.addEventListener('mouseenter', () => {
    hover.textContent = "Hey! I'm being hovered!";
});

hover.addEventListener('mouseleave', () => {
    hover.textContent = "Hover Me!";
});

//Keyboard Event Script
var keypress = document.getElementById("keyboard");

keypress.addEventListener('keypress', (e) => {
    document.getElementById("lastkey").textContent = `Your Last Button Press was ${String.fromCharCode(e.charCode)}`;
});

//Form Event Script
var form = document.getElementById("form");

form.addEventListener('submit', (e) => {
    var name = document.getElementById("name");

    e.preventDefault();
    alert(`Your name is ${name.value}`);
});

//Focus/Blur Events
var numberCheck = document.getElementById("number");

numberCheck.addEventListener('focus', () => {
    numberCheck.style.background = "lightblue"
});

numberCheck.addEventListener('blur', () => {
    if (numberCheck.value > 10) {
        numberCheck.style.background = "salmon";
        document.getElementById("error").textContent = 'This Number is Not Valid';
    } else if (numberCheck.value === "") {
        numberCheck.style.background = "salmon";
        document.getElementById("error").textContent = 'Please Enter a Number';
    } else {
        numberCheck.style.background = "lightgreen";
        document.getElementById("error").textContent = 'This Number Works, Good Choice';
    }
});

//Event Delegation
var teams = document.getElementById("delegation");

teams.addEventListener('click', (e) => {
    if (e.target.tagName === 'BUTTON') {
        alert('Nour loves ' + e.target.textContent);
    }
});