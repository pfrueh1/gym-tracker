const mongoose = require('mongoose');

const {Schema} = mongoose;

const date = new Date()
const month = date.getMonth() + 1
const day = date.getDate()
const year = date.getFullYear()

const liftSchema = new Schema({
    name: {
        type: String,
        required: true,
        trim: true
    },
    weight: Number,
    dateUpdated: { type: String, default: `${month}/${day}/${year}` }
})

const Lift = mongoose.model('Lift', liftSchema);

module.exports = Lift;