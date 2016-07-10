(function() {
	"use strict";
	angular.module('easyScrambler').directive('help', ['navTool', function (navTool) {
                
        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            replace: true,
            templateUrl: 'app/directives/help/help.html',
            link: function ($scope) {
                
                $scope.isSelected = function(section){
                    return navTool.isSelectedSection($scope.model.selectedSection, section); 
                };
            }
        };
    }]);
})();