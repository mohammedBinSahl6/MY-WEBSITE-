(function (){
    "use strict";

    angular.module('calcApp',[])
    .controller('calc',calc)

    function calc($scope){
        $scope.r ='';
        $scope.one = function (){
            return $scope.r += '1';
        }
        $scope.two = function (){
            return $scope.r += '2';
        }
        $scope.three = function (){
            return $scope.r += '3';
        }
        $scope.four = function (){
            return $scope.r += '4';
        }
        $scope.five = function (){
            return $scope.r += '5';
        }
        $scope.six = function (){
            return $scope.r += '6';
        }
        $scope.seven = function (){
            return $scope.r += '7';
        }
        $scope.eight = function (){
            return $scope.r += '8';
        }
        $scope.nine = function (){
            return $scope.r += '9';
        }
        $scope.zero = function (){
            return $scope.r += '0';
        }
        $scope.pls = function (){
            return $scope.r += '+';
        }
        $scope.mins = function (){
            return $scope.r += '-';
        }
        $scope.multi = function (){
            return $scope.r += '*';
        }
        $scope.divi= function (){
            return $scope.r += '/';
        }
        $scope.dot = function(){
            return $scope.r += '.';
        }

        $scope.calcit = function(){
            var t = eval($scope.r);
            $scope.r = t;
        }

        $scope.del = function(){
            return $scope.r = '';
        }
        $scope.ageplace = '';
        $scope.calc_age = function(){
            var months = 12 * $scope.r;
            var days = 365 * $scope.r;
            var hours = days * 24;
            var minutes = hours *60;
            var seconds = minutes * 60;
            var birth_age = 2022 - $scope.r;

            var result = `عمرك هو:\n
            ${months} شهر .\n
            ${days} يوم .\n
            ${hours} ساعة . \n
            ${minutes} دقيقة . \n
            ${seconds} ثانية . 
            و سنة ميلادك هي : ${birth_age} `

           if ($scope.r ===''){
            return $scope.ageplace =   'عفوا  ادخل رقم لانه مفيش حاجة'
           }
          
           else{
            $scope.ageplace = result;
           }

        }


    }




















})()