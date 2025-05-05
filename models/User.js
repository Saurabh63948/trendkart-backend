const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  username: { type: String, required: true },
  email: { type: String, required: true, unique: true },
  mobile: { type: String, required: true },
  password: { type: String, required: true },
}, { timestamps: true });


// Mongoose will automatically create the 'users' collection
const User = mongoose.model('User', userSchema);  // No need to specify the collection name here

module.exports = User;
