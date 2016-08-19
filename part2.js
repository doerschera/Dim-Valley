$(document).ready(function(){
	
	var computer = [];
	var user = [];
	var guess = 0;
	var correct = 0;
	var guessLog = 0;
	var turn = 1;
	var position = 0;
	var correctHouses = 1;

	function computerGuess() {
		for(var i = 0; i < 4; i++) {
			var num = Math.floor(Math.random()*4)+1;
			console.log(num);
			computer.push(num);
		}
	}

	computerGuess();

	$('#choice1').click(function(){
		var ul = $('.pastGuess').eq(guessLog);

		user[guess] = 1;
		$(ul).children().eq(guess).css('backgroundColor', 'rgb(73, 95, 144)');

		$('.open').eq(0).attr('src', 'images/house1.png');

		$('.open:first').removeClass('open');
		guess ++;
		winLose();
		check();
	})

	$('#choice2').click(function(){
		var ul = $('.pastGuess').eq(guessLog);

		user[guess] = 2;
		$(ul).children().eq(guess).css('backgroundColor', 'rgb(3, 49, 103)');

		$('.open').eq(0).attr('src', 'images/house2.png');

		$('.open:first').removeClass('open');
		guess ++;
		winLose();
		check();
	})

	$('#choice3').click(function(){
		var ul = $('.pastGuess').eq(guessLog);

		user[guess] = 3;
		ul.children().eq(guess).css('backgroundColor', 'rgb(73, 49, 81)');
	
		$('.open').eq(0).attr('src', 'images/house3.png');


		$('.open:first').removeClass('open');
		guess ++;
		winLose();
		check();
	})

	$('#choice4').click(function(){
		var ul = $('.pastGuess').eq(guessLog);

		user[guess] = 4;
		ul.children().eq(guess).css('backgroundColor', 'rgb(62, 64, 94)');

		$('.open').eq(0).attr('src', 'images/house4.png');

		$('.open:first').removeClass('open');
		guess ++;
		winLose();
		check();
	})


	function check() {
			console.log(user);
			if (turn === 6) {
			setTimeout(function() {
				$('.lose').removeClass('disable');
				$('body').css('backgroundColor', '#000000;')
				}, 1500);
			}

			else if(correctHouses === 4) {
				console.log('win');
				$('.notice').css('visibility', 'visible');
				setTimeout(function() {
					$('.houses').attr('src', 'images/emptyHouses.png')
					$('.pastGuess').children().css('backgroundColor', 'transparent');
					$('.notice').css('visibility', 'hidden');
					}, 2500);
				correct ++;
				user = [];
				computer = [];
				guess = 0;
				computerGuess();
			}

			else {
				setTimeout( function() {
					if (guess == 4) {
						console.log('lose')
						turn++;

						for(var i = 0; i < 4; i++) {
							if(user[i] == computer[i]) {
								correctHouses ++;
								console.log('here!')
							}
							else {
								$('.houses').eq(i).addClass('open');
								$('.houses').eq(i).attr('src', 'images/emptyHouses.png');
								guess -= 1;
							}
						}

						$('#glowcloud').animate({top: '+=50px'});
						// setTimeout(function(){
						// 	$(ul).children().css('borderColor', '#ffffb3');
						// }, 1500);
						guessLog ++;
						console.log(correctHouses+ ' correct');
					}
				}, 1500)
			}
		}


// rgb(27, 119, 173)
	function winLose() {
		console.log(turn);
		var ul = $('.pastGuess').eq(guessLog);
		if(correct === 5) {
			turn = 0;
			setTimeout(function() {
				$('.win').removeClass('disable');
				$('body').css('backgroundColor', 'rgb(69, 130, 166)');
				$(ul).children().css('borderColor', '#ffffe6')
				$('#glowcloud').animate({top: '0px'});
				}, 1500);
		}

	}

})

