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
});

const boxSchema = new Schema({
 boxId: { type: String, required: true },
 boxEdges: [String],
});

const playerSchema = new Schema({
 userId: { type: Schema.Types.ObjectId, ref: 'user' },
 color: { type: String, required: false },
 name: { type: String, required: true },
 boxes: [String]
});

const gameSchema = new Schema({
 boxes: [boxSchema],
 edges: [edgeSchema],
 takenEdges: [String],
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
