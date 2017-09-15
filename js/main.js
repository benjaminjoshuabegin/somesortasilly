// Make it rain!!!
$('.lunch').hide()
$('.dinner').hide()
// Brunch menu click
$('#Brunch').on('click', function (){
  $('.lunch').hide()
  $('.dinner').hide()
  $('.brunch').fadeIn(500);
});

// Lunch menu click
$('#Lunch').on('click', function (){
  $('.lunch').fadeIn(500);
  $('.brunch').hide()
  $('.dinner').hide()
});

// Dinner menu click
$('#Dinner').on('click', function (){
  $('.dinner').fadeIn(500);
  $('.lunch').hide()
  $('.brunch').hide()
});

$('.reservation-button').on('click', function (){
  $('.modal').fadeIn(500);
});

$(window).scroll(function(){
  if ($(this).scrollTop() >= 50) {
    $('nav').addClass('sami')

  }

  else {
      $('nav').removeClass('sami')
  }

});

$('h3 a').on('click', function (){
  $('.modal').hide();
});

$('h3 a').click(function(event){
  event.preventDefault();
});

$('.request-reservation').on('click', function (){
  $('.modal').hide();
});

$('.request-reservation').click(function(event){
  event.preventDefault();
});
