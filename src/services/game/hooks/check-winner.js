'use strict';

// src/services/game/hooks/check-winner.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

function checkWinner(array){
  // filter the taken edges so we only have the true ones
  var takenEdges = edges.filter(edge => edge.taken === true)
  // create a new array with only the actual taken edgeId's in it
  var takenEdgesIds = takenEdges.map(function(id){
    return id.edgeId
  });
  // check how many of those id's match with the boxEdges array of the current box
  // if 4 match -> it means the player won this box!
  if(takenEdgesIds.filter(id => array.indexOf(id) !== -1).length === 4){
    console.log("is Box Won")
    return true
    }
}


module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const boxes = hook.data.boxes;
    const edges = hook.data.edges;
    const turn = hook.data.turn;
    const players = hook.data.players;
    const takenEdges = hook.data.takenEdges
    const clickedEdge = takenEdges[(takenEdges.length)-1]

    // filter out the boxes that have pickedEdge in them
    const matchingBoxes = boxes.filter(box => box.boxEdges.indexOf(clickedEdge) !== -1)



    // check voor box 1
    if (checkWinner(matchingBoxes[0].boxEdges) === true){
      // TODO do stuff to give the player points
    }
    else if ((matchingBoxes.length === 2) && (checkWinner(matchingBoxes[1].boxEdges) === true)){
      // TODO do stuff to give the player points
    }
    else{
      //give turn to other player
    }







  };
};
