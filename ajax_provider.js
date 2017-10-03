$(function () {

    function getData(url) {
        console.log(3);

            let allData;

            function setData(receivedData) {
                allData = receivedData;
                console.log(5);

            }
        console.log(4);

            $.ajax({
                url: url,
                type: 'GET',
                headers: {'X-Auth-Token': 'c6792b4e19a94f48b560ef221aebb6d0'},
                success: (data => setData(data))

            });
        console.log(6);

        return allData;
    }
 console.log(1);
    const competitionsUrl = 'http://api.football-data.org/v1/competitions';
    const teamsUrl='http://api.football-data.org/v1/';
    console.log(2);

    const allCompetitions = getData(competitionsUrl);


    function getLeagueTable(leagueName) {
     let currLeague = allCompetitions.filter(x => x.league === leagueName);
     console.log(currLeague.leagueTable.href);
     return getData(currLeague.leagueTable.href);
     }

     function getTeamsFromCompetition(leagueName) {
     let currLeague = allCompetitions.filter(x => x.league === leagueName);
     return getData(currLeague.teams.href);
     }

     function getFixturesFromCompetition(leagueName) {
     let currLeague = allCompetitions.filter(x => x.league === leagueName);
     return getData(currLeague.fixtures.href);
     }

     function getAllTeams(competitionId) {

     return getData(competitionsUrl+'/'+competitionId+'/teams');
     }


});


