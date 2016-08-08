(function () {
    'use strict';
 
    angular
        .module('app.core')
        .factory('UsersService', Service);
 
    function Service($http) {
        var service = {};
        service.urlUsers='/usuarios';
        service.todos = todos;
        service.callback=undefined;
 
        return service;
 
        function allUsers(callback) {
            service.callback=callback;
            $http.get(service.urlUsers+'/todos')
                .then(serverOK,serverError);
        }
        
        function serverOK(response){
            console.log(response);
            if (response.data.length) {
                service.callback(response.data);
            } else {
                service.callback(false);
            }
        }
        
        function serverError(response){
            service.callback('Error: '+response.data)
        }
    }
})();