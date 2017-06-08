
var Epochdate = function (epoch) {
	this.epoch = epoch;
	var unixEpoch = Math.round(epoch*1000);
	var date, month, year, hour, min, localdate, timestring;
	this.converttoDate = function(){
		var date1 = new Date(unixEpoch);
		date = date1.getDate();
		month = date1.getMonth()+1;
		year = date1.getFullYear();
		hour = date1.getHours()%12;
		if(hour.toString().length == 1) {
			hour = "0"+hour;
		}
		var temp = date1.getHours();
		if(temp>11) {
			timestring = "PM";
		} else {
			timestring = "AM";
		}
		min = date1.getMinutes();
		if(min.toString().length == 1) {
			min = "0" + min;
		}
		localdate = date + "/" + month + "/" + year + " " + hour + ":" + min + timestring;
		return localdate;
	}
}

var convertdate1 = new Epochdate(1496120012);


console.log(convertdate1.converttoDate());