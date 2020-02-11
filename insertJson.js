const json = require('./itemsForDB.json');
const Product = require('./products');


async function insertProducts() {
    try {
        await Product.remove({});
        console.log('Se borro completamente');
        await Product.insertMany(json.products);
        process.exit();
    }
    catch (e) {
        console.log(e);
    }
};

insertProducts();
