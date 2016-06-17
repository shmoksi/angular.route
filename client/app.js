var angular = require('angular');
var dashboard = require('./dashboard');

module.exports = angular.module('tanks', [
    require('angular-route'),
    dashboard.name
]).config(RouteConfig);

RouteConfig.$inject = ['$routeProvider'];
function RouteConfig($routeProvider) {
    $routeProvider.otherwise({ redirectTo: '/' });
}