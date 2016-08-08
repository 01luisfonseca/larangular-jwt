(function(){
    'use strict';
    /**
    * @desc Crea el menú y lo expone
    * @example <div login-directive></div>
    **/
    angular.module('app.login', [])
    .directive('loginDirective',login);
 
    function login(){
        var directive = {
            link: link,
            templateUrl: '/public/app/login/login.directive.html',
            restrict: 'EA',
            controller: Controller,
            controllerAs: 'vm'
        };
        return directive;

        function link(scope, element, attrs) {
            /* */
        }
        
        function Controller($location, authService) {
            var vm = this;
            vm.login = login;
            vm.callbackLogin=callbackLogin;
            initController();
 
            function initController() {
                // reset login status
                authService.Logout();
            };
 
            function login() {
                vm.loading = true;
                authService.Login(vm.email, vm.password, vm.callbackLogin);
            }
            
            function callbackLogin(result) {
                if (result === true) {
                    $location.path('/');
                } else if(result === false){
                    vm.error = 'Usuario o contraseña incorrecta';
                    vm.loading = false;
                } else {
                    vm.error = 'Error en el servidor';
                    vm.loading = false;
                }
            }
        }
    }
    
})();