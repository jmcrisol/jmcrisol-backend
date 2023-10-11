class ProductManager {
    constructor() {
        this.products = [];
        this.nextId = 1;
    }

    findProductByCode(code) {
        return this.products.find(product => product.code === code);
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
}



//PROCESO DE TESTING

const manager = new ProductManager();

console.log(manager.getProducts());  // Debe devolver el array vacio

const testProduct = {
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


manager.addProduct(testProduct);
manager.addProduct(testProduct2);

console.log(manager.getProducts());  // Debe devolver el producto con el id asignado


try {
  manager.addProduct(testProduct);// Se intenta agregar el mismo producto, lo que debería generar un error
} catch (error) {
  console.error(error.message);  // "El código del producto ya está en uso."
}

// Testing del método getProductById
console.log(manager.getProductById(1));  // Debe devolver el producto
console.log(manager.getProductById(999));  // "NOt Found""