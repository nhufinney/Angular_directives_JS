var app = angular.module("behaviorApp", [])

app.directive("enter", function(){
    return function(scope, element, attrs) {
        element.bind("mouseenter", function (){
            element.addClass(attrs.enter);
        })
    }
})

app.directive("leave", function(){
    return function(scope, element, attrs) {
        element.bind("mouseleave", function(){
            element.removeClass(attrs.enter);
        })
    }
})

//Additional practicing with click and double click
app.directive("some", function(){
    return function(scope, element, attrs) {
        element.bind("click", function (){
            element.addClass(attrs.some);
        });
    };
});


//LESSONS: in HTML file, call the App only one time.
//search more DOM actions in jQuery library such as https://api.jquery.com
