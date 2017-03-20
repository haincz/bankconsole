var CONSTANTS = Object.freeze({
  PIN_CHAR: '*',
  CORRECT_PIN: '4567',
  MAX_PIN_LENGTH: 4,
  MAX_PIN_TRY: 3,
});

function Pinpad() {
  this.pin = [];
}

Pinpad.prototype.dodaj = function(xyz) {
  if (this.pin.length < CONSTANTS.MAX_PIN_LENGTH) {
    this.pin.push(xyz);
  }
}

Pinpad.prototype.get = function() {
  return this.pin.join('');
}

Pinpad.prototype.clear = function() {
  this.pin = [];
}

var pinpad = new Pinpad();


$(document).ready(function() {
	$('.btn-default').on('click', function(event) {
 		var buttonPressed = $(this).text();
  
		pinpad.dodaj(buttonPressed);

  	
  	drawPin();
  });

	$('#c').on('click', function(event){
  		resetDrawPin();
	});

  $('#ok').on('click', function(event){
    checkPin();
    counter += 1;
    console.log(counter);
  });
	
});

var counter = 1;

    function resetDrawPin() {
    pinpad.clear();
    drawPin();
  }

  function drawPin() {
    var length = pinpad.get().length;
    $('#pin').text(CONSTANTS.PIN_CHAR.repeat(length));
  }


  function checkPin() {
    // if (isPinOk()) {
    //   alert('success');
    // } else {
    //   alert('failed');
    // }

      if (isPinBlocked()){

        messanger.showPinMessage();
      }

      else {

        messanger.showPinMessage();
    
      }

      resetDrawPin();
  }


  function isPinOk() {
    if (pinpad.get() === CONSTANTS.CORRECT_PIN) {
      return true;
    } else {
      return false;
    }

    //return pinpad.get() === CONSTANTS.CORRECT_PIN ? true : false;

    //return pinpad.get() === CONSTANTS.CORRECT_PIN;
  }


  function isPinBlocked() {
  //   if (counter === CONSTANTS.MAX_PIN_TRY) {
  //     return true;
  //   } else {
  //     return false;
  //   }
    
    return counter === CONSTANTS.MAX_PIN_TRY ? true : false;
  }