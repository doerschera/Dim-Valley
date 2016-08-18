$(document).ready(function(){
	
	var computer = [];
	var user = [];
	var guess = 0;
	var correct = 0;
	var guessLog = 0;
	var turn = 1;
	var position = 0;

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

		user.push(1);
		$(ul).children().eq(guess).css('backgroundColor', 'rgb(73, 95, 144)');

		$('.open').eq(0).attr('src', 'images/house1.png');

		$('.houses').eq(position).removeClass('open');
		guess ++;
		position ++;
		console.log(position + 'position');
		winLose();
		check();
	})

	$('#choice2').click(function(){
		var ul = $('.pastGuess').eq(guessLog);

		user.push(2);
		$(ul).children().eq(guess).css('backgroundColor', 'rgb(3, 49, 103)');

		$('.open').eq(0).attr('src', 'images/house2.png');

		$('.houses').eq(position).removeClass('open');
		guess ++;
		position ++;
		console.log(user);
		winLose();
		check();
	})

	$('#choice3').click(function(){
		var ul = $('.pastGuess').eq(guessLog);

		user.push(3);
		ul.children().eq(guess).css('backgroundColor', 'rgb(73, 49, 81)');
	
		$('.open').eq(0).attr('src', 'images/house3.png');

		$('.houses').eq(position).removeClass('open');
		guess ++;
		position ++;
		console.log(position + 'position');
		winLose();
		check();
	})

	$('#choice4').click(function(){
		var ul = $('.pastGuess').eq(guessLog);

		user.push(4);
		ul.children().eq(guess).css('backgroundColor', 'rgb(62, 64, 94)');

		$('.open').eq(0).attr('src', 'images/house4.png');

		$('.houses').eq(position).removeClass('open');
		guess ++;
		position ++;
		console.log(position + 'position');
		winLose();
		check();
	})


	function check() {

			if(computer.toString() === user.toString()) {
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

			else if (turn === 6) {
			setTimeout(function() {
				$('.lose').removeClass('disable');
				$('body').css('backgroundColor', '#000000;')
				}, 1500);
			}

			setTimeout( function() {
				if (guess == 4) {
					console.log('lose')
					turn++;

					for(var i = 0; i < 4; i++) {
						if(user[i] !== computer[i]) {
							$('.houses').eq(i).addClass('open');
							$('.houses').eq(i).attr('src', 'images/emptyHouses.png')
							guess -= 1;
							console.log(guess + 'guess')
						}
					}

					$('#glowcloud').animate({top: '+=50px'});
					// setTimeout(function(){
					// 	$(ul).children().css('borderColor', '#ffffb3');
					// }, 1500);
					user = []
					guessLog ++;
				}
			}, 1500)
			
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

