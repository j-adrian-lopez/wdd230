//Script for index.html

// Input into HTML
document.getElementById("year").innerHTML = new Date().getFullYear();
document.querySelector("#lastUpdated").textContent = `Last Modification: ${document.lastModified}`