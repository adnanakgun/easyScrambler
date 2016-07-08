(function() {
	"use strict";
	angular.module('easyScrambler').directive('scramble', ['scrambleTool', function (scrambleTool) {
                
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            replace: true,
            templateUrl: 'app/directives/scramble/scramble.html',
            link: function ($scope) {

                $scope.encode = function(){
                    return scrambleTool.encode($scope.plainText, $scope.model);
                };
            }
        };
    }]);
})();