(function(){
	angular.module("eggHead", [])
	.controller("FirstController", function FirstController(){
		var first = this;
		first.greeting = "Angular";
	});
})();