var mongoose     = require('mongoose');
var Schema       = mongoose.Schema;

var UserSchema   = new Schema({
    name: String,
    platform: String,
    userId: String
});

module.exports = mongoose.model('User', UserSchema);