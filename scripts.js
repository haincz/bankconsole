$(document).ready(function(){

  $('.btn-default').on('click', function(event) {
    var buttonPressed = $(this).html();
    console.log(buttonPressed);

    drawPin();
   });

function drawPin() {
  var result = "*";
  $('#pin').append(result);
}


});
