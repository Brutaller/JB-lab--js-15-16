function pow(a,b) {
	var result = a;
	if ((b < 0)||(typeof a != 'number') || (typeof b != 'number')){
		throw new Error("Invalid arguments");
	}
	if (b == 0){
		result = 1;
	}
	for (var i = 2 ; i <= b ; i++){
		result *= a;
	}
	return result;
};