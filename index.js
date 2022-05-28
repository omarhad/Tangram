
// FUNCTIONALITY FOR BUTTONS
function swap(cssFile) {
    var link = document.getElementById("style");
    link.href = cssFile;
}
/* Functionality for Dark Mode */
function darkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");
}
// load the square when the page loads
var theme = document.getElementById("style");

if (theme.getAttribute("href") != "Styles/square.css") {
	theme.setAttribute("href", "Styles/square.css");
} else {
		theme.setAttribute("href", "Styles/square.css");
}
const toggleInput = document.getElementById('toggle');

document.querySelector('.res-menu').addEventListener('click', () => {
    if (toggleInput.checked) {
      toggleInput.checked = false;
    }
  })