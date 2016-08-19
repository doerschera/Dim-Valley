
var alphabet1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
var alphabet2 = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ['telescope', 'tenebrous', 'crevice', 'guardian', 'fathoms', 'crepuscle', 'gravitational'];

var wordCount = 0;

var selection = words[wordCount];

console.log(selection);

var length = selection.length;

var split = selection.split('');

var indexes = [];

var star = 1;

var pastWords = [];

var pastLetters = [];

var letterCount = 0;


console.log(length);

// Starts Gam

function start(event) {
	document.querySelector('.intro').className='disable';
}

// Creates blanks for letters

function blanks() {
	letterCount = 0;
	pastLetters = [];

	// Triggers win screen
	if(pastWords.length == 7) {
		setTimeout(function(){
			document.querySelector('.win').classList.remove('disable');
			document.body.style.backgroundColor='rgb(69, 130, 166)';
			document.querySelector('.main').className='disable';
			}, 1000);
	}

	else {
		selection = words[wordCount];
		length = selection.length;
		split = selection.split('');
		console.log(selection);
		console.log(length);

		for(var i = 0; i < length; i++) {
			var ul = document.getElementById('blanks');
			var li = document.createElement('LI');
		
			ul.appendChild(li).className='letterSpace';
			console.log('blanks here');
		}
	}
};

blanks();

// Triggered by key press
function getKey(event) {
	var letter = event.key;
	gamePlay(letter);
};


// Get letter by click
var alphaList = document.querySelectorAll('.letter');


for(var i = 0; i < alphaList.length; i++) {
	alphaList[i].addEventListener('click', function(event){
		var letter = this.innerHTML;
		gamePlay(letter);
});

document.querySelector('#tryAgain').onclick = function(event) {
	document.querySelector('#dark').className='disable';
	document.querySelector('#main').classList.remove('disable');
	document.body.style.backgroundColor='rgb(46, 27, 82)';
	document.querySelector('#blanks').innerHTML="";
	document.querySelector('#footer').classList.remove('dim');
	indexes = [];
	pastLetters = [];
	star = 1;

	for(var i = 0; i < 13; i++) {
		document.querySelectorAll('#alpha1 > a')[i].classList.remove('dim');
		document.querySelectorAll('#alpha2 > a')[i].classList.remove('dim');
	}

	for(var i = 0; i < 7; i++) {
		document.querySelectorAll('#starUL > IMG')[i].classList.remove('disable');
	}

	blanks();
	}
};

function gamePlay (letter) {
			var find = new RegExp(letter, 'g');
	var starId = '#star'+star;

	length = selection.length;
	console.log(length);
	console.log(letter);

	// Looks for letter in word
	if(find.test(split)) {
		// Checks if letter has already been guessed
		for(var j = 0; j < pastLetters.length; j++) {
			if(pastLetters[j] == letter) {
				document.querySelector('#usedLetter').classList.remove('disable');
				setTimeout(function() {
					document.querySelector('#usedLetter').className='disable';
					}, 1500);
				return;
			};
		};

		for(var i = 0; i < length; i ++) {
			if(split[i] == letter) {
				// tracks place of letter within word
				indexes.push(i);
				letterCount++;
				pastLetters.push(letter);
				console.log(pastLetters);
				console.log('here!!');
			}
		}
	correct();
	}

	// triggers lose screen
	else if(star === 7) {
		document.body.style.backgroundColor='#000000';
		document.querySelector('#dark').classList.remove('disable');
		document.querySelector('#footer').className='dim';
		document.querySelector('#main').className='disable';
	}

	// removes star for wrong guess, adds wrong letter to past letter list
	else {
		document.querySelector(starId).className='disable';
		star ++;
		pastLetters.push(letter);
	}

	addLetter();

	// places letters in blank spaces
	function addLetter () {
		var n;
		for(var i = 0; i < indexes.length; i++) {
			n = indexes[i];
			document.querySelector('#blanks').children[n].innerHTML=letter;
		}
	};


	// darkens chosen letters
	// a through d have index value of -1??
	function dim() {
			if(find.test(alphabet1)) {
				var place1 = alphabet1.indexOf(letter);
				console.log(place1+'alpha1');
				var alpha1 = document.getElementById('alpha1');
				alpha1.querySelectorAll('#alpha1 > a')[place1].className="dim";
			}

			else if(find.test(alphabet2)) {
				var place2 = alphabet2.indexOf(letter);
				var alpha2 = document.getElementById('alpha2');
				alpha2.querySelectorAll('#alpha2 > a')[place2].className='dim';
			}
	};

	// correct word message, discovered word count and reset
	function correct () {
		if (letterCount == length) {
			wordCount++;
			console.log(wordCount + 'here');
			document.querySelector('#nice').classList.remove('disable');
			
			setTimeout(function() {
				document.getElementById('nice').className='disable';
				document.querySelector('#blanks').innerHTML = '';
				for(var i =0; i < 13; i++) {
					document.querySelectorAll('#alpha1 > a')[i].classList.remove('dim');
					document.querySelectorAll('#alpha2 > a')[i].classList.remove('dim');
				}
				document.querySelector('#discovered').innerHTML='Words Discovered: '+wordCount+'/7';
				blanks();
				star = 1;
				for(var i = 0; i < 7; i++) {
					document.querySelectorAll('#starUL > IMG')[i].classList.remove('disable');
				}
			}, 2000);

			pastWords.push(selection);
		}
	};

	// Clears indexes of current letter
	function clearIndex() {
		indexes = [];
	}

	dim();
	clearIndex();
}
