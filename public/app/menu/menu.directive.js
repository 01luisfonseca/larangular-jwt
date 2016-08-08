(function(){
    'use strict';
    /**
    * @desc Crea el menú y lo expone
    * @example <div login-directive></div>
    **/
    angular.module('app.menu', [])
    .directive('menuDirective',menu);
    
    function menu(){
        var directive = {
            link: link,
            templateUrl: '/public/app/menu/menu.directive.html',
            restrict: 'EA',
            controller: Controller,
            controllerAs: 'vm'
        };
        return directive;

        function link(scope, element, attrs) {
            /* */
        }
        
        function Controller(authService){
            var vm=this;
            vm.logout=logout;
            
            function logout(){
                authService.Logout;
            }
        }
    }
})();