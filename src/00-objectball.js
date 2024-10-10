function gameObject() {
  return {
      home: {
          teamName: "Brooklyn Nets",
          colors: ['Black', 'White'],
          players: {
              'Alan Anderson': {
                  number: 0,
                  shoe: 16,
                  points: 22,
                  rebounds: 12,
                  assists: 12,
                  steals: 3,
                  blocks: 1,
                  slamDunks: 1,
              },
              'Reggie Evans': {
                  number: 30,
                  shoe: 14,
                  points: 12,
                  rebounds: 12,
                  assists: 12,
                  steals: 12,
                  blocks: 12,
                  slamDunks: 7,
              },
              'Brook Lopez': {
                  number: 11,
                  shoe: 17, 
                  points: 17,
                  rebounds: 19,
                  assists: 10,
                  steals: 3,
                  blocks: 1,
                  slamDunks: 15,
              },
              'Mason Plumlee': {
                  number: 1,
                  shoe: 19,
                  points: 26,
                  rebounds: 12,
                  assists: 6,
                  steals: 3,
                  blocks: 8,
                  slamDunks: 5,
              },
              'Jason Terry': {
                  number: 31, 
                  shoe: 15,
                  points: 19,
                  rebounds: 2,
                  assists: 2,
                  steals: 4,
                  blocks: 11,
                  slamDunks: 1,
              }
          }
      },
      away: {
          teamName: "Charlotte Hornets",
          colors: ['Turquoise', 'Purple'],
          players: {
              'Jeff Adrien': {
                  number: 4,
                  shoe: 18,
                  points: 10,
                  rebounds: 1,
                  assists: 1,
                  steals: 2,
                  blocks: 7,
                  slamDunks: 2, 
              },
              'Bismak Biyombo': {
                  number: 0,
                  shoe: 16,
                  points: 12,
                  rebounds: 4,
                  assists: 7,
                  steals: 7,
                  blocks: 15,
                  slamDunks: 10,
              },
              'DeSagna Diop': {
                  number: 2,
                  shoe: 14,
                  points: 24,
                  rebounds: 12,
                  assists: 12,
                  steals: 4,
                  blocks: 5,
                  slamDunks: 5,  
              },
              'Ben Gordon': {
                  number: 8,
                  shoe: 15,
                  points: 33,
                  rebounds: 3,
                  assists: 2,
                  steals: 1,
                  blocks: 1,
                  slamDunks: 0,
              },
              'Brendan Haywood': {
                  number: 33,
                  shoe: 15,
                  points: 6,
                  rebounds: 12,
                  assists: 12,
                  steals: 22,
                  blocks: 5,
                  slamDunks: 12,
              }
          }
      }
  };
}

function numPointsScored(playerName) {
  const game = gameObject();

  if (game.home.players[playerName]) {
      return game.home.players[playerName].points;
  }

  if (game.away.players[playerName]) {
      return game.away.players[playerName].points;
  }
}

function shoeSize(playerName) {
  const game = gameObject();
  if (game.home.players[playerName]) {
      return game.home.players[playerName].shoe;
  }

  if (game.away.players[playerName]) {
      return game.away.players[playerName].shoe;
  }
}

function teamColors(teamName) {
  const game = gameObject();
  if (game.home.teamName === teamName) {
    return game.home.colors;
  }
}
  if (game.away.teamName === teamName) {
    return game.away.colors;
  }

function teamNames() {
  const game = gameObject();
  return [game.home.teamName, game.away.teamName];
}

function playerNumbers(teamName) {
  const game = gameObject();
  let numbers = [];

  if (game.home.teamName === teamName) {
      for (let player in game.home.players) {
          numbers.push(game.home.players[player].number);
      }
  }

  if (game.away.teamName === teamName) {
      for (let player in game.away.players) {
          numbers.push(game.away.players[player].number);
      }
  }

  return numbers;
}

function playerStats(playerName) {
  const game = gameObject();
  if (game.home.players[playerName]) {
      return game.home.players[playerName];
  }
  if (game.away.players[playerName]) {
      return game.away.players[playerName];
  }
}

function bigShoeRebounds() {
  const game = gameObject();
  let largestShoeSize = 0;
  let playerWithBiggestShoe = null;
  for (let player in game.home.players) {
      let shoeSize = game.home.players[player].shoe;
      if (shoeSize > largestShoeSize) {
          largestShoeSize = shoeSize;
          playerWithBiggestShoe = game.home.players[player];
      }
  }
  for (let player in game.away.players) {
      let shoeSize = game.away.players[player].shoe;
      if (shoeSize > largestShoeSize) {
          largestShoeSize = shoeSize;
          playerWithBiggestShoe = game.away.players[player];
      }
  }
  if (playerWithBiggestShoe) {
      return playerWithBiggestShoe.rebounds;
  }
}

function mostPointsScored() {
  const game = gameObject();
  let highestPoints = 0;
  let mvp = "";
 
  for (let player in game.home.players) {
      let points = game.home.players[player].points;
      if (points > highestPoints) {
          highestPoints = points;
          mvp = player;
      }
  }
  for (let player in game.away.players) {
      let points = game.away.players[player].points;

      if (points > highestPoints) {
          highestPoints = points;
          mvp = player;
      }
  }
  return { name: mvp, points: highestPoints };
}

