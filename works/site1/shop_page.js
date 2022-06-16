//JQUERY FOR SHOP PAGE



$(document).ready(function(){
 //adding the to the cart
    var title_product1 = $('#tp-1').text();
    var price1 = $('#pp-1').text();
    var rmv = $('.remove-item');
    $('#buybtn1').click(function(){
        $('.items-cart').append(`<tr><td>${title_product1}</td><td>${price1}</td><td>1</td>
       <td>${rmv}</td></tr>`)
       $('.totaly').text(price1);
    });

    var title_product2 = $('#tp-2').text();
    var price2 = $('#pp-2').text();
    var rmv = $('.remove-item').html();
    $('#buybtn2').click(function(){
        $('.items-cart').append(`<tr><td>${title_product2}</td><td>${price2}</td><td>1</td>
       <td>${rmv}</td></tr>`)
    });


    var title_product3 = $('#tp-3').text();
    var price3 = $('#pp-3').text();
    var rmv = $('.remove-item').html();
    $('#buybtn3').click(function(){
        $('.items-cart').append(`<tr><td>${title_product3}</td><td>${price3}</td><td>1</td>
       <td>${rmv}</td></tr>`)
    });



    $('.remove-item').click(function(){
        alert('clicked')

    });
    $('.reset-cart').click(function(){
        $('tbody').empty()
    });

    $('.pur').click(function(){
        alert('your products boaght succusfully!')
    });











});