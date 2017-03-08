var correctPin = 4567;


function Pinpad() {
  this.pin = [];
}

Pinpad.prototype.push = function(buttonPressed) {
  this.pin.push(buttonPressed);
}

Pinpad.prototype.get = function() {
  return this.pin.join('');
}

var pinpad = new Pinpad();

$(document).ready(function(){

	$('.btn-default').on('click', function(event) {
 		var buttonPressed = $(this).text();
  
		pinpad.push(buttonPressed);
  		var pinData = pinpad.get();

  	
  		drawPin();
   	});

   	function drawPin() {
  		var result = "*";
  		$('#pin').append(result);
	}

	$('#c').on('click', function(event){
  		resetDrawPin();

	})

	function resetDrawPin() {
  		$('#pin').text("");
	}

	$('#ok').on('click', function(event){
		checkPin();
	})


	
});
