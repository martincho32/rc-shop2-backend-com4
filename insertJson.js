const json = require('./itemsForDB.json');
const Product = require('./products');
/*
 - To Insert JSON file into DB type 'npm run insert'
 - You need to have the server running for this to work
*/
async function insertProducts() {
    try {
        await Product.remove({});
        await Product.insertMany(json.products);
        console.log('JSON file added succesfully. Closing process...');
        process.exit();
    }
    catch (e) {
        console.log(e);
    }
};
insertProducts();
