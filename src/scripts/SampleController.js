(function(){
	function SampleController($scope){
		$scope.name = "Angularjs";
	}
	angular.module("myApp")
	.controller("SampleController", SampleController);
	SampleController.$inject = ["$scope"]
})();