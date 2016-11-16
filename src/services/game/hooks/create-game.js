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
function initBoxIds(numBoxes) {
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

    // const horizontals = [0, 1, 2, 7, 8, 9, 14, 15, 16, 21, 22, 23]
    // const verticals = [3, 4, 5, 6, 10, 11, 12, 13, 17, 18, 19, 20]

    hook.data.edges[0].type = 'horizontal'
    hook.data.edges[1].type = 'horizontal'
    hook.data.edges[2].type = 'horizontal'

    hook.data.edges[7].type = 'horizontal'
    hook.data.edges[8].type = 'horizontal'
    hook.data.edges[9].type = 'horizontal'

    hook.data.edges[14].type = 'horizontal'
    hook.data.edges[15].type = 'horizontal'
    hook.data.edges[16].type = 'horizontal'

    hook.data.edges[21].type = 'horizontal'
    hook.data.edges[22].type = 'horizontal'
    hook.data.edges[23].type = 'horizontal'


    // set up the set of boxes
    const numBoxes = 9
    const boxIds = initBoxIds(numBoxes)
    // boxes = itterate over all the edgeIds and for each itteration:
    // set boxId to id.
    hook.data.boxes = boxIds.map((id) => ({boxId: id, boxEdges: []}))

    // assign 4 edges to each box
    hook.data.boxes[0].boxEdges = [ '0', '3', '4', '7' ]
    hook.data.boxes[1].boxEdges = [ '1', '4', '5', '8' ]
    hook.data.boxes[2].boxEdges = [ '2', '5', '6', '9' ]
    hook.data.boxes[3].boxEdges = [ '7', '10', '11', '14' ]
    hook.data.boxes[4].boxEdges = [ '8', '11', '12', '15' ]
    hook.data.boxes[5].boxEdges = [ '9', '12', '13', '16' ]
    hook.data.boxes[6].boxEdges = [ '14', '17', '18', '21' ]
    hook.data.boxes[7].boxEdges = [ '15', '18', '19', '22' ]
    hook.data.boxes[8].boxEdges = [ '16', '19', '20', '23' ]

    // Add the logged in user as the first player
    hook.data.players = [{
      userId: user._id,
      name: user.name,
      color: '#f00',
      playerTurn: 0,
    }];
  };
};
