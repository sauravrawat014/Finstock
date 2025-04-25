const mongoose = require('mongoose');
const UserSchema  = require('../schemas/UserSchema');

// Create the model properly
const User = mongoose.model('User', UserSchema);

// Export directly (not as an object)
module.exports = User;