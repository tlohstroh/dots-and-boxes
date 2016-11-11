'use strict';

// src/services/game/hooks/create-game.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

// This function return an array [1, 2, 3, ... N]
// Those will be our edgeId's
function initEdgeIds(numEdges) {
  var N = numEdges;
  return Array.apply(null, {length: N}).map(Number.call, Number)
}

// This function return an array [1, 2, 3, ... N]
// Those will be our boxId's
function initBoxIds(numEdges) {
  var N = numBoxes;
  return Array.apply(null, {length: N}).map(Number.call, Number)
}


module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const user = hook.params.user;

    // Assign the logged in user as the creator of the game
    hook.data.userId = user._id;

    // Set up the set of edges
    const numEdges = 24
    const edgeIds = initEdgeIds(numEdges)
    // edges = itterate over all the edgeIds and for each itteration:
    // set taken to false and set edgeId to id.
    hook.data.edges = edgeIds.map((id) => ({taken: false, edgeId: id}))


    hook.data.board = [{
      edges: hook.data.edges
    }]



    // Add the logged in user as the first player
    hook.data.players = [{
      userId: user._id,
      name: user.name,
      color: '#f00'
    }];

  };
};
