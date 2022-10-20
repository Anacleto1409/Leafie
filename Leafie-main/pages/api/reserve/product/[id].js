import { verifyIfReserve } from "../../../../src/services/reservas";
import { showProductById } from "../../../../src/services/produtos";

export default async function handler(req, res) {
    //verifica se o produto foi reservado
    if (req.method === "GET") {

        const id = req.query.id


        const reserved = await verifyIfReserve(id)
        const product = await showProductById(id)



        if (product) {
            if (reserved) {

                res.status(200).json(true)

            } else {
                res.status(404).json(false)
            }

        } else {
            res.status(404).json("O produto inserido não existe!")
        }
    }
}