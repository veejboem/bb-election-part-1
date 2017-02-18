$(document).ready(function() {
  $.ajax({
    method: 'GET',
    url: 'https://bb-election-api.herokuapp.com/',
    dataType:'JSON',
  }).done(function(data){
    console.log(data)
    for(var i=0; i < data.candidates.length; i++) {
     $('#votes').append('<li> Name: ' + data.candidates[i].name + '</li>')
     $('#votes').append('<li> Votes: ' + data.candidates[i].votes + '</li><br>')
    };
  });
});
