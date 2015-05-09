(function(){
	angular.module("eggHead", ["ui.router"])
	.config(function config($stateProvider, $urlRouterProvider){
		$stateProvider.state("index", {
			url:"",
			templateUrl: "templates/First.html",
			controller: "FirstController as first"
		});

		$urlRouterProvider.otherwise("index");
	})
	.controller("FirstController", function FirstController(){
		var first = this;
		first.greeting = "Angular";
	});
})();

// config(function config($stateProvider){
	// 	$stateProvider.state("", {
	// 		url:"",
	// 		templateUrl: "templates/First.html",
	// 		controller: "FirstController as first"
	// 	});
	// })