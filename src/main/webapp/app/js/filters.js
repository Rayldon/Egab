define([
	"angularAMD"
], function(angularAMD){
	angularAMD.filter('numerodecimal', function(){
		return function (number) {
			if (!number) { return ''; }
			var v = number;
			v=v.replace( /\D/g, ""); // permite digitar apenas numero
			var formattedNumber = v;
			return formattedNumber;
		};
	}).filter('numeroreal', function(){
		return function (number) {
			if (!number) { return ''; }
			var v = number;
			v=v.replace( /\D/g, ""); // permite digitar apenas numero
			v=v.replace(/(\d{1})(\d{1,2})$/,"$1.$2") // coloca virgula antes dos últimos 2 digitos
			var formattedNumber = v;
			return formattedNumber;
		};
	});
});