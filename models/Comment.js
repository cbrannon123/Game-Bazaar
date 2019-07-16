var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var commentSchema = new Schema({
    body: {
        type: String,
        required: true
    },
    userId: String,
    gameId: String,
   
});

module.exports = mongoose.model('Comment', commentSchema)