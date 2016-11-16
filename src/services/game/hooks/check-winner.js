'use strict';

// src/services/game/hooks/check-winner.js
//
// Use this hook to manipulate incoming or outgoing data.
// For more information on hooks see: http://docs.feathersjs.com/hooks/readme.html

const defaults = {};


module.exports = function(options) {
  options = Object.assign({}, defaults, options);





  return function(hook) {
    const turn = hook.data.turn

    if(false){
      //some code do see if there is a winner
    }
    else{
      let nextTurn = turn + 1
      if (nextTurn > 1){
        nextTurn = 0
      }
      hook.data.turn = nextTurn
    }

  }
}
