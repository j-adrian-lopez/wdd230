const temperature = parseFloat(document.querySelector("#temperature").innerText); 
const windspeed = parseFloat(document.querySelector("#windspeed").innerText);
let wcf;

    if (temperature < 50 || windspeed > 3.0) {
        wcf = (windChill(temperature, windspeed).toFixed(2));
    } else {
        wcf = 'N/A';
    }

    document.getElementById("wcf").innerHTML = wcf;

function windChill(tempF, speed) {
    let windChill = 35.74 + 0.6215 * tempF - 35.75 * (Math.pow(speed, 0.16)) + 0.4275 * tempF * (Math.pow(speed, 0.16));
    return windChill; 
 }