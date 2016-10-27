var app = angular.module('myApp', ['ui.router']);

app.config(function($stateProvider, $urlRouterProvider) {
    
    $urlRouterProvider.otherwise('/home/info');
    
    $stateProvider
        
        // HOME STATES AND NESTED VIEWS ========================================
        .state('home', {
            url: '/home',
            templateUrl: 'main.html',
            controller:"HomeCtrl"
        })
        .state('home.table', { 
            url: '/table',
            templateUrl: 'home-table.html',
            controller:"HometableCtrl"
            
        })
        .state('home.info', {
            url: '/info',
            templateUrl: 'home-info.html',
            controller:"HomeInfoCtrl"
            
        })
        .state('categories', {
            url: '/categories',
            templateUrl: 'categories.html',
            controller:"CategoriesCtrl"
        })
      })
.run(function($rootScope) {
  // $rootScope._ = _;
})
.controller("HomeCtrl",function ($scope,$rootScope,$location) {
  // body...

 
  
// $rootScope.tabactive = "home";
   

})
.controller("HometableCtrl",function ($scope,$rootScope,$location) {
  // body...
    $scope.$parent.home = 2
    $scope.tablerows = [
        {fname:"Ali",lname:"Arsalan",age:23},
        {fname:"Bilal",lname:"Ahmed",age:33},
        {fname:"Nouman",lname:"Hussain",age:16},
        {fname:"Jafar",lname:"Mehmood",age:18},

    ];
  
})
.controller("HomeInfoCtrl",function ($scope,$rootScope,$location) {
  // body...
    $scope.$parent.home = 1
    $scope.UserA = {}
    $scope.UserB = {}
    $scope.UserA.FirstName = "Hassan";
    $scope.UserB.FirstName = "Bilal";

    $scope.UserA.LastName = "Hassan";
    $scope.UserB.LastName = "Bilal";


    $scope.html = "<h1>HASSAN</h1>";
   
  
})
.controller("CategoriesCtrl",function ($scope) {
  // body...
})
.filter('age', function() {
    //https://toddmotto.com/everything-about-custom-filters-in-angular-js/
    return function(items,age) {
      //  console.log(age)
        if(typeof age == "undefined")
        {
            return items
        }
        else
        {
            return items.filter(function (item) {
                return item.age > age
            })
        }
       
    }
})
.directive('userinfo', function() {
        var directive = {};

        directive.restrict = 'EA'; /* restrict this directive to elements */
        directive.scope = {
        user : "=user",
        userClick:'&'
        }
        directive.compile = function(element, attributes) {
            element.css("border", "1px solid #cccccc");

            var linkFunction = function($scope, element, attributes) {
                element.html("First Name: " + $scope.user.FirstName + "<br> Last Name: " + $scope.user.LastName);
                element.css("background-color", "#ffff00");

            }

            return linkFunction;
        }

        return directive;
})
// .directive('htmlRender', function($compile) {
//   return {
//     restrict: 'E',
//     scope: { html: '@' },
//     link: function(scope, element) {
//       scope.$watch('html', function(value) {
//         if (!value) return;

//         var markup = $compile(value)(scope);
//         element.append(markup);
//       });
//     }
//   };
// });
//        
.directive('dynamic', function ($compile) {
  return {
    restrict: 'A',
    replace: false, // http://stackoverflow.com/questions/15285635/how-to-use-replace-of-directive-definition
    link: function (scope, ele, attrs) {
      scope.$watch(attrs.dynamic, function(html) {
        ele.html(html);
        $compile(ele.contents())(scope);
      });
    }
  };
});
        