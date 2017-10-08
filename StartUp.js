$(function teamID() {
    let currentTeam;
    let currentLeague;

    $('.select-favTeam').click(function () {
        $('.screen').hide();
        $('.main-screen').show();
        let choice = $(".selectpicker option:selected").val();

        if (choice === 'Manchester United') {
            choice = 'ManU';
        }

        currentLeague = 'PL';
        currentTeam = choice;
        container.visualizer.currentTeam(choice);
    });

    $('.teamButton').on('click', (event) => {

        const buttonClicked = $(event.currentTarget).attr('id');
        currentTeam = $(event.currentTarget).attr('id');
        container.visualizer.currentTeam(buttonClicked);

        if (buttonClicked === 'Barcelona') {
            container.ajaxProvider.visualizeTable(container.visualizer.printTable, 'PD');
            currentLeague = 'PD';
        } else if (buttonClicked === 'Arsenal') {
            container.ajaxProvider.visualizeTable(container.visualizer.printTable, 'PL');
            currentLeague = 'PL';
        } else if (buttonClicked === 'Real Madrid') {
            container.ajaxProvider.visualizeTable(container.visualizer.printTable, 'PD');
            currentLeague = 'PD';
        } else if (buttonClicked === 'Bayern') {
            container.ajaxProvider.visualizeTable(container.visualizer.printTable, 'BL1');
            currentLeague = 'BL1';
        } else if (buttonClicked === 'ManU') {
            container.ajaxProvider.visualizeTable(container.visualizer.printTable, 'PL');
            currentLeague = 'PL';
        } else if (buttonClicked === 'Liverpool') {
            container.ajaxProvider.visualizeTable(container.visualizer.printTable, 'PL');
            currentLeague = 'PL';
        } else if (buttonClicked === 'Juventus') {
            container.ajaxProvider.visualizeTable(container.visualizer.printTable, 'SA');
            currentLeague = 'SA';
        } else if (buttonClicked === 'PSG') {
            container.ajaxProvider.visualizeTable(container.visualizer.printTable, 'FL1');
            currentLeague = 'FL1';
        }
    });

    $('.detailsButton').on('click', (event) => {
        const buttonClicked = $(event.currentTarget).attr('id');

        if (buttonClicked === 'league') {
            container.ajaxProvider.visualizeTable(container.visualizer.printTable, currentLeague);

        } else if (buttonClicked === 'fixtures') {
            container.ajaxProvider.visualizeTeamFixtures(container.visualizer.printFixture, currentTeam, currentLeague);

        } else if (buttonClicked === 'players') {
            container.ajaxProvider.visualizeTeamPlayers(container.visualizer.printPlayers, currentTeam, currentLeague);
        }

    })

    $body = $("body");
    $(document).on({
        ajaxStart: function() { $body.addClass("loading");    },
        ajaxStop: function() { $body.removeClass("loading"); }
    });
});
