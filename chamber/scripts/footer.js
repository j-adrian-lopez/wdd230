//Script for index.html

// Input into HTML
const day = new Date();
document.getElementById("year").innerHTML = day.getFullYear();
document.querySelector("#lastUpdated").textContent = `Last Modification: ${document.lastModified}`

// Insert datetime in input
//document.querySelector("#date-input").value = day;