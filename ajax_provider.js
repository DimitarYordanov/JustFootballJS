$(function () {
    const competitionsUrl = 'http://api.football-data.org/v1/competitions';


    function visualizeLeagueLogos(callback, leagueName) {

        function firstPromise() {
            let getCompetitions = new Promise((resolve, reject) => {
                $.ajax({
                    url: competitionsUrl,
                    type: 'GET',
                    headers: {'X-Auth-Token': 'c6792b4e19a94f48b560ef221aebb6d0'},
                    success: (data => resolve(data))
                });
            });
            return getCompetitions.then(filterByName);
        }


        function filterByName(data) {
            let teamsLink;

            for (let competition of data) {

                if (competition.league === leagueName) {
                    teamsLink = competition._links.teams.href;
                    console.log(teamsLink);
                }

            }
            return teamsLink;
        }

        function getLogos(data) {
            let arr = [];
            for (let club of data.teams) {
                arr.push(club.crestUrl);
            }
            return arr;
        }


        function secondPromise(teamsLink) {
            let getTeams = new Promise((resolve, reject) => {
                $.ajax({
                    url: teamsLink,
                    type: 'GET',
                    headers: {'X-Auth-Token': 'c6792b4e19a94f48b560ef221aebb6d0'},
                    success: (data => resolve(data))
                });
            });
             getTeams.then(getLogos).then(callback);
        }
        firstPromise().then(secondPromise);
    }

    function visualizeLeagueTeam(callback,teamName,leagueName) {
        function firstPromise() {
            let getCompetitions = new Promise((resolve, reject) => {
                $.ajax({
                    url: competitionsUrl,
                    type: 'GET',
                    headers: {'X-Auth-Token': 'c6792b4e19a94f48b560ef221aebb6d0'},
                    success: (data => resolve(data))
                });
            });
            return getCompetitions.then(filterByName);
        }


        function filterByName(data) {


            for (let competition of data) {

                if (competition.league === leagueName) {
                    return competition._links.teams.href;
                }

            }
        }

        function getTeam(data) {

            for (let club of data.teams ) {
                if(club.code===teamName){
                    return club;
                }
            }
        }


        function secondPromise(teamsLink) {
            let getTeams = new Promise((resolve, reject) => {
                $.ajax({
                    url: teamsLink,
                    type: 'GET',
                    headers: {'X-Auth-Token': 'c6792b4e19a94f48b560ef221aebb6d0'},
                    success: (data => resolve(data))
                });
            });
            getTeams.then(getTeam).then(callback);
        }
        firstPromise().then(secondPromise);
    }

    //visualizeLeagueLogos(console.log, 'PL');
    //visualizeLeagueTeam(console.log,'MUFC','PL');
});


