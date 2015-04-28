var app = angular.module("epicodus", [])

app.directive("php", function(){
    return {
        restrict: "A",
        link: function () {
            alert("It's so fun")
        }
    }
})

app.directive("java", function(){
    return {
        restrict: "C",
        link: function () {
            alert("hahahahaha")
        }
    }
})


app.directive("javascript", function(){
    return {
        restrict: "M",
        link: function () {
            alert("yeah! yeah! yeah!")
        }
    }
})
