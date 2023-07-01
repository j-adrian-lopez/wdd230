const busUrl = 'https://j-adrian-lopez.github.io/wdd230/chamber/data.json';

async function getBusiness() {
    const response = await fetch(busUrl);
    const data = await response.json();
    businessPromo(data.business);
}

const businessPromo = (places) => {
    const spots = document.querySelector('div.spots');

places.forEach((place) => {
    if (place.membership == 'Gold' || place.membership == 'Silver') {
        let card = document.createElement('div');
        let busName = document.createElement('h4');
        let logo = document.createElement('img');
        let divider = document.createElement('hr')
        let address = document.createElement('p');
        let phone = document.createElement('p');

        busName.textContent = `${place.name}`;
        address.textContent = `${place.address}`;
        phone.textContent = `${place.phone}`;
        
        logo.setAttribute('src', place.logo);
        logo.setAttribute('alt', `${place.name} Logo`);
        logo.setAttribute('loading', 'lazy');
        logo.setAttribute('width', '100');

        address.setAttribute('class', 'little');
        phone.setAttribute('class', 'little');

        card.appendChild(busName);
        card.appendChild(logo);
        card.appendChild(divider);
        card.appendChild(address);
        card.appendChild(phone);


        spots.appendChild(card);
    }
});
}

getBusiness();