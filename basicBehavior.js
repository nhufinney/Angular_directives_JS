var app= angular.module("behaviorApp", [])

app.directive("enter", function(){
    return function(scope, element){
        element.bind("mouseenter", function(){
            console.log("I'm in the text!");
        })
    }
})

app.directive("leave", function(){
    return function(scope, element){
        element.bind("mouseleave", function(){
            console.log("I'm leaving to go home!");
        })
    }
})
