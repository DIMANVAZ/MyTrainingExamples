const team = {
    _players:[
        {
            firstName: 'Pablo',
            lastName: 'Sanchez',
            age: 11
        },
        {
            firstName: 'Juan',
            lastName: 'Carlos',
            age: 45
        },
        {
            firstName: 'Husain',
            lastName: 'Migel',
            age: 30
        }
            ],
    _games:[
        {
            opponent: 'Broncos',
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: 'Eagles',
            teamPoints: 12,
            opponentPoints: 10
        },
        {
            opponent: 'Spartak',
            teamPoints: 50,
            opponentPoints: 98
        }
    ],
    get playerZ(){
        return this._players;
    },

    get gameZ(){
        return this._games;
    },
    //функция добавления нового игрока
    addPlayer(firstName, lastName, age){
        const player = {
            firstName,
            lastName,
            age
                        };
        this._players.push(player);
    },

    addGame(opponentName,urTeamPoints,opponentsTeamPoints){
        const game = {
            opponent:opponentName,
            teamPoints: urTeamPoints,
            opponentPoints:opponentsTeamPoints
        };

        this._games.push(game);
    },
};

team.addPlayer('Steph','Curry',28);
team.addPlayer('Lisa','Leslie',44);
team.addPlayer('Bugs','Bunny',76);
console.log(team._players);

team.addGame('Быки', 23, 33);
team.addGame('Свины', 83, 21);
team.addGame('Камыши', 43, 45);

console.log(team._games);
