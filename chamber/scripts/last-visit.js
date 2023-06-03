// milliseconds to days constant
const msToDays = 84600000;

// today's date
const thisDate = Date.now();

// element initialization

const lastVisit = document.querySelector('#last-visited')

// set lastVisit to today in the localStorage in case it doesn't exist

if (!window.localStorage.getItem("visit")) {
	window.localStorage.setItem("visit", thisDate);
}

const days = (parseInt(thisDate) - parseInt(window.localStorage.getItem("visit"))) / msToDays;

window.localStorage.setItem("visit", thisDate);

lastVisit.innerHTML = days.toFixed(0) + " days ago."