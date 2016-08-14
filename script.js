
var alphabet1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
var alphabet2 = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ['telescope', 'tenebrous', 'mnemonics', 'guardian', 'fathoms', 'crepuscle', 'gravitational'];

var wordCount = 0;

var selection = words[wordCount];

console.log(selection);

var length = selection.length;

var split = selection.split('');

var indexes = [];

var star = 1;

var pastWords = [];

var letterCount = 0;


console.log(length);

// Creates blanks for letters

function blanks() {
	letterCount = 0;
	// Triggers win screen
	if(pastWords.length == 7) {
		setTimeout(function(){
			document.querySelector('.win').classList.remove('disable');
			document.body.style.backgroundColor='rgb(69, 130, 166)';
			document.querySelector('.main').className='disable';
			}, 1000);
			document.footer.style.position='absoulte';
	}

	else {
		selection = words[wordCount];
		length = selection.length;
		split = selection.split('');
		console.log(selection);
		for(var i = 0; i < length; i++) {
			var ul = document.getElementById('blanks');
			var li = document.createElement('LI');
		
			ul.appendChild(li).className='letterSpace';
		}
	}
};

blanks();

// Triggered by key press
function getKey(event) {
	var letter = event.key;
	var find = new RegExp(letter, 'g');
	var starId = '#star'+star;

	length = selection.length;
	console.log(length);

	console.log(letter);

	// Checks if letter is in word
	if(find.test(split)) {
		for(var i = 0; i < length; i ++) {
			if(split[i] == letter) {
				// tracks place of letter within word
				indexes.push(i);
				letterCount++;
				console.log(letterCount + ' letters');
				console.log(indexes+' me!');
			}
		};

		correct();
	}

	// triggers lose screen
	else if(star === 7) {
		document.body.style.backgroundColor='#000000';
		document.querySelector('.dark').classList.remove('disable');
		document.querySelector('#footer').className='dim';
		document.querySelector('.main').className='disable';
	}

	// removes star for wrong guess
	else {
		document.querySelector(starId).className='disable';
		star ++;
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
	function dim() {
			if(find.test(alphabet1)) {
				var place1 = alphabet1.indexOf(letter);
				console.log(place1);
				var alpha1 = document.getElementById('alpha1');
				alpha1.querySelectorAll('#alpha1 > LI')[place1].className="dim";
			}

			else if(find.test(alphabet2)) {
				var place2 = alphabet2.indexOf(letter);
				var alpha2 = document.getElementById('alpha2');
				alpha2.querySelectorAll('#alpha2 > LI')[place2].className='dim';
			}
	};

	// correct word message and reset
	function correct () {
		if (letterCount == length) {
			wordCount++;
			console.log(wordCount + 'here');
			document.querySelector('#nice').classList.remove('disable');
			
			setTimeout(function() {
				document.getElementById('nice').className='disable';
				document.querySelector('#blanks').innerHTML = '';
				for(var i =0; i < 13; i++) {
					document.querySelectorAll('#alpha1 > LI')[i].classList.remove('dim');
					document.querySelectorAll('#alpha2 > LI')[i].classList.remove('dim');
				}
				blanks();
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
};



