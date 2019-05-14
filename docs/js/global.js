
// calculate age
// http://stackoverflow.com/questions/4060004/calculate-age-in-javascript
function calcAge(dateString) {
	var birthday = +new Date(dateString);
	return ~~((Date.now() - birthday) / (31557600000));
}


