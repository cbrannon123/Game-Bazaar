var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    content: {
        type: String,
        required: true
    },
    userId: String,
    gameId: String
   
});

module.exports = mongoose.model('Comment', commentSchema)