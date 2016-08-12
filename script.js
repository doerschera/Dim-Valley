
var alphabet1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
var alphabet2 = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ['telescope', 'tenebrous', 'mnemonics', 'guardian', 'fathoms', 'crepuscle', 'gravitational'];

var selection = words[Math.floor(Math.random()*6)];

console.log(selection);

var length = selection.split('').length;

var split = selection.split('');

var indexes = [];

var star = 1;

var pastWords = [];

var letterCount = 0;


console.log(length);

function wordTracking() {

	if(pastWords.indexOf[selection] < 0) {
		pastWords.push(selection);
	}

	else if(pastWords.length == 7) {
		setTimeout(function(){
			document.querySelector('.win').classList.remove('disable');
			document.body.style.backgroundColor='rgb(69, 130, 166)';
			document.querySelector('.main').className='disable';
			}, 1000);
	}

	else {
		selection = words[Math.floor(Math.random()*6)]
	}
};

console.log(pastWords + 'me!');


function blanks() {
	var num = selection.split('').length;

	for(var i = 0; i < num; i++) {
		var ul = document.getElementById('blanks');
		var li = document.createElement('LI');
		
		ul.appendChild(li).className='letterSpace';

	}
};

wordTracking();
blanks();


function getKey(event) {
	var letter = event.key;
	var find = new RegExp(letter, 'g');
	var starId = '#star'+star;

	console.log(letter);

	if(find.test(split)) {
		for(var i = 0; i < length; i ++) {
			if(split[i] == letter) {
				indexes.push(i);
				letterCount++;
				console.log(letterCount+' me!');
			}
		};

		correct();
	}


	else if(star === 7) {
		document.body.style.backgroundColor='#000000';
		document.querySelector('.dark').classList.remove('disable');
		document.querySelector('#footer').className='dim';
		document.querySelector('.main').className='disable';
	}

	else {
		document.querySelector(starId).className='disable';
		star ++;
	}

	addLetter();

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

	function addLetter () {
		for(var i = 0; i < indexes.length; i++) {
			var n = indexes[i] + 1;
			document.querySelector('#blanks').childNodes[n].innerHTML=letter;
		}

	};

	function correct () {
		if (letterCount == length) {
			console.log('here');
			document.querySelector('#nice').classList.remove('disable');
			
			setTimeout(function() {
				document.getElementById('nice').className='disable';
				document.querySelector('#blanks').innerHTML = '';
				for(var i =0; i < 13; i++) {
					document.querySelectorAll('#alpha1 > LI')[i].classList.remove('dim');
					document.querySelectorAll('#alpha2 > LI')[i].classList.remove('dim');
				}
				selection = words[Math.floor(Math.random()*6)];
				console.log(selection);
				wordTracking();
				blanks();
			}, 2000);
		}
	};

	function clearIndex() {
		indexes = [];
		console.log(indexes + 'look');
	}

	dim();
	clearIndex();
};



