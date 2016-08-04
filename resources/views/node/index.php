<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Sistema de Facturas</title>
        <link rel="stylesheet" href="/public/js/node_modules/bootstrap/dist/css/bootstrap.css">
    </head>
    <body ng-App="app">

        <div class="container">
        	<div ui-view></div>
        </div>        
     
    </body>

    <!-- Application Dependencies -->
    <script src="/public/js/node_modules/angular/angular.js"></script>
    <script src="/public/js/node_modules/ngstorage/ngstorage.min.js"></script>
    <script src="/public/js/node_modules/angular-route/angular-route.min.js"></script>
    <script src="/public/js/node_modules/angular-ui-router/release/angular-ui-router.js"></script>
    <script src="/public/js/node_modules/satellizer/satellizer.js"></script>

    <!-- Application Scripts -->
    
    <script src="/public/js/scripts/app.js"></script>
</html>