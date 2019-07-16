var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var gameSchema = new Schema({
    title: String,
    platform: {
        type: String,
        enum: ['PS4', 'XBOX', 'NSW'],
        default: 'PS4'
    },
    userId: String,
    userName: String,
    location: String,
    postedOn: Date,
    deletedAt: Date,
    comment: [{ 
        type: Schema.Types.ObjectId,
        ref: 'Comment'
    }],
    
});



module.exports = mongoose.model('Game', gameSchema);