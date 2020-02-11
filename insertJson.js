import { products } from './itemsForDB.json';
import { remove, insertMany } from './products';


async function insertProducts() {
    try {
        await remove({});
        console.log('Se borro completamente');
        await insertMany(products);
        process.exit();
    }
    catch (e) {
        console.log(e);
    }
};

insertProducts();
