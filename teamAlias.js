var aliases = {
	"New England Patriots":  "NWE",
	"New York Jets":         "NYJ",
	"Buffalo Bills":         "BUF",
	"Miami Dolphins":        "MIA",
	"Baltimore Ravens":      "BAL",
	"Pittsburgh Steelers":   "PIT",
	"Cincinnati Bengals":    "CIN",
	"Cleveland Browns":      "CLE",
	"Houston Texans":        "HOU",
	"Tennessee Titans":      "TEN",
	"Indianapolis Colts":    "IND",
	"Jacksonville Jaguars":  "JAX",
	"Denver Broncos":        "DEN",
	"Kansas City Chiefs":    "KAN",
	"San Diego Chargers":    "SDG",
	"Oakland Raiders":       "OAK",
	"Philadelphia Eagles":   "PHI",
	"New York Giants":       "NYG",
	"Dallas Cowboys":        "DAL",
	"Washington Redskins":   "WAS",
	"Minnesota Vikings":     "MIN",
	"Green Bay Packers":     "GNB",
	"Detroit Lions":         "DET",
	"Chicago Bears":         "CHI",
	"Tampa Bay Buccaneers":  "TAM",
	"Carolina Panthers":     "CAR",
	"Atlanta Falcons":       "ATL",
	"New Orleans Saints":    "NOR",
	"San Francisco 49ers":   "SFO",
	"Seattle Seahawks":      "SEA",
	"Los Angeles Rams":      "LAR",
	"Arizona Cardinals":     "ARI"		
};

var fullNames = {
	"NWE":  "New England Patriots",  
	"NYJ":	"New York Jets",         
	"BUF":	"Buffalo Bills",         
	"MIA":	"Miami Dolphins",        
	"BAL":	"Baltimore Ravens",      
	"PIT":	"Pittsburgh Steelers",   
	"CIN":	"Cincinnati Bengals",    
	"CLE":	"Cleveland Browns",      
	"HOU":	"Houston Texans",        
	"TEN":	"Tennessee Titans",      
	"IND":	"Indianapolis Colts",    
	"JAX":	"Jacksonville Jaguars",  
	"DEN":	"Denver Broncos",        
	"KAN":	"Kansas City Chiefs",    
	"SDG":	"San Diego Chargers",    
	"OAK":	"Oakland Raiders",       
	"PHI":	"Philadelphia Eagles",   
	"NYG":	"New York Giants",       
	"DAL":	"Dallas Cowboys",        
	"WAS":	"Washington Redskins",   
	"MIN":	"Minnesota Vikings",     
	"GNB":	"Green Bay Packers",     
	"DET":	"Detroit Lions",         
	"CHI":	"Chicago Bears",         
	"TAM":	"Tampa Bay Buccaneers",  
	"CAR":	"Carolina Panthers",     
	"ATL":	"Atlanta Falcons",       
	"NOR":	"New Orleans Saints",    
	"SFO":	"San Francisco 49ers",   
	"SEA":	"Seattle Seahawks",      
	"LAR":	"Los Angeles Rams",      
	"ARI":	"Arizona Cardinals"
};
	
module.exports = {

	
	getTeamAlias: function(teamName) {
		return aliases[teamName];
	
	},	
	getTeamName: function(alias) {
		return fullNames[alias];
	}
};