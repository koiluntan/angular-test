'use strict';

// Declare app level module which depends on views, and components
var myApp = angular.module('myApp', [
  'ngRoute',
  'myApp.view1',
  'myApp.view2',
  'myApp.version'
]).
config(['$routeProvider', function($routeProvider) {
  $routeProvider.otherwise({redirectTo: '/view1'});
}]);


function getData($timeout, $q) {
  return function() {
    var defer = $q.defer()

    // simulated async function
    $timeout(function() {
      defer.resolve('data received!')
    }, 2000)

    return defer.promise
  }
};


myApp.factory('getData', getData);



myApp.run(function(getData) {
  var promise = getData()
  .then(function(string) {
  console.log(string)
})
});
