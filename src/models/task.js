const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const taskSchema = new Schema({
    pieza : String,
    movimiento : String,
    status : {type : Boolean, default: false}
});

module.exports = mongoose.model('tasks', taskSchema);
