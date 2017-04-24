var myApp = angular.module("myApp", []);
		myApp.controller("RegisterCtrl", function ($scope) {
			$scope.passValidation = false;
			$scope.changepassword = function()
			{
			var regexp = /^(?=.*[0-9])(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9!@#$%^&*]{8,13}$/;
			if(regexp.test($scope.password) == false)
			{
				$scope.passValidation = false;
			}else{
				$scope.passValidation = true;
			}
			};
			}),
		myApp.controller("test1", function($scope){
			$scope.panValidation = false;
			$scope.changepan = function()
			{
			var regexp =  /^([A-Z]){5}([0-9]){4}([A-Z]){1}?$/;
			if(regexp.test($scope.pan) == false)
			{
				$scope.panValidation = false;
			}else{
				$scope.panValidation = true;
			}
			};
			});;	
		
