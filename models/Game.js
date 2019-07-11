var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var gameSchema = new Schema({
    title: String,
    platform: {
        type: String,
        enum: ['PS4', 'XBOX', 'Switch'],
        default: 'PS4',
        required: true
    },
    userId: String,
    location: Number,
    postedOn: Date,
    deletedAt: Date

});



module.exports = mongoose.model('Game', gameSchema);