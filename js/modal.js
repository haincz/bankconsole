function Messanger() {
  this.id = "#messanger";
  
  $(document).on('click', '#messanger .closemessanger', function() {
    $(this.id).fadeOut(800, function() {
      $(this.id).remove();
    }.bind(this));
  }.bind(this));
}


Messanger.prototype.showPinMessage = function() {
var messagePinOk = $('<div id="messanger" class="pinok"><p>Pin poprawny</p></div>'),
	messagePinWrong = $('<div id="messanger" class="pinwrong"><p>Błędny Pin:</p><button class="closemessanger">Spróbuj jeszcze raz</button></div>'),
	messagePinBlock = $('<div id="messanger" class="pinwrong"><p>Karta zablokowana. Zgłoś się do najbliższego punktu bankowego celem wyjaśnienia</p></div>');


	if (isPinBlocked() == true) {
		$('body').append(messagePinBlock);
		messagePinBlock.fadeIn();
	} else if (isPinOk() == true) {
		$('body').append(messagePinOk);
		messagePinOk.fadeIn();
		setTimeout(function(){
        $('#messanger').fadeOut(1000, function(){
        	$('#messanger').remove();
        });
    	},3000);
	} 

	else {
		$('body').append(messagePinWrong);
		messagePinWrong.fadeIn();
	}

}


var messanger = new Messanger();



