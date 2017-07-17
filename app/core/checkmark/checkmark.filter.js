/**
* core Module
*
* Description
*/
angular.module('core').
	filter('checkmark',function () {
		// body...
		return function(){
			return input? '\u2713':'\u2718';
		};
		
	})