const url = 'https://j-adrian-lopez.github.io/wdd230/chamber/data.json';

async function getBusiness() {
    const response = await fetch(url);
    const data = await response.json();
    console.table(data.business);
    businessCards(data.business);
}

const businessCards = (places) => {
    const cards = document.querySelector('div.cards');

places.forEach((place) => {
    let card = document.createElement('section');
    let busName = document.createElement('h3');
    let logo = document.createElement('img');
    let address = document.createElement('p');
    let phone = document.createElement('p');
    let website = document.createElement('p');
    let clickable = document.createElement('a');

    busName.textContent = `${place.name}`;
    address.textContent = `Address: ${place.address}`;
    phone.textContent = `Phone: ${place.phone}`;
    website.textContent = `${place.website}`;
    
    clickable.setAttribute('href', place.website)
    logo.setAttribute('src', place.logo);
    logo.setAttribute('alt', `${place.name} Logo`);
    logo.setAttribute('loading', 'lazy');
    logo.setAttribute('width', '160');

    clickable.appendChild(website);
    card.appendChild(busName);
    card.appendChild(logo);
    card.appendChild(address);
    card.appendChild(phone);
    card.appendChild(clickable);


    cards.appendChild(card);
});
}

getBusiness();