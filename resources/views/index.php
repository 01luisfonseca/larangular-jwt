<!doctype html>
<html>
    <head>
        <meta charset="utf-8">
        <title>Aplicación</title>
        <link rel="stylesheet" href="/public/node_modules/bootstrap/dist/css/bootstrap.min.css">
        
        <!-- Personal application Styles-->
        <link rel="stylesheet" href="/public/assets/css/menu.css">
    </head>
    <body ng-app="app">
        <nav><login-directive></login-directive></nav>
        <section class="container">
        	<div ui-view></div>
        </section>
    </body>

    <!-- Application Dependencies -->
    <script src="/public/node_modules/jquery/dist/jquery.min.js"></script>
    <script src="/public/node_modules/bootstrap/dist/js/bootstrap.min.js"></script>
    <script src="/public/node_modules/angular/angular.min.js"></script>
    <script src="/public/node_modules/angular-ui-router/release/angular-ui-router.min.js"></script>
    <script src="/public/node_modules/satellizer/dist/satellizer.min.js"></script>

    <!-- Application app modules-->
    <script src="/public/app/app.module.js"></script>
    <script src="/public/app/app.config.js"></script>
    <script src="/public/app/app.routes.js"></script>
    
    <!-- Application Scripts-->
    <script src="/public/app/login/login.directive.js"></script>

</html>