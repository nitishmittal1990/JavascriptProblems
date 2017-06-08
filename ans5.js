var Embed = function(url) {
	this.url = url;
	var res= url.split("?v=");
	var videoid = res[1];
	this.embedUrl = function() {
		return '<iframe width="560" height="315" src="http//www.youtube.com/embed/' 
    + videoid + '" frameborder="0" allowfullscreen></iframe>'
	}
}

var url = new Embed('https://www.youtube.com/watch?v=HYMNRiwp3jQ');
console.log(url.embedUrl());