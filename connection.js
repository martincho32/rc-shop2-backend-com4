/**
 * importamos la libreria mongoose
 */

const mongoose = require('mongoose');

/**
 * conectamos a la base de datos
 */
mongoose.connect('mongodb://localhost:27017/ecommercerdb');

module.exports = mongoose;

