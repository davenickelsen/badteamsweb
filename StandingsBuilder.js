var teams = [];
var onDataReceived = null;

function addToTeams(result) {
	var count = result.names.length;
	for (var i = 0; i < count; i++) {
		var team = {
			"name": result.names[i],
			"wins": result.wins[i],
			"losses": result.losses[i]
		};
		teams.push(team);
	}
	if (teams.length == 32 && onDataReceived) {
		onDataReceived(teams);
	}
};

	
module.exports = {
	getStandings: function(onSuccess, onError) {
		onDataReceived = onSuccess;
		teams = [];
		var resultFormat = {
			"names": ["tbody > tr > th > a"],
			"wins": ["tbody > tr > td[@data-stat='wins']"],
			"losses": ["tbody > tr > td[@data-stat='losses']"]
		};
		
		var osmosis = require("osmosis");
		osmosis.get('http://www.pro-football-reference.com/')
		//.config("proxy", "http://proxy.proxysherwin.com")
		.find("#all_AFC")
		.set(resultFormat)
		.data(addToTeams)
		//.log(console.log)
		.error(onError);
		//.debug(console.log);
		
		osmosis = require("osmosis");
		osmosis.get('http://www.pro-football-reference.com/')
		//.config("proxy", "http://proxy.proxysherwin.com")
		.find("#all_NFC")
		.set(resultFormat)
		.data(addToTeams)
		//.log(console.log)
		.error(onError);
		//.debug(console.log);
	} 
};