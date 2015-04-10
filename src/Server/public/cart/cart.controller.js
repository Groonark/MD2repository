(function(){
	"use strict";

	angular
		.module("Main.cart", [])
		.controller("cartController", cartController);

	function cartController($scope, cartService){

		$scope.delProd = function(item){
			
			cartService.delProd(item);

		}

		$scope.check = function(order)
		{
			console.log(order);
		}
	}

}());