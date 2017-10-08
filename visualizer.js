const visualizerModule = function () {

    function printTable(data) {

        $('#teamInfo').empty();

        let wrapper = $('<div class="wrapper"></div>');
        let attributes = $('<div class="attributes"></div>');

        attributes.append('<div class="rank">Standing</div>');
        attributes.append('<div class="logo"></div>');
        attributes.append('<div class="teams">Teams</div>');
        attributes.append(' <div class="mp"> Matches Played</div>');
        attributes.append('<div class="wins">Wins</div>');
        attributes.append('<div class="draws">Draws</div>');
        attributes.append('<div class="losses">Losses</div>');
        attributes.append('<div class="gf">GF</div>');
        attributes.append('<div class="ga">GA</div>');
        attributes.append('<div class="gd">GD</div>');
        attributes.append('<div class="points">PTS</div>');
        let wrapperWithAttr = wrapper.append(attributes);

        for (let rank of data.standing) {


            let singleTeam = $('<div class="single-team">');

            let position = $('<span class="rank"></span>');
            position.append(`${rank.position}`);
            singleTeam.append(position);

            let logo = $('<img class="logo"></img>').attr('src', rank.crestURI);
            singleTeam.append(logo);

            let names = $(' <span class="teams"></span>');
            names.append(`${rank.teamName}`);
            singleTeam.append(names);

            let playedMatches = $('<span class="mp"></span>');
            playedMatches.append(`${rank.playedGames}`);
            singleTeam.append(playedMatches);

            let wins = $('<span class="wins"></span>');
            wins.append(`${rank.wins}`);
            singleTeam.append(wins);

            let draws = $('<span class="draws"></span>');
            draws.append(`${rank.draws}`);
            singleTeam.append(draws);

            let losses = $('<span class="losses"></span>');
            losses.append(`${rank.losses}`);
            singleTeam.append(losses);

            let goalsFor = $('<span class="gf"></span>');
            goalsFor.append(`${rank.goals}`);
            singleTeam.append(goalsFor);

            let goalsAgainst = $('<span class="ga"></span>');
            goalsAgainst.append(`${rank.goalsAgainst}`);
            singleTeam.append(goalsAgainst);

            let goalDiff = $('<span class="gd"></span>');
            goalDiff.append(`${rank.goalDifference}`);
            singleTeam.append(goalDiff);

            let points = $('<span class="points"></span>');
            points.append(`${rank.points}`);
            singleTeam.append(points);


            wrapperWithAttr.append(singleTeam);
        }
        $('#teamInfo').append(wrapperWithAttr);
    }

    function printFixture(data) {

        $('#teamInfo').empty();
        let wrapper = $('<div class="fixtures-wrapper"></div>');
        let attributes = $('<div class="fixtures-attributes"></div>');

        attributes.append('<div class="fixtures-home-team">Home Team</div>');
        attributes.append('<div class="fixtures-guest-team">Guest Team</div>');
        attributes.append('<div class="fixtures-home-team-result"></div>');
        attributes.append('<div class="fixtures-guest-team-result"></div>');
        attributes.append('<div class="fixtures-date">Date</div>');
        let wrapperWithAttr = wrapper.append(attributes);

        for (let fixture of data.fixtures) {
            let singleFixture = $('<div class="single-fixture">');

            let firstSpan = $('<span class="fixtures-home-team"></span>');
            firstSpan.append(`${fixture.homeTeamName}`);
            singleFixture.append(firstSpan);

            let secondSpan = $(' <span class="fixtures-guest-team"></span>');
            secondSpan.append(`${fixture.awayTeamName}`);
            singleFixture.append(secondSpan);

            let thirdSpan = $('<span class="fixtures-home-team-result"></span>');
            thirdSpan.append(`${fixture.result.goalsHomeTeam}`);
            singleFixture.append(thirdSpan);

            let fourthSpan = $('<span class="fixtures-guest-team-result"></span>');
            fourthSpan.append(`${fixture.result.goalsAwayTeam}`);
            singleFixture.append(fourthSpan);

            let currDate = new Date(fixture.date);
            let fifthSpan = $('<span class="fixtures-date"></span>');
            fifthSpan.append(currDate.toDateString());
            singleFixture.append(fifthSpan);
            wrapperWithAttr.append(singleFixture);
        }
        $('#teamInfo').append(wrapperWithAttr);
    }

    function printPlayers(data) {

        $('#teamInfo').empty();

        let wrapper = $('<div class="player-wrapper"></div>');
        let attributes = $('<div class="player-attributes"></div>');


        attributes.append('<div class="player-name">Player Name</div>');
        attributes.append('<div class="nationality">Nationality</div>');
        attributes.append('<div class="position">Position</div>');
        attributes.append('<div class="jersey-number">Jersey Number</div>');
        attributes.append('<div class="contract-end">Contract End Date</div>');
        attributes.append('<div class="market-value">Jersey Number</div>');
        let wrapperWithAttr = wrapper.append(attributes);

        for (let player of data.players) {
            let singlePlayer = $('<div class="single-player"></div>');

            let playerName = $('<span class="player-name"></span>');
            playerName.append(`${player.name}`);
            singlePlayer.append(playerName);

            let nationality = $('<span class="nationality"></span>');
            nationality.append(`${player.nationality}`);
            singlePlayer.append(nationality);

            let position = $('<span class="position"></span>');
            position.append(`${player.position}`);
            singlePlayer.append(position);

            let jerseyNumber = $('<span class="jersey-number"></span>');
            jerseyNumber.append(`${player.jerseyNumber}`);
            singlePlayer.append(jerseyNumber);

            let contractEnd = $('<span class="contract-end"></span>');
            contractEnd.append(`${player.contractUntil}`);
            singlePlayer.append(contractEnd);

            let marketValue = $('<span class="market-value"></span>');
            marketValue.append(`${player.marketValue}`);
            singlePlayer.append(marketValue);

            wrapperWithAttr.append(singlePlayer);
        }
        $('#teamInfo').append(wrapperWithAttr);
    }

    function currentTeam(team) {
        let wrapper = $('<div class="fav-team"></div>');

        $('.bigLogo').empty();
        let url = `images/${team}.png`;

        if(team==='ManU'){
            team='Manchester United';
        }
        let teamName = $('<span class="team-big-name"></span>').append(team);

        let paragraph = $('<p></p>');
        let image = $('<img class="favTeamLogo"></img>').attr('src', url);
        paragraph.append(image);
        paragraph.append(teamName);

        wrapper.append(paragraph);
        $('.bigLogo').append(wrapper);
    }

    return {
        currentTeam,
        printPlayers,
        printFixture,
        printTable
    }
}();


