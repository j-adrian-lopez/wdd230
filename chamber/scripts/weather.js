// select HTML in document
const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');
const windspeed = document.querySelector("#windspeed");
let wcf;

// URL variable
const url = 'https://api.openweathermap.org/data/2.5/weather?q=San%20Lorenzo,py&units=imperial&appid=b28b987615baff94fe8d947cf902b8ae'

// write function to fetch weather info

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data); //test the call
            displayResults(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
};

function displayResults(weatherData) {
    const temperature = weatherData.main.temp;
    const speed = weatherData.wind.speed;
    currentTemp.innerHTML = `<strong>${temperature.toFixed(0)} °F</strong>`;
    windspeed.innerHTML = `<strong>${speed.toFixed(1)}</strong>`;

    const iconsrc = `https://openweathermap.org/img/w/${weatherData.weather[0].icon}.png`;
    const desc = weatherData.weather[0].description;

    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    captionDesc.textContent = desc;
    if (temperature < 50 && speed > 3.0) {
        wcf = (windChill(temperature, speed).toFixed(0));
    } else {
        wcf = 'N/A';
    };

    document.getElementById("wcf").innerHTML = `<strong>${wcf}</strong>`;
};


 apiFetch();
 
 function windChill(tempF, speed) {
    let windChill = 35.74 + 0.6215 * tempF - 35.75 * (Math.pow(speed, 0.16)) + 0.4275 * tempF * (Math.pow(speed, 0.16));
    return windChill; 
 };