var mongoose = require('mongoose');
var Schema = mongoose.Schema;


var commentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    userId: Schema.Types.ObjectId,
    gameId: Schema.Types.ObjectId,
   
});

module.exports = mongoose.model('Comment', commentSchema)