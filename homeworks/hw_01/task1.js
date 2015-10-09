function multiply() {
	var result = 1;
	if (arguments.length<2){
		throw new Error("Invalid arguments")
	}
	for (var i = 0 ; i < arguments.length ; i++){
		if (typeof arguments[i] != 'number'){
			throw new Error("Invalid arguments");
		}else{
			result = result * arguments[i];
		}
	}
	return result;
};