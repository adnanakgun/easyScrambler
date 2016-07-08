(function() {
	"use strict";
	angular.module('easyScrambler').directive('help', function () {
                
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            replace: true,
            templateUrl: 'app/directives/help/help.html',
            link: function ($scope) {
                
            }
        };
    });
})();