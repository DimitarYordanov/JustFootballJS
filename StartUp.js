
$(function teamID (){

    let currentTeam;
    let currentLeague;

    $('.teamButton').on('click', (event) => {
        const buttonClicked = $(event.currentTarget).attr('id')
        const result = $('#teamInfo')
        currentTeam = $(event.currentTarget).attr('id')
        console.log(buttonClicked)
        if(buttonClicked === 'Barcelona'){
            console.log(1)
            visualizerModule.currentTeam(buttonClicked);
            ajaxModule.visualizeTable(visualizerModule.printTable,'PD');
            currentLeague = 'PD';
            
            
        }else if(buttonClicked === 'Arsenal'){
            
            
            visualizerModule.currentTeam(buttonClicked);
            ajaxModule.visualizeTable(visualizerModule.printTable,'PL');
            currentLeague = 'PL';
            //currentTeam='Arsenal';
            
        }else if(buttonClicked === 'Real Madrid'){
            visualizerModule.currentTeam(buttonClicked);
            ajaxModule.visualizeTable(visualizerModule.printTable, 'PD');
            currentLeague = 'PD';
            //currentTeam='Real Madrid';
            
        }else if(buttonClicked === 'Bayern'){
            visualizerModule.currentTeam(buttonClicked);
            ajaxModule.visualizeTable(visualizerModule.printTable, 'BL1');
            currentLeague = 'BL1';
            //currentTeam='Bayern';
            
        }else if(buttonClicked === 'ManU'){
            visualizerModule.currentTeam(buttonClicked);
            ajaxModule.visualizeTable(visualizerModule.printTable, 'PL');
            currentLeague = 'PL';
            //currentTeam='ManU';
            
        }else if(buttonClicked === 'Liverpool'){
            visualizerModule.currentTeam(buttonClicked);
            ajaxModule.visualizeTable(visualizerModule.printTable, 'PL');
            currentLeague = 'PL';
            //currentTeam='Liverpool';
            
        }else if(buttonClicked === 'Juventus'){
            visualizerModule.currentTeam(buttonClicked);
            ajaxModule.visualizeTable(visualizerModule.printTable, 'SA');
            currentLeague = 'SA';
            //currentTeam='Juventus';
            
        }else if(buttonClicked === 'PSG'){
            visualizerModule.currentTeam(buttonClicked);
            ajaxModule.visualizeTable(visualizerModule.printTable, 'FL1');
            currentLeague = 'FL1';
            //currentTeam='PSG';
        }})
    
        // Details BUtton !

        $('.detailsButton').on('click', (event) => {
            const buttonClicked = $(event.currentTarget).attr('id')
            

            if(buttonClicked === 'league'){
    
                $('#teamInfo').empty();
                ajaxModule.visualizeTable(visualizerModule.printTable,currentLeague);
                
            }else if(buttonClicked === 'fixtures'){
                
                $('#teamInfo').empty();
                ajaxModule.visualizeTeamFixtures(visualizerModule.printFixture, currentTeam, currentLeague);
                
            }else if(buttonClicked === 'players'){
                $('#teamInfo').empty();
                ajaxModule.visualizeTeamPlayers(visualizerModule.printPlayers, currentTeam, currentLeague);
                
            }

    })
})
