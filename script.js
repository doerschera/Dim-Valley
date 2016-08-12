
var alphabet1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
var alphabet2 = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ['telescope', 'nebulous', 'tenebrous', 'mnemonics', 'epiphany', 'guardian', 'fathoms', 'crepuscle', 'gavitational'];

var selection = words[Math.floor(Math.random()*11)];

console.log(selection);

var length = selection.split('').length;

var split = selection.split('');

var indexes = [];

console.log(length);

function blanks() {
	var num = selection.split('').length;

	for(var i = 0; i < num; i++) {
		var ul = document.getElementById('blanks');
		var li = document.createElement('LI');
		
		ul.appendChild(li).className='letterSpace';

	}
}

blanks();


function getKey(event) {
	var letter = event.key;
	var find = new RegExp(letter, 'g');

	console.log(letter);

	if(find.test(split)) {
		for(var i = 0; i < length; i ++) {
			if(split[i] == letter) {
				indexes.push(i);
			}
		};

		function addLetter () {
			for(var i = 0; i < indexes.length; i++) {
				var n = indexes[i] + 1;
				document.querySelector('#blanks').childNodes[n].innerHTML=letter;
			}
		};

		function dim() {
			if(find.test(alphabet1)) {
				var place1 = alphabet1.indexOf(letter);
				console.log('Here!');
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

};

function clearIndex() {
	indexes = [];
	console.log(indexes);
}

addLetter();
dim();
clearIndex();

};


