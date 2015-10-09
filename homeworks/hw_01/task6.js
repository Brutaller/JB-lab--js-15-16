PhoneList = function(name){
	var list = {};
	function add(name,num){
		list[name] = num;
	}
	add.getAll = function(){return list};
	add.phoneListName = name;
	add.getForName = function(name){return list[name]};
	add.getForNum = function(num){
		for (var i in list){
			if (list[i] == num) return i;
		}
	};
	return add;
};