const mongoose = require('../connection');

//defino el esquema 
const productSchema = new mongoose.Schema({
    brand: String,
    model: String,
    description: String,
    price: Number,
    discountPercentage: Number,
    category: String,
    features: {
        inches: String,
        screenType: String,
        resolution: String,
        weigth: String,
        Bluetooth: String,
        WiFi: String,
        guarantee: String
    },
    images: [
        {
        title: String,
        path: String
        }
    ]
}); 

//compilo y creo el modelo 
const Product = mongoose.model('product', productSchema);

//exporto el modelo
module.exports =  Product;
