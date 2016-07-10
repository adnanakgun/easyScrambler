(function() {
	"use strict";
	var easyScramblerApp = angular.module('easyScrambler', ['ngclipboard']);
	var app = {
		// Application Constructor
		initialize: function() {
			this.bindEvents();
		},
		bindEvents: function() {
			document.addEventListener('deviceready', this.onDeviceReady, false);
		},
		onDeviceReady: function() {
			app.receivedEvent('deviceready');
		}
	};
})();