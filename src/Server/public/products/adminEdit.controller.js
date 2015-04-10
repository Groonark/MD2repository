(function(){
	"use strict";

		angular
		.module("Main.adminEdit", [])
		.controller("adminEditController", adminEditController);


		function adminEditController ($scope, productsService, $routeParams){

			$scope.updateProduct = function(id){
				var product = this.product;
				productsService.updateProduct(id, product);
			}

			$scope.deleteProduct = function(id){
				var product = this.product;
				productsService.deleteProduct(id, product);
			}

			var modelProduct = function(product){
				$scope.product = product;
			}

			productsService.getProduct($routeParams.id)
			.then(modelProduct);

		}



})();