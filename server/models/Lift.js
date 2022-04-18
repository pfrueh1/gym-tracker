const mongoose = require('mongoose');

const {Schema} = mongoose;

const liftSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    weight: Number,
    dateUpdated: { type: String, default: Date.now() }
})

const Lift = mongoose.model('Lift', liftSchema);

module.exports = Lift;