// connection to HMTL for input of card data
let cardFront = document.getElementById('cardFront');
let cardBack = document.getElementById('cardBack');
let flip = document.getElementById('flip');

// parts of a flashcard
function cardParts(word, define) {
	this.word = word;
	this.define = define;
}

//  flashcard data
let card0 = new cardParts(
	'.map()',
	'Returns a new array with the square root of all the original values.'
);

let card6 = new cardParts('.pop()', 'Removes the last item in an array.');

let card5 = new cardParts('.push()', 'Adds a new item at the end of an array.');

let card4 = new cardParts('.shift()', 'Removes the first item from an array');

let card3 = new cardParts(
	'.unshift()',
	'Adds a new item to the beginning of an array.'
);

let card2 = new cardParts(
	'.splice()',
	'Adds an element to an array at a determined position in an array.'
);

let card1 = new cardParts('.concat()', 'Joins two separate arrays together.');
let card7 = new cardParts(
	'CONGRATS... *cought cough* push flip my dude',
	'You have successfully remembered the main methods for altering an array in Javascript!'
);

// deck of cards
let deck = [card1, card1, card2, card3, card4, card5, card6, card7];
let index = 0;
console.log(index);
// // displays card front and back [input data in array form]
cardFront.innerHTML = card0.word;
cardBack.innerHTML = card0.define;

// have this card disapear with a funciton when the correct button is pushed and removed from array
// is correct is it the next card will pop up and score will increase
function nextCard() {
	index = (index + 1) % deck.length;
	cardFront.innerHTML = deck[index].word;
	cardBack.innerHTML = deck[index].define;
}

// if incorrect is pushed have it disapear but be added back in at the end of the array
function prevCard() {
	if (index > 0) {
		index = index - 1;
	} else if (index == 0) {
		index = deck.length - 1;
	}
	cardFront.innerHTML = deck[index].word;
	cardBack.innerHTML = deck[index].define;
}

// flip button toggles backCard
const cardVis = document.getElementById('cardBack');

function dataVis() {
	cardVis.classList.toggle('vis');
}

document.getElementById('btnFlip').addEventListener('click', dataVis);

// correct and incorrect buttons with score counter
let count = 0;
const buttonUp = document.getElementById('correct');
const buttonDown = document.getElementById('incorrect');
const score = document.getElementById('count');
score.innerHTML = count;

buttonUp.addEventListener('click', function () {
	if (count < 6) {
		score.innerHTML = ++count;
	}
});

buttonUp.addEventListener('click', nextCard);

// if score increases add 1 to index to show next card.

buttonDown.addEventListener('click', function () {
	count;
	if (count > 0) {
		score.innerHTML = --count;
	} else {
		return;
	}
});
buttonDown.addEventListener('click', prevCard);
