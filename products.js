const mongoose = require('./connection');

/**
 * defino el esquema 
 */

const productSchema = new mongoose.Schema({
    brand: String,
    model: String,
    description:String,
    price: Number 
}); 

/**
 * compilo y creo el modelo 
 * 
 */
const Product = mongoose.model('products', productSchema);

/**
 * exporto el modelo
 */
module.exports = Product;