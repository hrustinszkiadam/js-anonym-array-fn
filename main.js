//1.
const randomArray = [];
for (let i = 0; i < 15; i++) {
	randomArray.push(Math.floor(Math.random() * 40) - 20);
}
const parosArray = randomArray.filter((item) => item % 2 === 0);
parosArray.sort((a, b) => a - b);
console.log(parosArray);

//2.
const animalOutput = document.querySelector('#animals');
const animalForm = document.querySelector('#animal-form');

const animals = ['kutya', 'macska', 'egér'];

/**
 * @param {string[]} array
 */
const getLengthOfStrings = (array) => Array.from(array, (item) => item.length);

animalOutput.textContent = getLengthOfStrings(animals);

animalForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const input = document.querySelector('#animal-input');
	animals.push(input.value);
	animalOutput.textContent = getLengthOfStrings(animals);
	input.value = '';
});

//3.
class Character {
	/**
	 * @param {string} name
	 * @param {string} cast
	 * @param {number} attack
	 * @param {number} defense
	 */
	constructor(name, cast, attack, defense) {
		this.name = name;
		this.cast = cast;
		this.attack = attack;
		this.defense = defense;
	}
	/**
	 * @returns {HTMLDivElement}
	 */
	render() {
		const card = document.createElement('div');
		card.classList.add('card');
		card.style.width = '18rem';

		const cardBody = document.createElement('div');
		cardBody.classList.add('card-body');

		const cardTitle = document.createElement('h5');
		cardTitle.classList.add('card-title');
		cardTitle.textContent = this.name;

		const cardText = document.createElement('p');
		cardText.classList.add('card-text');
		cardText.textContent = `Cast: ${this.cast} | ATK: ${this.attack} DEF: ${this.defense}`;

		cardBody.appendChild(cardTitle);
		cardBody.appendChild(cardText);
		card.appendChild(cardBody);
		return card;
	}
}

const characters = [];

const characterForm = document.querySelector('#character-form');
const characterOutput = document.querySelector('#characters');

characterForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const name = document.querySelector('#character-name').value;
	const cast = document.querySelector('#character-cast').value;
	const attack = document.querySelector('#character-attack').value;
	const defense = document.querySelector('#character-defense').value;
	const character = new Character(name, cast, attack, defense);

	characters.push(character);
	characterOutput.appendChild(character.render());
});
