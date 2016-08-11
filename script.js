
var alphabet1 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm'];
var alphabet2 = ['n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

var words = ['telescope', 'nebulous', 'tenebrous', 'vetiver', 'mnemonics', 'epiphany', 'guardian', 'fathoms', 'crepuscle', 'gavitational'];

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

	console.log(letter);

	for(var i = 0; i < length; i ++) {
		if(split[i] == letter) {
			indexes.push(i);
		}
	};

	console.log(indexes);

	function addLetter () {
	for(var i = 0; i < indexes.length; i++) {
		var list = document.getElementById('blanks').childNodes;

		console.log(letter);

		var n = indexes[i];

		 var element = list[n];
		
		element.innerHtml=letter;
	}
};

addLetter();

};


