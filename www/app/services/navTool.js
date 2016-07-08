(function () {
    "use strict";
    angular.module('easyScrambler').factory('navTool', function () {        

		return {
            isSelectedSection: function(userAction, section){
                console.log(userAction, section);
                return userAction === section;
            }
		}

    });
})();