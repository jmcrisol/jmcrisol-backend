const ProductManager = require('./ProductManager.js');

function delay(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}


const manager = new ProductManager('products.json');

const testProduct1 = {
    title: "producto prueba",
    description: "Este es un producto prueba",
    price: 200,
    thumbnail: "Sin imagen",
    code: "abc123",
    stock: 25
};

const testProduct2 = {
    title: "producto prueba 2",
    description: "Este es un producto prueba 2",
    price: 400,
    thumbnail: "Sin imagen",
    code: "abc345",
    stock: 50
};

const testProduct3 = {
    title: "producto prueba 3",
    description: "Este es un producto prueba 3",
    price: 300,
    thumbnail: "Sin imagen",
    code: "qwe890",
    stock: 50000
};

async function testing() {
    try {
        console.log("Agrego producto 1 al JSON...")
        await manager.addProduct(testProduct1);
        await delay(1000); 
    } catch (error) {
        console.error('Error:', error.message);
    }
        
    try {
        console.log("Agrego producto 2 al JSON...")
        await manager.addProduct(testProduct2);
        await delay(1000);
    } catch (error) {
        console.error('Error:', error.message);
    } 
    try {
        console.log("Mostrar productos del JSON: ")
        await delay(2000); 
        let products = await manager.getProducts();
        console.log(products);
        await delay(1000); 
    } catch (error) {
        console.error('Error:', error.message);
    }
    try {
        console.log("Agrego NUEVO producto al JSON...")
        await manager.addProduct(testProduct3);
        await delay(1000); 
    } catch (error) {
        console.error('Error:', error.message);
    }
    try {
        console.log("Mostrar productos del JSON actualizado:")
        await delay(2000); 
        products = await manager.getProducts();
        console.log(products);
        await delay(1000); 
    } catch (error) {
        console.error('Error:', error.message);
    }
    try {
        console.log("Mostrar el producto con ID:2 ")
        await delay(2000); 
        const product = await manager.getProductById(2);
        console.log(product);
        await delay(1000); 
    } catch (error) {
        console.error('Error:', error.message);
    }
    try {
        console.log("Mostrar el producto con ID:10 ")
        await delay(2000); 
        product = await manager.getProductById(10);
        console.log(product);
        await delay(1000); 
    } catch (error) {
        console.error('Error:', error.message);
        await delay(3000)
    }
    try {
        console.log("Elimino el producto ID:1 ...")
        await delay(1000);
        await manager.deleteProduct(1);
        await delay(2000); 
    } catch (error) {
        console.error('Error:', error.message);
    }
    try {
        console.log("Elimino el producto ID:11 ...")
        await delay(2000);
        await manager.deleteProduct(11);
        await delay(3000); 
    } catch (error) {
        console.error('Error:', error.message);
        await delay(3000)
    }
    try {
        console.log("Muestro productos restantes del JSON: ")
        await delay(2000); 
        products = await manager.getProducts();
        console.log(products);
        await delay(3000)
    } catch (error) {
        console.error('Error:', error.message);
        
    }

    try {
        console.log("Actualizo precio del producto con ID:2 ")
        await delay(1000); 
        products = await manager.updateProduct(2, {price: 800});
        await delay(2000)
    } catch (error) {
        console.error('Error:', error.message);
    }
    try {
        console.log("Mostrar el producto actualizado: ")
        await delay(2000); 
        const product = await manager.getProductById(2);
        console.log(product);
        await delay(3000); 
    } catch (error) {
        console.error('Error:', error.message);
    }

}

testing();
