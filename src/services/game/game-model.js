'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const lineSchema = new Schema({
  taken: { type: Boolean, required: true, "default": false },
  lineId: { type: Number, required: true }
});

const boxSchema = new Schema({
  lines: [lineSchema],
  color: { type: String, required: true }
});

const boardSchema = new Schema({
  // lines: [lineSchema],
  boxes: [boxSchema]
});

const playerSchema = new Schema({
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  color: { type: String, required: false },
  name: { type: String, required: true },
  points: { type: Number, required: true, 'default': 0 }
});

const gameSchema = new Schema({
  // boxes: [boxSchema],
  // lines: [lineSchema],
  board: [boardSchema],
  players: [playerSchema],
  started: { type: Boolean, required: true, 'default': false },
  winner: { type: Number, required: false },
  turn: { type: Number, required: true, 'default': 0 },
  createdAt: { type: Date, 'default': Date.now },
  updatedAt: { type: Date, 'default': Date.now },
  userId: { type: Schema.Types.ObjectId, ref: 'user' },
  draw: { type: Boolean, required: false }
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
