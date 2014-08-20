var mainModule = angular.module('progit', ['ngAnimate', 'mgcrea.ngStrap', 'ngProgress']);

mainModule
    .config(function($locationProvider) {
        $locationProvider.hashPrefix('!');
    })
    .run(function ($rootScope) {
        $rootScope.navigation = {
            contents: [],
            languages: [
                { text: 'English', href: '#' },
                { text: '简体中文', href: '#' },
                { text: '正體中文', href: '#' }
            ],
            about: {}
        } ;
    });