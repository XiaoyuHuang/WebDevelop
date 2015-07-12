var keys = document.querySelectorAll('#calculator span');
var ops = ['+', '-', '×', '÷']

for(var i = 0; i < keys.length; i++) {
	keys[i].onclick = function(e) {
		var outPut = document.querySelector('.screen');
		var outPutVal = outPut.innerHTML;
		var btnVal = this.innerHTML;
		if(btnVal == 'C') {
			outPut.innerHTML = '';
		} 
		else if(btnVal == '='){
			var eq = outPutVal;
			eq = eq.replace(/×/g, '*').replace(/÷/g, '/');
			if(eq)
				outPut.innerHTML = eval(eq);
		}
		else if(btnVal == '±'){
			var eq = outPutVal;
			var firstCharOfEq = eq[0];
			if(firstCharOfEq == '-') {
				eq = eq.replace(/-/g, '');
				outPut.innerHTML = eq;
			} else{
				outPut.innerHTML = '-' + outPut.innerHTML;
			}
		}
		else if(ops.indexOf(btnVal)>-1){
			var eq = outPutVal;
			var lastCharOfEq = eq[eq.length - 1];
			if(eq != '' && ops.indexOf(lastCharOfEq) == -1)
				outPut.innerHTML += btnVal;
		}
		else{
			outPut.innerHTML += btnVal;
		}
		e.preventDefault();
	}
}