'use strict';

// src/services/game/hooks/check-winner.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const turn = hook.data.turn;
    const boxes = hook.data.boxes;
    const edges = hook.data.edges;
    const takenEdgesIds = hook.data.takenEdgesIds;
    const players = hook.data.players;

    // check winner part
    if( takenEdgesIds.length > 0 ){

      // if total score is 9, return
      const playerOneScore = players[0].boxes.length;
      const playerTwoScore = players[1].boxes.length;
      if (playerOneScore + playerTwoScore === 9){return};


      const takenEdgesIds = hook.data.takenEdgesIds;
      const clickedEdgeId = takenEdgesIds[(takenEdgesIds.length)-1];

      // filter out the boxes that have pickedEdge in them
      // this will give can array of one or two objects!
      const matchingBoxes = boxes.filter(box => box.boxEdges.indexOf(clickedEdgeId) !== -1);
      const BoxOneEdges = matchingBoxes[0].boxEdges;

      // if (edges.filter(edge => edge.taken === true).length === 24){ return }

      if (BoxOneEdges.filter(id => takenEdgesIds.indexOf(id) !== -1).length === 4){
        console.log("Hallelujah!! A box is won!!!");
        matchingBoxes[0].boxOwner = turn
        players[turn].boxes.push(matchingBoxes[0].boxId)

        if(matchingBoxes.length === 2){
          const BoxTwoEdges = matchingBoxes[1].boxEdges;
          if(BoxTwoEdges.filter(id => takenEdgesIds.indexOf(id) !== -1).length === 4){
            console.log("Way to go!! Another box is won!!!");
            matchingBoxes[1].boxOwner = turn
            players[turn].boxes.push(matchingBoxes[1].boxId)
          }
        }
      }
      else if(matchingBoxes.length === 2){
        const BoxTwoEdges = matchingBoxes[1].boxEdges;
        if(BoxTwoEdges.filter(id => takenEdgesIds.indexOf(id) !== -1).length === 4){
          console.log("Hallelujah!! A box is won!!!");
          matchingBoxes[1].boxOwner = turn
          players[turn].boxes.push(matchingBoxes[1].boxId)
        }

        else{
          console.log("No box is won...");
          let nextTurn = turn + 1
          if (nextTurn > 1){
            nextTurn = 0
          }
          hook.data.turn = nextTurn
        }
      }
      else{
        console.log("No box is won...");
        let nextTurn = turn + 1
        if (nextTurn > 1){
          nextTurn = 0
        }
        hook.data.turn = nextTurn
      }

    } // end check winner part

    // Decide final winner:
    if (edges.filter(edge => edge.taken === true).length === 24){
      console.log("Decide final winner function is triggered...");
      const players = hook.data.players;
      // determin the hightest score.
      console.log(players);

      const playerOneScore = players[0].boxes.length;
      const playerTwoScore = players[1].boxes.length;

      console.log(playerOneScore);
      console.log(playerTwoScore);

      const highestScore = Math.max(playerOneScore, playerTwoScore);
      console.log("highestScore = ", highestScore);

      // push player with highest score into winner
      const gameWinner = players.filter((player) => player.boxes.length === highestScore)
      console.log(gameWinner[0].name);

      hook.data.winner = gameWinner[0].name
    } // end final winner



  } // end function(hook)
} // end module.exports
