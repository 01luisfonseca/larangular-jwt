(function(){
    'use strict';
    /**
    * @desc Crea el menú y lo expone
    * @example <div login-directive></div>
    **/
    angular.module('app.usuarios', [])
    .directive('usuariosDirective',directiva);
    
    function directiva(){
        var directive = {
            link: link,
            templateUrl: '/public/app/usuarios/usuarios.directive.html',
            restrict: 'EA',
            controller: Controller,
            controllerAs: 'vm'
        };
        return directive;

        function link(scope, element, attrs) {
            /* */
        }
        
        function Controller(UsersService){
            var vm=this;
            vm.Usuarios=[];
            vm.allUsers=UsersService.allUsers(todos);
            
            function todos(datos){
                vm.Usuarios=datos;
            }
        }
    }
})();