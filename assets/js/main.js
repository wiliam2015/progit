var mainModule = angular.module('progit', [
    'ngRoute',
    'ngAnimate',
    'ngSanitize',
    'ngProgress'
]);

mainModule
    .config(function($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider
            .when('/', {
                templateUrl: function (params) {
                    var lang = params.lang || 'zh';
                    return 'html/' + lang + '/index.html';
                }
            })
            .when('/html/:lang/:chapter', {
                templateUrl: function (params) {
                    return 'html/' + params.lang + '/' + params.chapter;
                }
            })
            .when('/about', {
                templateUrl: 'html/about.html'
            })
            .otherwise({
                redirectTo: '/'
            })
    })
    .run(function ($rootScope, ngProgress) {
        $rootScope.$on('$routeChangeStart', function () {
            ngProgress.color('#00aeef');
            ngProgress.height('3px');
            ngProgress.reset();
            ngProgress.start();
        });

        $rootScope.$on('$routeChangeSuccess', function () {
            ngProgress.complete();
        });
    });