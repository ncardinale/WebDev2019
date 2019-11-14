
var SingleNoun
var PluralNoun
var Adjective
var MLbutton = $("MLbutton").on("click", PutWords)


$('#MLbutton').click(function PutWords() {
  var noun1 = $('#word1').val();
  $('#SingleNoun').text(noun1);
});

//var input = "";
//function() = input;
