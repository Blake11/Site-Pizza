declare var angular: any;

module app {

    export var moduleName = "app";
    var app = angular.module(moduleName, ['ngRoute']);

    app.run(['$route', function ($route) {
    }]);

    app.run(($window) => {
        var back = $window.history.back;
        $window.history.back = function () {
            setTimeout(() => {
                back.call($window.history);
            }, 100);
        }
    });

    class Index {
        constructor() {
                
        }
    }

    angular.module(moduleName).controller("Index", Index);

}