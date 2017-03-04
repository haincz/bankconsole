$(document).ready(function(){

  $('.btn-default').on('click', function(event) {
    var buttonPressed = $(this).text();
    console.log(buttonPressed);

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


});
