$(document).on('ready', function() {
  var counter = 0;
  $('body').on('click', '.generate', function(){
    counter++;
    $('.button-container').append('<div class="two-buttons yellow-background"> <button class="change-color">Change Color</button> <button class ="delete">Delete</button> ' + counter + ' </div>');
  })
  $('.button-container').on('click', '.delete', function(){
    $(this).parent().remove();

  })
  $('.button-container').on('click', '.change-color', function(){
    if ($(this).parent().hasClass('yellow-background')){
      $(this).parent().removeClass('yellow-background');
      $(this).parent().addClass('red-background');


    }else {
      $(this).parent().removeClass('red-background');
      $(this).parent().addClass('yellow-background');
    }


  })
});
