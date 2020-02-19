const mongoose = require('../connection');

//defino el esquema 
const subscriptorSchema = new mongoose.Schema({
    email: String
    
}); 

//compilo y creo el modelo 
const subscriptor = mongoose.model('subscriptor', subscriptorSchema);

//exporto el modelo
module.exports =  subscriptor;