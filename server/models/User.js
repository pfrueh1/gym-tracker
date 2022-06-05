const mongoose = require('mongoose');

const {Schema} = mongoose;


const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
      },
      password: {
        type: String,
        required: true,
        minlength: 5
      }
})

const User = mongoose.model('Lift', liftSchema);

module.exports = User;