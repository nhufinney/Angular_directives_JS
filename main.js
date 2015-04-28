var app = angular.module("epicodus", [])

app.directive("angularstudy", function(){
    return{
        restrict: "E",
        template: "<div>Today we learn crazy Angular JS</div>"
    }
})
