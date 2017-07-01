define([
	"angularAMD"
], function(angularAMD){
	angularAMD.directive('numerodecimal' , ['$filter' , function($filter){
		return {
			require: "ngModel",
			link: function(scope, element, attrs, modelCtrl) {
				modelCtrl.$parsers.push( function (inputValue) {
						if (inputValue == undefined) return "";
						var transformedInput = inputValue.replace(/[^0-9]+/g , '' );
						transformedInput = $filter('numerodecimal')(transformedInput)
						if (transformedInput!=inputValue){
								modelCtrl.$setViewValue(transformedInput);
								modelCtrl.$render();
						}
						return transformedInput;
				});
			}
		};
	}]).directive('numeroreal' , ['$filter' , function($filter){
		return {
			require: "ngModel",
			link: function(scope, element, attrs, modelCtrl) {
				modelCtrl.$parsers.push( function (inputValue) {
						if (inputValue == undefined) return "";
						var transformedInput = inputValue.replace(/[^0-9]+/g , '' );
						transformedInput = $filter('numeroreal')(transformedInput)
						if (transformedInput!=inputValue){
								modelCtrl.$setViewValue(transformedInput);
								modelCtrl.$render();
						}
						return transformedInput;
				});
			}
		};
	}]);
});