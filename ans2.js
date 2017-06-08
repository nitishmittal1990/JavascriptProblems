var Exchangecurrency = function(cur1,cur2) {
	var currencylist = {
		"INR" : {
			"USD": 0.016,
			"EUR": 0.014,
			"GBP": 0.012
		},
		"USD": {
			"INR": 64.37,
			"EUR": 0.89,
			"GBP": 0.77
		},
		"EUR": {
			"USD": 1.12,
			"INR": 72.28,
			"GBP": 0.87	
		},
		"GBP": {
			"USD": 1.29,
			"EUR": 1.15,
			"INR": 83.19		
		}
	}

	this.fromcur = cur1;
	this.tocur = cur2;
	var arr = this.fromcur.split(" ");
	var amount = Number(arr[0]);
	this.convertCurrency = function(){
		for(key in currencylist) {
			if (key == arr[1]) {
				var obj = currencylist[key];
				for(rate in obj) {
					if(rate == this.tocur){
						return amount * obj[rate];
					}
				}
			}
		}
	}
}

var exh1 = new Exchangecurrency("50 GBP","INR");
var exh2 = new Exchangecurrency("50 INR","GBP");

console.log(exh1.convertCurrency());
console.log(exh2.convertCurrency());
