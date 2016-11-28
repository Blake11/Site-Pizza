var app;
(function (app_1) {
    app_1.moduleName = "app";
    var app = angular.module(app_1.moduleName, ['ngRoute']);
    app.run(['$route', function ($route) {
        }]);
    app.run(function ($window) {
        var back = $window.history.back;
        $window.history.back = function () {
            setTimeout(function () {
                back.call($window.history);
            }, 100);
        };
    });
    var Index = (function () {
        function Index() {
        }
        return Index;
    }());
    angular.module(app_1.moduleName).controller("Index", Index);
})(app || (app = {}));
var app;
(function (app_2) {
    var app = angular.module(app_2.moduleName);
    app.constant('routes', getRoutes());
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {
        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/home' });
    }
    function getRoutes() {
        return [
            {
                url: '/home',
                config: {
                    controller: "Home", controllerAs: 'vm',
                    templateUrl: 'pages/home/home.html',
                    icon: "fa-home",
                    title: "",
                    roles: [0]
                }
            }
        ];
    }
})(app || (app = {}));
var app;
(function (app) {
    var Home = (function () {
        function Home() {
        }
        return Home;
    }());
    angular.module(app.moduleName).controller("Home", Home);
})(app || (app = {}));
//# sourceMappingURL=app.js.map