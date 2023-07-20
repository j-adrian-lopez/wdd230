// Get data and store it in window
const fruitUrl = "https://brotherblazzard.github.io/canvas-content/fruit.json"

async function fruitFetch(url, id) {
    try{
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            window.fruits = data;
            displayFruitList(data, id);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }
        
    };

const displayFruitList = (fruitData, id) => {
	const fruitList = document.getElementById(id);

	fruitData.forEach((fruit) =>{
		let option = document.createElement('option');
		let name = fruit.name;

		option.textContent = name;
		option.setAttribute('value', name);
		fruitList.appendChild(option);
	});
};


// Send and calculate nutritional values
const juiceButton = document.getElementById('juiceBtn');
const list = document.getElementById("list");

juiceButton.addEventListener('click', () => {
	let fname = document.getElementById("fname").value;
	let email = document.getElementById("email").value;
	let phone = document.getElementById("phone").value;
	let selected1 = document.getElementById("fruits1").value;
	let selected2 = document.getElementById("fruits2").value;
	let selected3 = document.getElementById("fruits3").value;
    let special = document.getElementById("instructions").value;
	let submissionDate = now.toLocaleDateString();

	let submitted = document.createElement('div');
	let name = document.createElement('h3');
	let emailAddress = document.createElement('p');
	let phoneNumber = document.createElement('p');
	let choice1 = document.createElement('p');
	let choice2 = document.createElement('p');
	let choice3 = document.createElement('p');
	let instructions = document.createElement('p');
	let date = document.createElement('p');
	let displayNutritions = document.createElement('div');
	let displayCarbohydrates = document.createElement('p');
	let displayProtein = document.createElement('p');
	let displayFat = document.createElement('p');
	let displaySugar = document.createElement('p');
	let displayCalories = document.createElement('p');

	let carbohydrates = 0;
	let protein = 0;
	let fat = 0;
	let sugar = 0;
	let calories  = 0;

    window.fruits.forEach((fruit) =>{
		if (fruit.name === selected1 || fruit.name === selected2 || fruit.name === selected3) {
		carbohydrates += parseFloat(fruit.nutritions.carbohydrates);
		protein += fruit.nutritions.protein;
		fat += fruit.nutritions.fat;
		sugar += fruit.nutritions.sugar;
		calories += fruit.nutritions.calories;
		};
	});

	name.textContent = `Name: ${fname}`;
	emailAddress.textContent = `Email Address: ${email}`;
	phoneNumber.textContent = `Phone Number: ${phone}`;
	choice1.textContent = `Fruit 1: ${selected1}`;
	choice2.textContent = `Fruit 2: ${selected2}`;
	choice3.textContent = `Fruit 3: ${selected3}`;
	instructions.textContent = `Special Instructions: ${special}`;
	date.textContent = `Submitted on: ${submissionDate}`;
	displayCarbohydrates.textContent = `Carbohydrates: ${carbohydrates.toFixed(2)}`;
	displayProtein.textContent = `Protein: ${protein.toFixed(2)}`;
	displayFat.textContent = `Fat: ${fat.toFixed(2)}`;
	displayCalories.textContent = `Calories: ${calories.toFixed(2)}`;
	displaySugar.textContent = `Sugar: ${sugar.toFixed(2)}`;

	submitted.setAttribute('class', 'submitted');
	displayNutritions.setAttribute('class', 'nutritions');

	displayNutritions.appendChild(displayCarbohydrates);
	displayNutritions.appendChild(displayProtein);
	displayNutritions.appendChild(displayFat);
	displayNutritions.appendChild(displayCalories);
	displayNutritions.appendChild(displaySugar);

	submitted.appendChild(name);
	submitted.appendChild(emailAddress);
	submitted.appendChild(phoneNumber);
	submitted.appendChild(choice1);
	submitted.appendChild(choice2);
	submitted.appendChild(choice3);
	submitted.appendChild(instructions);
	submitted.appendChild(date);
	submitted.appendChild(displayNutritions);

    list.appendChild(submitted);
	
	// Add every submission
	const submissions = (parseInt(window.localStorage.getItem("submitted"))) + 1;
	
	window.localStorage.setItem("submitted", submissions);
});

fruitFetch(fruitUrl, 'fruits1');
fruitFetch(fruitUrl, 'fruits2');
fruitFetch(fruitUrl, 'fruits3');