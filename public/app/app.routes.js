(function(){
    angular.module('app')
    .config(config)
    .run(run);
    
    function config($stateProvider, $urlRouterProvider) {
        // default route
        $urlRouterProvider.otherwise("/");
 
        // app routes
        $stateProvider
            .state('index', {
                url: '/',
                views: {
                    'menu':{templateUrl: '/public/app/app-routes-templates/menu.tpl.html'},
                    'body':{templateUrl: '/public/app/app-routes-templates/index.tpl.html'}
                }
            })
            .state('login', {
                url: '/login',
                views: {
                    'menu':{template: '<div></div>'},
                    'body':{templateUrl: '/public/app/app-routes-templates/login.tpl.html'}
                }
            })
            .state('usuarios', {
                url: '/usuarios',
                views: {
                    'menu':{templateUrl: '/public/app/app-routes-templates/menu.tpl.html'},
                    'body':{templateUrl: '/public/app/app-routes-templates/usuarios.tpl.html'}
                }
            });
    }
 
    function run($rootScope, $http, $location, $localStorage) {
        // keep user logged in after page refresh
        if ($localStorage.currentUser) {
            $http.defaults.headers.common.Authorization = 'Bearer ' + $localStorage.currentUser.token;
        }
 
        // redirect to login page if not logged in and trying to access a restricted page
        $rootScope.$on('$locationChangeStart', function (event, next, current) {
            var publicPages = ['/login'];
            var restrictedPage = publicPages.indexOf($location.path()) === -1;
            if (restrictedPage && !$localStorage.currentUser) {
                $location.path('/login');
            }
        });
    }
})()