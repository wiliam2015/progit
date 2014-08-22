var mainModule = angular.module('progit', ['ngAnimate', 'mgcrea.ngStrap', 'ngProgress']);

mainModule
    .config(function($locationProvider) {
        $locationProvider.hashPrefix('!');
    })
    .run(function ($rootScope) {

    });