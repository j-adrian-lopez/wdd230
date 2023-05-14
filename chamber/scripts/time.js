// Select using time tag
const datefield = document.querySelector("time");

// Derive curent date
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-UK", {
	dateStyle: "full"
}).format(now);

// Insert to HTML
datefield.textContent = fulldate;