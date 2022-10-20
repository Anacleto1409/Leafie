import { products } from "../assets/produtos";
import { insertNewProduct, insertNewProducts, deleteProductById, getProductById, getAllProducts } from "../data/produtos";

//criar um novo produto e retorna seu id
async function createNewProduct(product) {
    const productId = await insertNewProduct(product)
    return productId
}

export async function populateProducts() {
    await insertNewProducts(products)
}

//excluir produto pelo id
async function moveProductToTrashById(productId) {
    return deleteProductById(productId)
}

//mostrar produto pelo id
async function showProductById(productId) {
    const productOne = await getProductById(productId)

    return productOne

}

//obter todos os pordutos do sistema
async function showAllProducts() {
    const products = await getAllProducts()
    if (products == undefined) {
        return "Nenhuma reserva registrada!"
    }
    return products
}



export {
    createNewProduct,
    moveProductToTrashById,
    showProductById,
    showAllProducts
}