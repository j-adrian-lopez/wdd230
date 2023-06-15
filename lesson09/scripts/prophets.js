const url = 'https://brotherblazzard.github.io/canvas-content/latter-day-prophets.json';

async function getProphetData() {
    const response = await fetch(url);
    const data = await response.json();
    //console.table(data.prophets);
    displayProphets(data.prophets);
}

const displayProphets = (prophets) => {
    const cards = document.querySelector('div.cards');

prophets.forEach((prophet) => {
    let card = document.createElement('section');
    let h2 = document.createElement('h2');
    let portrait = document.createElement('img');
    let dateB = document.createElement('p');
    let placeB = document.createElement('p');
    let age = document.createElement('p');

    let ordinal;
    switch (prophet.order) {
        case 1:
            ordinal = 'st';
            break;
        case 2:
            ordinal = 'nd';
            break;
        case 3:
            ordinal = 'rd';
            break;
        default:
            ordinal = 'th';
    };
    let ageAtDeath;

    if (prophet.death != null) {
        ageAtDeath = Math.floor((Date.parse(prophet.death) - Date.parse(prophet.birthdate)) / 31556952000);
    } else {
        ageAtDeath = Math.floor((Date.parse(new Date()) - Date.parse(prophet.birthdate)) / 31556952000);
    };
    

    h2.textContent = `${prophet.name} ${prophet.lastname}`;
    dateB.textContent = `Date of Birth: ${prophet.birthdate}`;
    placeB.textContent = `Place of Birth: ${prophet.birthplace}`;
    age.textContent = `Age: ${ageAtDeath}`;
    

    portrait.setAttribute('src', prophet.imageurl);
    portrait.setAttribute('alt', `Portrait of ${prophet.name} ${prophet.lastname} - ${prophet.order}${ordinal} Latter-Day President`);
    portrait.setAttribute('loading', 'lazy');
    portrait.setAttribute('width', '340');
    portrait.setAttribute('height', '440');

    card.appendChild(h2);
    card.appendChild(dateB);
    card.appendChild(placeB);
    card.appendChild(age);
    card.appendChild(portrait);


    cards.appendChild(card);
});
}

getProphetData();