const fs = require('fs').promises;

class ProductManager {
    constructor(){
        this.products = [];
        this.nextId = 1;
        this.path = ""
    }

    findProductByCode(code) {
        return this.products.find(product => product.code === code);
    }

    getProducts() {
        return this.products;
    } //debe devolver el arreglo con todos los productos creados hasta ese momento

    getProductById(id) {
        const product = this.products.find(product => product.id === id);
        if (!product) {
            console.error("Not found"); //En caso de no coincidir ningún id
            return "";
        }
        return product;
    }

    addProduct(product) { //Validar que no se repita el campo “code” y que todos los campos sean obligatorios
        if (!product.title || !product.description || !product.price || !product.thumbnail || !product.code || typeof product.stock !== "number") {
            throw new Error("Todos los campos son obligatorios");
        }

        if (this.findProductByCode(product.code)) {
            throw new Error("El código del producto ya existe");
        }

        const newProduct = {
            ...product,
            id: this.nextId++
        };


        this.products.push(newProduct);
        return newProduct;
    }

    updateProduct(){

    }

    deleteProduct(){

    }

}