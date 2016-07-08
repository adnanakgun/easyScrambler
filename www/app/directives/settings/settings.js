(function() {
	"use strict";
	angular.module('easyScrambler').directive('settings', ['scrambleTool', function (scrambleTool) {

        return {
            restrict: 'E',
            scope: {
                model: '='
            },
            replace: true,
            templateUrl: 'app/directives/settings/settings.html',
            link: function ($scope) {

                $scope.selectedAlphabet = $scope.model.userSettings.selectedAlphabet;
                $scope.keyText = $scope.model.userSettings.keyText;

                $scope.setDefaults = function(){
                    $scope.keyText = 'The Quick Brown Fox Jumps Over The Lazy Dog';
                    $scope.selectedAlphabet = $scope.model.alphabetData[0];
                    $scope.changeUserSettings();
                }

                $scope.changeUserSettings = function(){
                    $scope.model.userSettings.selectedAlphabet = $scope.selectedAlphabet;
                    $scope.model.userSettings.keyText = $scope.keyText;
                    $scope.model.scrambleSettings = scrambleTool.getScrambleSettings($scope.model.userSettings.keyText, $scope.model.userSettings.selectedAlphabet.array);
                    window.localStorage.setItem('keyText', $scope.keyText);
                    window.localStorage.setItem('alphabetIndex', $scope.model.alphabetData.indexOf($scope.selectedAlphabet));
                }

            }
        };
    }]);
})();