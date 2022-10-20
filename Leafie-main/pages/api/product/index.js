import { createNewProduct, showAllProducts } from "../../../src/services/produtos";
import { checkIfProductIsReserved } from "../../../src/services/reservas";

export default async function handler(req, res) {
    //cria um novo produto e retorna seu id
    if (req.method === "POST") {
        const product = req.body

        if (product != undefined) {
            const productId = await createNewProduct(product)
            res.status(200).json(productId)
        } else {
            res.status(404).json("Não foi possível inserir um novo produto!")
        }

        //obter todos os produtos
    } else if (req.method === "GET") {

        const products = await showAllProducts()


        if (products) {
            res.status(200).json(products)
        } else {
            res.status(404).json("Nenhum produto encontrado!")
        }

    }
}