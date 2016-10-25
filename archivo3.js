function foo(){
	var bar
	quux = 1
	console.log(quux)
	function zip(){
		var quux =2
	console.log(quux)
	}
	zip()
}

foo()