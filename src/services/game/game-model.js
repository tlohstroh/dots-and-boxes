'use strict';

// game-model.js - A mongoose model
//
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.

const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const edgeSchema = new Schema({
  edgeId: { type: String, required: true },
  taken: { type: Boolean, required: true, 'default': false },
  type: { type: String, required: true, 'default': 'vertical'},
});

const boxSchema = new Schema({
 boxId: { type: String, required: true },
 boxEdges: [String],
 boxOwner: { type: Number, required: false },
});

const playerSchema = new Schema({
 userId: { type: Schema.Types.ObjectId, ref: 'user' },
 color: { type: String, required: false },
 playerTurn: { type: Number, required: true },
 name: { type: String, required: true },
 boxes: [String]
});

const gameSchema = new Schema({
 boxes: [boxSchema],
 edges: [edgeSchema],
 takenEdgesIds: [String],
 players: [playerSchema],
 started: { type: Boolean, required: true, 'default': false },
 winner: { type: String, required: true, 'default': 'Who will it be...?' },
 turn: { type: Number, required: true, 'default': 0 },
 createdAt: { type: Date, 'default': Date.now },
 updatedAt: { type: Date, 'default': Date.now },
 userId: { type: Schema.Types.ObjectId, ref: 'user' },
 draw: { type: Boolean, required: false }
});

const gameModel = mongoose.model('game', gameSchema);

module.exports = gameModel;
