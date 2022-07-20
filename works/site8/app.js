$(document).ready(function(){

    $('.iphone-13').click(function(){
        $('.iphone-13-list').show();
        $('.oppo-reno-7-list').hide();
        $('.g-s10-list').hide();
        $('.price').html(' <i class="fa-solid fa-money-bill-1-wave"> STARTING PRICE : $799');
        $('.phone-img').attr('src','imgs/iPhone-13-2.jpg');
        $('.name-phone').text('IPHONE 13');


    });

    $('.oppo-reno-7').click(function(){
        $('.iphone-13-list').hide();
        $('.oppo-reno-7-list').show();
        $('.g-s10-list').hide();
        $('.price').html(' <i class="fa-solid fa-money-bill-1-wave"> STARTING PRICE : $422');
        $('.phone-img').attr('src','imgs/Oppo-Reno-7-5G-Colors.jpg');
        $('.name-phone').text('OPPO RENO 7 5G ');

    });

    $('.g-s10').click(function(){
        $('.iphone-13-list').hide();
        $('.oppo-reno-7-list').hide();
        $('.g-s10-list').show();
        $('.price').html('<i class="fa-solid fa-money-bill-1-wave"> STARTING PRICE : $500');
        $('.phone-img').attr('src','imgs/samsung-s10.jpg');
        $('.name-phone').text('SAMSUNG GALAXY S10');


    });













})