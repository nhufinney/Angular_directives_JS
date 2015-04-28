var app = angular.module('choreApp', []);

 //INSERT INPUT FORM INTO ELEMENT
 // app.directive("kid", function(){
 //     return{
 //         restrict: "E",
 //         template:'Name:<input type="text" ng-model="new">{{new}}' + '<br>'+
 //          'LastName: <input type="text" ng-model="ok"> {{ok}}'
 //     }
 // })


 //ADD SCOPE OBJECT TO BIND AN INPUT SCOPE EFFECTIVE WITHIN THE INPUT
 //SCOPE OBJECT RESTRICT EFFECTIVE INTO MANY INPUT AT THE SAME TIME
 // app.directive("kid", function(){
 //     return{
 //         restrict: "E",
 //         scope:{},
 //         template:'Name:<input type="text" ng-model="new">{{new}}' + '<br>'+
 //          'LastName: <input type="text" ng-model="ok"> {{ok}}'
 //     }
 // })


 //THE APP TO CONTROL ANY ACTION TO BE CALLED BELOW
 app.controller("choreCtrl", function($scope){
    //  $scope.logChore = function(chore) {
    //      alert(chore + "is done!");
    //  }
    $scope.tommy = function(chore){
        console.log(chore);
    }
 });

 //CREATE ELEMENTS INTO HTML FILES
 app.directive("kid", function(){
     return{
         restrict: "E",
         scope:{
             action:"&"
         },
         template:'<input type="text" ng-model="chore">'+
         '{{chore}}' +
        '<div class="btn btn-danger" ng-click="action({chore:chore})">I\'m done!</div>'
     }
 })
