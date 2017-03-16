function Messanger() {
  this.id = "#messanger";
  
  $(document).on('click', '#messanger .close', function() {
    $(this.id).fadeOut(800, function() {
      $(this.id).remove();
    }.bind(this));
  }.bind(this));
}


Messanger.prototype.showPinMessage = function() {
var messagePinOk = $('<div id="messanger"><p>Pin poprawny</p><button class="close">X</button></div>'),
	messagePinWrong = $('<div id="messanger"><p>Błędny Pin - spróbuj jeszcze raz</p><button class="close">X</button></div>'),
	messagePinBlock = $('<div id="messanger"><p>Karta zablokowana. Zgłoś się do najbliższego punktu bankowego celem wyjaśnienia</p></div>');


	if (isPinBlocked() = true){
		$('body').append(messagePinBlock);
		messagePinBlock.fadeIn();
	} else if (isPinOK() = true) {
		$('body').append(messagePinOk);
		messagePinOk.fadeIn();
	} else {
		$('body').append(messagePinWrong);
		messagePinWrong.fadeIn();
	}

}


function showPinMessageInfo() {  
  messanger.showMessage();
}

var messanger = new Messanger();



