//Mouse Event Script

var hover = document.getElementById("mouse");

hover.addEventListener('mouseenter', () => {
    hover.textContent = "Hey! I'm being hovered!"
});

hover.addEventListener('mouseleave', () => {
    hover.textContent = "Hover Me!"
});

//Keyboard Event Script
var keypress = document.getElementById("keyboard")

keypress.addEventListener('keypress', (e) => {
    document.getElementById("lastkey").textContent = `Your Last Button Press was ${String.fromCharCode(e.charCode)}`;
});