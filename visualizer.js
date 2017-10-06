const visualizerModule = function () {

    function printTable(data) {

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

            let firstSpan = $('<span class="rank"></span>');
            firstSpan.append(`${rank.position}`);
            singleTeam.append(firstSpan);

            let logo = $('<img class="logo"></img>').attr('src', rank.crestURI);
            singleTeam.append(logo);

            let secondSpan = $(' <span class="teams"></span>');
            secondSpan.append(`${rank.teamName}`);
            singleTeam.append(secondSpan);

            let thirdSpan = $('<span class="mp"></span>');
            thirdSpan.append(`${rank.playedGames}`);
            singleTeam.append(thirdSpan);

            let fourthSpan = $('<span class="wins"></span>');
            fourthSpan.append(`${rank.wins}`);
            singleTeam.append(fourthSpan);

            let fifthSpan = $('<span class="draws"></span>');
            fifthSpan.append(`${rank.draws}`);
            singleTeam.append(fifthSpan);

            let sixthSpan = $('<span class="losses"></span>');
            sixthSpan.append(`${rank.losses}`);
            singleTeam.append(sixthSpan);

            let tenthSpan = $('<span class="gf"></span>');
            tenthSpan.append(`${rank.goals}`);
            singleTeam.append(tenthSpan);

            let seventhSpan = $('<span class="ga"></span>');
            seventhSpan.append(`${rank.goalsAgainst}`);
            singleTeam.append(seventhSpan);

            let eightSpan = $('<span class="gd"></span>');
            eightSpan.append(`${rank.goalDifference}`);
            singleTeam.append(eightSpan);

            let ninthSpan = $('<span class="points"></span>');
            ninthSpan.append(`${rank.points}`);
            singleTeam.append(ninthSpan);


            wrapperWithAttr.append(singleTeam);
        }
        $('#teamInfo').append(wrapperWithAttr);
    }

    return {
        printTable
    }
}();


