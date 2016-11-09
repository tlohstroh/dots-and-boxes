'use strict';

const assert = require('assert');
const checkWinner = require('../../../../src/services/game/hooks/check-winner.js');

describe('game checkWinner hook', function() {
  it('hook can be used', function() {
    const mockHook = {
      type: 'before',
      app: {},
      params: {},
      result: {},
      data: {}
    };

    checkWinner()(mockHook);

    assert.ok(mockHook.checkWinner);
  });
});
