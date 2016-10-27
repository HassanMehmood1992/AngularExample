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
});
        