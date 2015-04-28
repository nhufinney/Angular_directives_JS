// var app = angular.module("phoneApp", []);

//THIS EXPLAINS THE ISOLATE SCOPE "&"
// app.controller("AppCtrl", function($scope){
//     $scope.callHome = function(message){
//         alert(message)
//     }
// })
//
// app.directive("phone", function(){
//     return {
//         scope: {
//             dial: "&"
//         },
//         template: '<input type="text" ng-model="value">'+
//         '<div class="button" ng-click="dial({message: value})">Call home!</div>'
//     }
// })

//THIS EXPLAINS THE ISOLATE SCOPE "="
var app = angular.module("drinkApp", []);

app.controller("AppCtrl", function($scope){
    $scope.ctrlFlavor = "hahahhaaha"
})

app.directive("drink", function(){
    return {
        scope: {
            flavor: "="
        },
        template: '<input type="text" ng-model="flavor">'
    }
})
