'use strict';

// src/services/game/hooks/check-winner.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    // const cards = hook.data.cards;
    const turn = hook.data.turn;
    const players = hook.data.players;
    const boxes = hook.data.boxes;
    const lines = hook.data.lines;

    const linesTaken = lines.filter((line)) => (line.taken)

    // const flippedCards = cards.filter((card) => (card.flipped))

    // Click line -> lineId
    // Iterate over all boxes -> to check for lineId in boxes.
    // Take boxes with that lineID and give them 0.25 points.
    // Set line as taken



    if (box.points === 1)
      players[turn].wonboxes.push(boxId)


      && player gets another turn.

      const possibleBoxes = boxes.length

      const totalWonBoxes = players.map((player) => { return player.boxes.length })
        .reduce((prev, next) => { return prev + next }, 0)

      if ((possibleBoxes - totalWonboxes) === 0) {
        const highestScore = players.reduce((prevBoxes, nextPlayer) => {
          const nextBoxes = nextPlayer.boxes.length
          return prevBoxes > nextBoxes ? prevBoxes : nextPlayer
        }, 0)
      }

    //
    //
    // if (flippedCards.length === 2) {
    //   if (flippedCards[0].symbol === flippedCards[1].symbol) {
    //     players[turn].pairs.push(flippedCards[0].symbol)

        // const possiblePairs = cards.length / 2
        // const wonPairs = players.map((player) => { return player.pairs.length })
        //   .reduce((prev, next) => { return prev + next }, 0)
        //
        // if ((possiblePairs - wonPairs) === 0) {
        //   const highestScore = players.reduce((prevPairs, nextPlayer) => {
        //     const nextPairs = nextPlayer.pairs.length
        //     return prevPairs > nextPairs ? prevPairs : nextPairs
        //   }, 0)

          let winners = []
          players.map((player, index) => {
            if (player.points.length === highestScore) {
              winners.push(index)
            }
          })

          if (winners.length === 1) {
            hook.data.winner = winners[0]
          } else {
            hook.data.draw = true
          }
        }
      } else {
        const totalPlayers = players.length
        let nextTurn = turn + 1
        if (nextTurn > totalPlayers - 1) {
          nextTurn = 0
        }



        hook.data.turn = nextTurn
      }
    }
  };
};
