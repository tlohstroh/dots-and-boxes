'use strict';

const checkWinner = require('./check-winner');

const createGame = require('./create-game');

const globalHooks = require('../../../hooks');
const hooks = require('feathers-hooks');
const auth = require('feathers-authentication').hooks;

const populateCreatedBy = hooks.populate('createdBy', {
  service: 'users',
  field: 'userId'
});

exports.before = {
  all: [
    auth.verifyToken(),
    auth.populateUser(),
    auth.restrictToAuthenticated()
  ],
  find: [],
  get: [],
  create: [createGame()],
  update: [checkWinner()],
  patch: [checkWinner()],
  remove: []
};

exports.after = {
  all: [],
  find: [populateCreatedBy],
  get: [populateCreatedBy],
  create: [populateCreatedBy],
  update: [populateCreatedBy],
  patch: [populateCreatedBy],
  remove: []
};
