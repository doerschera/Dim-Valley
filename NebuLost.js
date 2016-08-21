$(document).ready(function(){
	$('[data-toggle="tooltip"]').tooltip();
	
	var computer = [];
	var user = [];
	var guess = 0;
	var correct = 0;
	var turn = 1;
	// determines which house position to attach images after round 1
	var position = [0, 1, 2, 3];
	var counter = 0;

	var correctHouses = 0;
	var wrong = 0;
	var cloudOrigin = $('#glowcloud').css('top');


	// computer generated order
	function computerGuess() {
		for(var i = 0; i < 4; i++) {
			var num = Math.floor(Math.random()*6)+1;
			computer.push(num);
			console.log(computer);
		}
	}


	computerGuess();


	// click events
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

	$('#choice5').click(function(){
		choice(5, 'images/house5.png');
	})

	$('#choice6').click(function(){
		choice(6, 'images/house6.png');
	})

	$('.confirm').click(function(){
		$('.intro').addClass('disable');
		$('.navbar-header').removeClass('disable');
	})

	$('#tryAgain').click(function(){
		tryAgain();
	})

	// Make first white house into chosen color
	function choice(num, img) {
		console.log(user);
		var index = position[counter];

		user[index] = num;
		counter ++;

		$('.open').eq(0).attr('src', img);
		$('.open:first').removeClass('open');

		guess++;
		check();
	}

	// checks if guess is correct
	function check() {
		if(user.toString() == computer.toString()) {
			$('.houses').addClass('open');
			$('.notice').css('visibility', 'visible');

			turn = 0;
			position = [0, 1, 2, 3]
			counter =0;
			
			setTimeout(function() {
				$('.houses').attr('src', 'images/emptyHouses.png')
				$('#discovered').html('Correct Turns: '+correct+'/5');
				$('.pastGuess').css({'backgroundColor':'transparent', 'opacity':'1.0'});
				$('.notice').css('visibility', 'hidden');
				$('#glowcloud').animate({top: cloudOrigin});
			}, 2500);
			
			correct ++;
			correctHouses = 0;
			guess = 0;
			wrong = 0;
			user = [];
			computer = [];
			
			computerGuess();
			winLose();
		}

		// when guess lost equals 4 each house has correct or guessed color
		else if(guess == 4) {
			winLose();
			turn ++;
			counter = 0;
			position = [];
			
			// cloud moves down, turn counter is filled
			setTimeout( function() {
				$('#glowcloud').animate({top: '+=50px'});
				$('.pastGuess').eq(wrong).css({'backgroundColor':'#ffffb6', 'opacity':'0.5'});
				
				for(var i = 0; i < 4; i++) {
					// if house color makes computer order color image stays
					if(user[i] == computer[i]) {
						correctHouses ++;
					// wrong colored guess replaced by white image
					} else {
						$('.houses').eq(i).addClass('open');
						$('.houses').eq(i).attr('src', 'images/emptyHouses.png');
						guess-=1;
						position.push(i);
					}
				}
				wrong++;
			}, 1500);
		}
	};


// triggers win or lose screens
	function winLose() {
		var ul = $('.pastGuess').eq(guessLog);
		var cloud = '-='+50*turn;
		if(correct === 5) {
			setTimeout(function() {
				$('.win').removeClass('disable');
				$('body').css('backgroundColor', 'rgb(69, 130, 166)');
				$(ul).children().css('backgroundColor', 'transparent');
				$('#glowcloud').addClass('disable');
			}, 3000);
		} else if (turn === 5 && user.toString() != computer.toString()) {
			setTimeout(function() {
				$('.lose').removeClass('disable');
				$('body').css('backgroundColor', '#000000;')
				}, 3000);
			}

	}

// resets values, except 'correct turns'
	function tryAgain() {
		user = [];
		computer = [];
		guess = 0;
		correctHouses = 0;
		counter = 0;
		position =[0, 1, 2, 3]
		turn = 1;
		wrong = 0;

		$('.houses').attr('src', 'images/emptyHouses.png')
		$('.houses').addClass('open');
		$('.lose').addClass('disable');
		$('body').css('backgroundColor', 'rgb(12, 90, 92)');
		$('.pastGuess').css({'backgroundColor':'transparent', 'opacity':'1.0'});
		$('#glowcloud').animate({top: cloudOrigin});

		computerGuess();
	}

})


