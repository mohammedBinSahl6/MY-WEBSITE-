//JQUERY FOR SHOP PAGE



$(document).ready(function(){
 //adding the to the cart
    var title_product1 = $('#tp-1').text();
    var price1 = $('#pp-1').text();
    var rmv = $('.remove-item');
    $('#buybtn1').click(function(){
        $('.items-cart').append(`<tr><td>${title_product1}</td><td>${price1}</td><td>1</td>
       <td>${rmv}</td></tr>`)
       
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

    var title_product4 = $('#tp-4').text();
    var price4 = $('#pp-4').text();
    var rmv = $('.remove-item').html();
    $('#buybtn4').click(function(){
        $('.items-cart').append(`<tr><td>${title_product4}</td><td>${price4}</td><td>1</td>
       <td>${rmv}</td></tr>`)

    });

    var title_product5 = $('#tp-5').text();
    var price5 = $('#pp-5').text();
    var rmv = $('.remove-item').html();
    $('#buybtn5').click(function(){
        $('.items-cart').append(`<tr><td>${title_product5}</td><td>${price5}</td><td>1</td>
       <td>${rmv}</td></tr>`)
    });

    var title_product6 = $('#tp-6').text();
    var price6 = $('#pp-6').text();
    var rmv = $('.remove-item').html();
    $('#buybtn6').click(function(){
        $('.items-cart').append(`<tr><td>${title_product6}</td><td>${price6}</td><td>1</td>
       <td>${rmv}</td></tr>`)
    });

    var title_product7 = $('#tp-7').text();
    var price7 = $('#pp-7').text();
    var rmv = $('.remove-item').html();
    $('#buybtn7').click(function(){
        $('.items-cart').append(`<tr><td>${title_product7}</td><td>${price7}</td><td>1</td>
       <td>${rmv}</td></tr>`)
    });

    var title_product8 = $('#tp-8').text();
    var price8 = $('#pp-8').text();
    var rmv = $('.remove-item').html();
    $('#buybtn8').click(function(){
        $('.items-cart').append(`<tr><td>${title_product8}</td><td>${price8}</td><td>1</td>
       <td>${rmv}</td></tr>`)
    });

    var title_product9 = $('#tp-9').text();
    var price9 = $('#pp-9').text();
    var rmv = $('.remove-item').html();
    $('#buybtn9').click(function(){
        $('.items-cart').append(`<tr><td>${title_product9}</td><td>${price9}</td><td>1</td>
       <td>${rmv}</td></tr>`)
    });

    var title_product10 = $('#tp-10').text();
    var price10 = $('#pp-10').text();
    var rmv = $('.remove-item').html();
    $('#buybtn10').click(function(){
        $('.items-cart').append(`<tr><td>${title_product10}</td><td>${price10}</td><td>1</td>
       <td>${rmv}</td></tr>`)
    });

    var title_product11 = $('#tp-11').text();
    var price11 = $('#pp-11').text();
    var rmv = $('.remove-item').html();
    $('#buybtn11').click(function(){
        $('.items-cart').append(`<tr><td>${title_product11}</td><td>${price11}</td><td>1</td>
       <td>${rmv}</td></tr>`)


    });

    var title_product12 = $('#tp-12').text();
    var price12 = $('#pp-12').text();
    var rmv = $('.remove-item').html();
    $('#buybtn12').click(function(){
        $('.items-cart').append(`<tr><td>${title_product12}</td><td>${price12}</td><td>1</td>
       <td>${rmv}</td></tr>`)
    });

    var title_product13 = $('#tp-13').text();
    var price13 = $('#pp-13').text();
    var rmv = $('.remove-item').html();
    $('#buybtn13').click(function(){
        $('.items-cart').append(`<tr><td>${title_product13}</td><td>${price13}</td><td>1</td>
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


    //for hover on the product

    






});