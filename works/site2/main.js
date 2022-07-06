
$(document).ready(function(){
    $('.fa-star').click(function(){
        $(this).css('color',"yellow");
    });

    $('.rate-btn').click(function(){
        $('.fa-star').css('color','white');
        $('.footer input').val('');
        $('.message-rate').css('opacity','1');
    });

    $('.message-rate').click(function(){
        $(this).css('opacity','0');
    });

    $('.add').click(function(){
        var total = $('.total').text();
        var price = $('.total').parent().find('.d-price').text();
        var q = $('.total').parent().find('input').val();
        
        $('.modal-body').append(`
        <div class="row" style='border-bottom :1px solid;margin:3vh 0;' >
        <div class="col-4">${ $(this).parent().find(".d-title").text()}</div>
        <div class="col-4"><h4 class="h4 tect-center">${$(this).parent().find(".d-price").text()}</4></div>
        <div class="col-4"><input type="number" class='form-control' style='width:5vh;'></div>
       </div>
`);
        $('.mes').css('display','none');
        total += (price*q);

    });
    var total = $('.total').text();
    var price = $('.total').parent().find('.d-price').text();
    var q = $('.total').parent().find('input').val();
    

    




});
//--------------------------------angularjs----------------------------------------
(function(){

    'use strict';

    angular.module('app',[])
    .service('shopCart',shopCart)
    .controller('addToCart',addToCart)
    .controller('showCart',showCart)

    function shopCart(){
        var service = this;
        var cart = [];
        
        service.add = function(title,price){
            var dish = {
                title: title,
                price:price
            };
            cart.push(dish);
        };
        service.remove = function(index){
            cart.splice(index,1);

        };
        service.get = function(){
            return cart;
        };
    }

    addToCart.$inject =['shopCart'];
    function addToCart(shopCart){
        var adder = this;
        adder.title ='';
        adder.price ='';
        adder.add = function(){
            shopCart.add(adder.title,adder.price);
        };
    }
    showCart.$inject =['shopCart'];
    function showCart(shopCart){
        var show = this;
        show.cart = shopCart.get();
        show.remove = function(index){
            shopCart.remove(index)
        };
    }







})()



