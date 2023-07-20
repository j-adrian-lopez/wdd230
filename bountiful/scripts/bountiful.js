// Weather and weather forecast
// select HTML in document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');
const humidity = document.querySelector('#humidity');
const ctaBtn = document.querySelector('#cta');

// URL variable
const url = 'https://api.openweathermap.org/data/2.5/weather?q=Carlsbad,us&units=imperial&appid=b28b987615baff94fe8d947cf902b8ae'
const url2 = 'https://api.openweathermap.org/data/2.5/forecast?q=Carlsbad,us&units=imperial&cnt=3&appid=695320bb7da1151df6ee4a3893e0d4e9'

// write function to fetch weather info

async function apiFetch(url) {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

async function forecastFetch(url) {
	try{
		const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            displayForecast(data.list);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
		
	};


function displayResults(weatherData) {
    const temperature = weatherData.main.temp;
    currentTemp.innerHTML = `<strong>${temperature.toFixed(0)} °F</strong>`;
    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;
	const humid = weatherData.main.humidity;
	humidity.innerHTML = `<strong>${humid}</strong>%`


    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;

};

let counter = 1;

const displayForecast = (forecastData) => {
	const cards = document.querySelector('div.forecast');

forecastData.forEach((forecastedDay) => {
	let day = document.createElement('section');
	let p = document.createElement('p');
	let maxmin = document.createElement('p');
	let icon = document.createElement('img');
	
	let dayofWeek = now.getDay();
	let weekday;

	switch (dayofWeek + counter) {
        case 0:
            weekday = 'Sunday';
            break;
        case 1:
            weekday = 'Monday';
            break;
		case 2:
			weekday = 'Tuesday';
			break;
		case 3:
			weekday = 'Wednesday';
			break;
		case 4:
			weekday = 'Thursday';
			break;
		case 5:
			weekday = 'Friday';
			break;
		case 6:
			weekday = 'Saturday';
			break;
    };

	p.textContent = `${weekday}`;
	maxmin.textContent = `${Math.round(forecastedDay.main.temp_min)} / ${Math.round(forecastedDay.main.temp_max)} °F`
	let iconsrc = `https://openweathermap.org/img/w/${forecastedDay.weather[0].icon}.png`
	let desc = forecastedDay.weather[0].description;

	p.setAttribute('class', 'day');

	icon.setAttribute('src', iconsrc);
	icon.setAttribute('alt', desc);
	
	maxmin.setAttribute('class', 'maxmin');

	day.appendChild(p);
	day.appendChild(icon);
	day.appendChild(maxmin);
	cards.appendChild(day);

	counter += 1;
});
};

// Get submitted juices and display
const drinks = document.getElementById("drinks");

if (!window.localStorage.getItem("submitted")) {
	window.localStorage.setItem("submitted", 0);
}
drinks.textContent = window.localStorage.getItem("submitted");

ctaBtn.addEventListener('click', () => {
	window.open('https://j-adrian-lopez.github.io/wdd230/bountiful/fresh.html');
})

 apiFetch(url);
 forecastFetch(url2);


 // Fruits for the selects

