//Mouse Event Script

var hover = document.getElementById("mouse");

hover.addEventListener('mouseenter', () => {
    hover.textContent = "Hey! I'm being hovered!"
});

hover.addEventListener('mouseleave', () => {
    hover.textContent = "Hover Me!"
});

