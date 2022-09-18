// data
teams = ["Braves", "Nationals","Phillies","Mets","Marlins","Cardinals","Cubs","Brewers","Reds","Pirates","Dodgers","Diamondbacks","Giants","Padres","Rockies",];
wins = [89,79,74,72,51,81,76,74,67,62,93,75,69,66,60];
losses = [55,63,68,70,91,62,66,68,77,81,52,68,74,76,84];

// determine most wins
var highestWins = 0;
var leader = 0;

for (var i=0; i<teams.length; i++){
    if(wins[i] >= highestWins){
        highestWins = wins[i];
        leader = i;
    }
}

console.log("The team with the most wins of " + highestWins + " is " + teams[leader]);

// bold highest number of wins
var boldLeadTeam = teams.indexOf();
var boldWins = wins.indexOf();

for (var i=0; i<teams.length; i++){
    if (boldLeadTeam = leader) {
        teams[boldLeadTeam] = "<strong>" + teams[leader] + "</strong>";
    }
    wins[leader] = "<strong>" + highestWins + "</strong>";
} 

// make table
var makeTable = "";

makeTable = "<table> <tr> <th> Teams </th> <th> Wins </th> <th> Losses </th> </tr>";

for (var i=0; i<teams.length; i++){
    makeTable += "<tr>" + "<td>" + teams[i] + "</td>" + "<td>" + wins[i] + "</td>" + "<td>" + losses[i] + "</td>" + "</tr>";
}

makeTable += "</table>";
document.getElementById('teams').innerHTML=makeTable;

