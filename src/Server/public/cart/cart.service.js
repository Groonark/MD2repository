(function(){
	"use strict";

	var cartService = function($http, $rootScope)
	{
		var addProductToCart = function(product, quantity)
		{
			$rootScope.cartProducts[product.id] = {
				product: product,
				quantity: quantity
			}
			console.log($rootScope.cartProducts);
		}

		var delProd = function(item){
			delete $rootScope.cartProducts[item.product.id];

		}

		var calPrice = function()
		{
			var cartAmount = 0;
			var cartTotal = 0;

			angular.forEach($rootScope.cart, function(cartItem){
					cartTotal += cartItem.amount * cartItem["product"]["prodPrice"];
				});
		}

		return {
			addProductToCart: addProductToCart,
			delProd: delProd,
			calPrice: calPrice
		}
	}

	angular
		.module("Main")
		.factory("cartService", cartService);

}());