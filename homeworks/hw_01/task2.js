function factorial(n) {
	var result = 1;
	if ((factorial < 0)||(typeof n != 'number')){
		throw new Error("Invalid arguments");
	}
	for (var i = 1 ; i<=n ; i++){
		result *= i;
	}
	return result;
};