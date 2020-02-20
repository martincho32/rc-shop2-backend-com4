const mongoose = require('../connection');

//defino el esquema 
const emailListSchema = new mongoose.Schema({
    email: String
}); 

//compilo y creo el modelo 
const EmailList = mongoose.model('emailList', emailListSchema);

//exporto el modelo
module.exports =  EmailList;
