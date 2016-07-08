(function() {
	"use strict";
	angular.module('easyScrambler').directive('descramble', ['scrambleTool', function (scrambleTool) {
                
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            replace: true,
            templateUrl: 'app/directives/descramble/descramble.html',
            link: function ($scope) {
                
                $scope.decode = function(){
                    return scrambleTool.decode($scope.encodedText, $scope.model);
                };
            }
        };
    }]);
})();