(function(){
    /**
    * @desc Crea el menú y lo expone
    * @example <div acme-order-calendar-range></div>
    **/
    angular.module('app.login', [])
    .directive('loginDirective',login);
    
    function login(){
        var directive = {
            link: link,
            templateUrl: '/public/app/login/login.directive.html',
            restrict: 'EA'
        };
        return directive;

        function link(scope, element, attrs) {
            /* */
        }
    }
})()