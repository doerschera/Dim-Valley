$(document).ready(function(){
	
	var computer = [];
	var user = [];
	var guess = 0;
	var correct = 0;
	var turn = 0;

	function computerGuess() {
		for(var i = 0; i < 4; i++) {
			var num = Math.floor(Math.random()*4)+1;
			console.log(num);
			computer.push(num);
		}
	}

	computerGuess();

	$('#choice1').click(function(){
		user.push(1);
		$('.houses').eq(guess).attr('src', 'images/house1.png');
		guess ++;
		console.log(user);
		winLose();
	})

	$('#choice2').click(function(){
		user.push(2);
		$('.houses').eq(guess).attr('src', 'images/house2.png');
		guess ++;
		console.log(user);
		winLose();
	})

	$('#choice3').click(function(){
		user.push(3);
		$('.houses').eq(guess).attr('src', 'images/house3.png');
		guess ++;
		console.log(user);
		winLose();
	})

	$('#choice4').click(function(){
		user.push(4);
		$('.houses').eq(guess).attr('src', 'images/house4.png');
		guess ++;
		console.log(user);
		winLose();
	})


	function winLose() {
		console.log('winLose')
		if(user.length===4) {
			if(computer.toString() === user.toString()) {
				console.log('win');
				$('.notice').fadeIn(1000);
				$('.notice').delay(500).fadeOut(1000);
				setTimeout(function() {
					$('.houses').attr('src', 'images/emptyHouses.png')
					}, 2500);
				correct ++;
				user = [];
				computer = [];
				guess = 0;
				computerGuess();
			} else {
				console.log('lose')
				$('#glowcloud').animate({top: '+=50px'});
				setTimeout(function(){
					$('.houses').attr('src', 'images/emptyHouses.png');
				}, 1500);
				user = []
				guess = 0;
				turn ++;
			}
		}
	}

})

// setTimeout(function() {
// 	$('.win').removeClass('disable');
// 	$('body').css('backgroundColor', 'rgb(69, 130, 166)');
// 	}, 1500);