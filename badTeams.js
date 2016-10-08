function beginReadStandings(){
	var builder = require("./StandingsBuilder");
	builder.getStandings(onTeamStandingsReady, onStandingsError);
}

function onTeamStandingsReady(teams) {	
	var standings = groupStandingsByOwner(teams);
	sortByWinsDescending(standings);
	if (finalCallback != null) {
		finalCallback(standings);
	}
}

function onStandingsError(data) {
	if (errorHandler) {
		errorHandler(data);
	}
}

function groupStandingsByOwner(teams) {
	var standings = [];
	for (var c in config) {
		var ownerName = config[c].owner;
		var teamNames = config[c].teams;
		var ownerTeams = findTeamsByName(teams, teamNames);	
		sortByWinsDescending(ownerTeams);
		standings.push({"owner": ownerName, "teams": ownerTeams, "wins": sumWins(ownerTeams), "losses": sumLosses(ownerTeams)});
	}

	return standings;	
}

function sumWins(teams) {
	return teams.reduce(function(p, c) {
		return p + parseInt(c.wins);
	}, 0);
}

function sumLosses(teams) {
	return teams.reduce(function(p, c) {
		return p + parseInt(c.losses);
	}, 0);
}

function findTeamsByName(teams, teamNames) {
	var nameManager = require("./teamAlias");
	
	return teams.filter(function(t) {
		var name = nameManager.getTeamName(t.name);
		return teamNames.indexOf(name) > -1;
	});
}

function sortByWinsDescending(standings) {
	standings.sort(function(a, b) {
		if (a.wins == b.wins) {
			return 0;
		}
		else if (a.wins > b.wins) {
			return 1;
		}
		else {
			return -1;
		}
	});
}

function beginGetConfig() {
	var fs = require("fs");
	fs.readFile("config.json", "utf8", endGetConfig);
}

function endGetConfig(err, data) {
	if (err) {
		throw err;
	}
	config = JSON.parse(data);
	beginReadStandings();
}

var config = null;
var finalCallback = null;
var errorHandler = null;

module.exports = {
	beginGetStandings: function(onSuccess, onError) {
		finalCallback = onSuccess;
		errorHandler = onError;
		beginGetConfig();
	}
};