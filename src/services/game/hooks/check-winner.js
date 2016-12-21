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
    const winner = hook.data.winner;

    // check winner part
    if( takenEdgesIds.length > 0 ){

      // if total score is 9, return
      const playerOneScore = players[0].boxes.length;
      const playerTwoScore = players[1].boxes.length;
      if (playerOneScore + playerTwoScore >= 9){return};


      const takenEdgesIds = hook.data.takenEdgesIds;
      const clickedEdgeId = takenEdgesIds[(takenEdgesIds.length)-1];

      // filter out the boxes that have pickedEdge in them
      // this will give an array of one or two objects!
      const matchingBoxes = boxes.filter(box => box.boxEdges.indexOf(clickedEdgeId) !== -1);
      const BoxOneEdges = matchingBoxes[0].boxEdges;

      function noBoxWon() {
        let nextTurn = turn + 1;
          nextTurn > 1 ? nextTurn = 0 : null;
          hook.data.turn = nextTurn;
      };

      function firstBoxWon(){
        matchingBoxes[0].boxOwner = turn
        players[turn].boxes.push(matchingBoxes[0].boxId)
      };

      function secondBoxWon(){
        matchingBoxes[1].boxOwner = turn
        players[turn].boxes.push(matchingBoxes[1].boxId)
      };

      // if (edges.filter(edge => edge.taken === true).length === 24){ return }

      // check first matching box (there is always a first box)
      if (BoxOneEdges.filter(id => takenEdgesIds.indexOf(id) !== -1).length === 4){
        console.log("Hallelujah!! A box is won!!!");
        firstBoxWon()

        // then check if there is another matching box
        if(matchingBoxes.length === 2){
          const BoxTwoEdges = matchingBoxes[1].boxEdges;
          if(BoxTwoEdges.filter(id => takenEdgesIds.indexOf(id) !== -1).length === 4){
            console.log("Way to go!! Another box is won!!!");
            secondBoxWon()
          }
        }
      }
      // if the first box is not won, but there is a second box, check that one.
      else if(matchingBoxes.length === 2){
        const BoxTwoEdges = matchingBoxes[1].boxEdges;
        if(BoxTwoEdges.filter(id => takenEdgesIds.indexOf(id) !== -1).length === 4){
          console.log("Hallelujah!! A box is won!!!");
          secondBoxWon()
        }

        // if the second box
        else{
          console.log("No box is won...");
          noBoxWon()
        }
      }
      // if there are no winning boxes...
      else{
        console.log("No box is won...");
        noBoxWon();
      }

    } // end check winner part

    // Decide final winner:
    if (edges.filter(edge => edge.taken === true).length === 24){
      console.log("Decide final winner function is triggered...");
      const players = hook.data.players;

      // determine the hightest score.
      const playerOneScore = players[0].boxes.length;
      const playerTwoScore = players[1].boxes.length;

      const highestScore = Math.max(playerOneScore, playerTwoScore);
      console.log("highestScore = ", highestScore);

      // push player with highest score into winner
      const gameWinner = players.filter((player) => player.boxes.length === highestScore)
      hook.data.winner = gameWinner[0].name

      console.log(hook.data.winner)
    } // end final winner
  } // end function(hook)
} // end module.exports
