(function () {
    'use strict';
 
    angular
        .module('app.core')
        .factory('authService', Service);
 
    function Service($http, $localStorage) {
        var service = {};
        service.urlAuth='/api/authenticate';
        service.Login = Login;
        service.Logout = Logout;
        service.callback=undefined;
 
        return service;
 
        function Login(username, password, callback) {
            service.callback=callback;
            $http.post(service.urlAuth, { email: username, password: password })
                .then(serverOK,serverError);
        }
        
        function Logout() {
            // remove user from local storage and clear http auth header
            delete $localStorage.currentUser;
            $http.defaults.headers.common.Authorization = '';
        }
        
        function serverOK(response){
            // login successful if there's a token in the response
            if (response.data.token) {
            // store username and token in local storage to keep user logged in between page refreshes
                $localStorage.currentUser = { 
                    username: response.data.name, 
                    email: response.data.email, 
                    id: response.data.id, 
                    token: response.data.token 
                };
                // add jwt token to auth header for all requests made by the $http service
                $http.defaults.headers.common.Authorization = 'Bearer ' + response.data.token;
               // execute callback with true to indicate successful login
                service.callback(true);
            } else {
                // execute callback with false to indicate failed login
                service.callback(false);
            }
        }
        
        function serverError(response){
            service.callback('Error: '+response.data)
        }
    }
})();