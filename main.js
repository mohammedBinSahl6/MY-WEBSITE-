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

// $('.work-card').click(function(){
//     $('.info-place').css('opacity',"1");
// })




})
document.onreadystatechange = function() {
    if (document.readyState !== "complete") {
        document.querySelector(
          "body").style.visibility = "hidden";
        document.querySelector(
          "#loader").style.visibility = "visible";
    } else {
        document.querySelector(
          "#loader").style.display = "none";
        document.querySelector(
          "body").style.visibility = "visible";
    }
};

