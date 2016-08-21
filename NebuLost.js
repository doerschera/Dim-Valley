$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	
	var computer = [];
	var user = [];
	var guess = 0;
	var correct = 0;
	var guessLog = 0;
	var turn = 1;
	var position = [0, 1, 2, 3];
	var counter = 0;
	var correctHouses = 0;
	var wrong = 0;
	var cloudOrigin = $('#glowcloud').css('top');

	function computerGuess() {
		for(var i = 0; i < 4; i++) {
			var num = Math.floor(Math.random()*4)+1;
			console.log(num);
			computer.push(num);
		}
	}


	computerGuess();


	$('#choice1').click(function(){
		choice(1, 'images/house1.png');
	})

	$('#choice2').click(function(){
		choice(2, 'images/house2.png');
	})

	$('#choice3').click(function(){
		choice(3, 'images/house3.png');
	})

	$('#choice4').click(function(){
		choice(4, 'images/house4.png');
	})

	$('.confirm').click(function(){
		$('.intro').addClass('disable');
		$('.navbar-header').removeClass('disable');
	})

	$('#tryAgain').click(function(){
		tryAgain();
	})


	function choice(num, img) {
		var index = position[counter];

		user[index] = num;
		counter ++;

		$('.open').eq(0).attr('src', img);
		$('.open:first').removeClass('open');

		guess++;
		winLose();
		check();
	}

	function check() {
		console.log(user);
		console.log(computer);

		if(user.toString() == computer.toString()) {
			console.log('win');
			$('.houses').addClass('open');
			turn = 0;
			position = [0, 1, 2, 3]
			counter =0;
			$('.notice').css('visibility', 'visible');
			setTimeout(function() {
				$('.houses').attr('src', 'images/emptyHouses.png')
				$('#discovered').html('Correct Turns: '+correct+'/5');
				$('.pastGuess').children().css('backgroundColor', 'transparent');
				$('.notice').css('visibility', 'hidden');
				$('#glowcloud').animate({top: cloudOrigin});
				$('.pastGuess').css('backgroundColor', 'transparent');
				}, 2500);
			correct ++;
			correctHouses = 0;
			user = [];
			computer = [];
			guess = 0;
			computerGuess();
			winLose();
		}

		else if(guess == 4) {
			turn ++;
			guessLog ++;
			counter = 0;
			position = [];
			console.log(wrong);
			setTimeout( function() {
				$('#glowcloud').animate({top: '+=50px'});
				$('.pastGuess').eq(wrong).css({'backgroundColor':'#ffffb6', 'opacity':'0.5'});
				wrong++;
				for(var i = 0; i < 4; i++) {
					if(user[i] == computer[i]) {
						correctHouses ++;
					} else {
						$('.houses').eq(i).addClass('open');
						$('.houses').eq(i).attr('src', 'images/emptyHouses.png');
						guess-=1;
						position.push(i);
					}
				}
			}, 1500);
		}
	};


// rgb(27, 119, 173)
	function winLose() {
		console.log(correct + ' win');
		var ul = $('.pastGuess').eq(guessLog);
		var cloud = '-='+50*turn;
		if(correct === 5) {
			setTimeout(function() {
				$('.win').removeClass('disable');
				$('body').css('backgroundColor', 'rgb(69, 130, 166)');
				$(ul).children().css('backgroundColor', 'transparent');
				$('#glowcloud').addClass('disable');
			}, 3000);
		} else if (turn === 6) {
			setTimeout(function() {
				$('.lose').removeClass('disable');
				$('body').css('backgroundColor', '#000000;')
				}, 3000);
			}

	}

	function tryAgain() {
		user = [];
		computer = [];
		guess = 0;
		correctHouses = 0;
		counter = 0;
		position =[0, 1, 2, 3]
		guessLog = 0;
		$('.houses').attr('src', 'images/emptyHouses.png')
		$('.lose').addClass('disable');
		$('body').css('backgroundColor', 'rgb(12, 90, 92)');
		$('.pastGuess').css('backgroundColor', 'transparent');
		$('#glowcloud').animate({top: cloudOrigin});
		console.log(user);
		computerGuess();
	}

})

