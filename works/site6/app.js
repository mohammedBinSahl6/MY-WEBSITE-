//script the calculator and to do list using angularjs------
//by mohammed nin sahl


(function(){
'use strict';

var items =[];
    angular.module('c-tapp',[])
    .controller('calculater',calc)
    .controller('todo',todo)




    function calc($scope){
        $scope.a = 0;
        $scope.b=0;
        $scope.c=0;
        $scope.result = function(){
            if ($scope.opr == '+'){
                return $scope.c= $scope.a + $scope.b;
            }
            else if($scope.opr == "-"){
                return  $scope.c= $scope.a - $scope.b;
            }
            else if ($scope.opr == 'x'){
                return  $scope.c= $scope.a * $scope.b;
            }
            else if ($scope.opr =='/'){
                return  $scope.c= $scope.a / $scope.b;
            }
        }
    }


    //to do list

    function todo($scope){
        $scope.items= items;
        $scope.name='';
        $scope.add = function(){
            var newitem = $scope.name
            $scope.items.push(newitem);
            $scope.name ='';
        }
    }








})()