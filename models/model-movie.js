"use strict";
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const MovieSchema = new Schema({
    director_id: Schema.Types.ObjectId,
    photo: String,
    title: {
        type: String,
        required: [true, '`{PATH}` field is required!']
    },
    category: String,
    country: String,
    year: Number,
    imdb_score: Number,
    registrationDate: {
        type: Date,
        default: Date.now
    }
});
module.exports = mongoose.model('movie', MovieSchema);