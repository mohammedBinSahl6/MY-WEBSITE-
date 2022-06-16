//jquery for my web page

$(document).ready(function(){

    $('#show-more-about').click(function(){
        $('.about-body').fadeToggle()
        $('.about-body').css('display','flex')
    });

  $('.btn1').click(function(){
      $('.p1').fadeToggle()
      $('.p1').css('display','block')
  })
  
  $('.btn2').click(function(){
    $('.p2').fadeToggle()
    $('.p2').css('display','block')
})

$('.btn3').click(function(){
    $('.p3').fadeToggle()
    $('.p3').css('display','block')
})




})

