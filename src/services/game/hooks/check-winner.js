'use strict';

// src/services/game/hooks/check-winner.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};

// function getMatches(array){
//   const takenEdgesIds = hook.data.takenEdgesIds;
//   return array.filter((id) => )
// };



module.exports = function(options) {
  options = Object.assign({}, defaults, options);

  return function(hook) {
    const turn = hook.data.turn;
    const boxes = hook.data.boxes;
    const edges = hook.data.edges;
    const takenEdgesIds = hook.data.takenEdgesIds;

    if(takenEdgesIds.length > 0){

      const takenEdgesIds = hook.data.takenEdgesIds;
      const clickedEdgeId = takenEdgesIds[(takenEdgesIds.length)-1];

      // filter out the boxes that have pickedEdge in them
      // this will give can array of one or two objects!
      const matchingBoxes = boxes.filter(box => box.boxEdges.indexOf(clickedEdgeId) !== -1);
      const matchingBoxOneEdges = matchingBoxes[0].boxEdges;
      //
      //


      if (matchingBoxOneEdges.filter(id => takenEdgesIds.indexOf(id) !== -1).length === 4){

        console.log("Hallelujah!! A box is won!!!");
        //set owner of matchingBoxes[0]to equel turn
        matchingBoxes[0].boxOwner = turn
        console.log("BOX OWNER: ", matchingBoxes[0].boxOwner);
        if(matchingBoxes.length === 2){
          const matchingBoxTwoEdges = matchingBoxes[1].boxEdges;
          if(matchingBoxTwoEdges.filter(id => takenEdgesIds.indexOf(id) !== -1).length === 4){
            console.log("Way to go!! Another box is won!!!");
            matchingBoxes[1].boxOwner = turn
            console.log("BOX OWNER: ", matchingBoxes[1].boxOwner);
          }
        }
      }
      else{
        console.log("hello");
        console.log("TAKEN EDGE-IDS: ", takenEdgesIds);
        console.log("BOX EDGES box 1: ", matchingBoxes[0].boxEdges);
        console.log("MATCHING BOXES: ", matchingBoxes.length);
        console.log("No box is won...");
        console.log("....................");
        let nextTurn = turn + 1
        if (nextTurn > 1){
          nextTurn = 0
        }
        hook.data.turn = nextTurn
      }
    }
  }
}
