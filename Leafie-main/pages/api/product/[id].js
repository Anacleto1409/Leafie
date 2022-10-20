import { moveProductToTrashById, showProductById } from "../../../src/services/produtos";

export default async function handler(req, res) {
    //deletar um produto 
    if (req.method === "DELETE") {

        const id = req.query.id

        const product = showProductById(id)

        if (product) {
            await moveProductToTrashById(id)
            res.status(200).json("Apagado.")
        } else {
            res.status(404).json("Produto não encontrado!")
        }

        //obter um produto pelo id
    } else if (req.method === "GET") {

        const id = req.query.id

        const product = await showProductById(id)
        if (product) {
            res.status(200).json(product)
        } else {
            res.status(404).json("Produto não encontrado!")
        }

    }
}
