
var Formatno = function(number){

	this.number = number;
	var arrlen;
	var arr = [];
	this.convertNo = function(){
		if(typeof(number) != "number") {
			return "Please provide valid no.";
		}
		if(number.toString().length%3 == 0) {
			arrlen = number.toString().length/3;
		} else {
			arrlen = Math.floor(number.toString().length/3) + 1;
		}
		while(arrlen>0) {
			var temp = number%1000;
			number = (number-temp)/1000;
			arr.push(temp);
			arr.push(",");
			arrlen--;
		}
		arr = arr.reverse().slice(1);
		var formattedno = arr.reduce(function(total,msg){
			return total + msg;
		})
		return formattedno;
	}
}

var no = new Formatno('adsa12122121567');
var no1 = new Formatno(2121567);
console.log(no.convertNo());
console.log(no1.convertNo());