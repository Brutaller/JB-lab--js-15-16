function repeat(str, count, sep){
	var result = '';
	if (typeof count != 'number'){
		throw new Error("Invalid arguments");
	}
	if (sep != undefined){
		str += sep;
	}
	for (var i = 0 ; i < count ; i++){
		result += str;
	}
	return result;
};