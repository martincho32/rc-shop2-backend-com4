import { products } from './itemsForDB.json';
import { remove, insertMany } from './products';

/*
 - To Insert JSON file into DB type 'npm run insert'
 - You need to have the server running for this to work
*/
async function insertProducts() {
    try {
        await remove({});
        await insertMany(products);
        console.log('JSON file added succesfully. Closing process...');
        process.exit();
    }
    catch (e) {
        console.log(e);
    }
};
insertProducts();
