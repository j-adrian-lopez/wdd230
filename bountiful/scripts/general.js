// Toggle navbar

const hamburger = document.querySelector('#hamburger');
const navigation = document.querySelector('.navigation');

hamburger.addEventListener('click', () => {
	navigation.classList.toggle('responsive');
});

// Select using time tag
const datefield = document.querySelector("time");

// Derive curent date
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

// Insert to HTML
datefield.textContent = fulldate;

// Footer date of modification
const day = new Date();
document.getElementById("year").innerHTML = day.getFullYear();
document.querySelector("#lastUpdated").textContent = `Last Modification: ${document.lastModified}`
