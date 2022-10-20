import { moveReserveToTrashById, showReserveById } from "../../../src/services/reservas";

export default async function handler(req, res) {
    //deletar uma nova reserva
    if (req.method === "DELETE") {
        const id = req.query.id

        const reserve = await showReserveById(id)

        if (reserve) {
            await moveReserveToTrashById(id)
            res.status(200).json("Apagada.")
        } else {
            res.status(404).json("Reserva não encontrada!")
        }


        //obter reserva pelo id
    } else if (req.method === "GET") {
        const id = req.query.id

        const reserve = await showReserveById(id)

        if (reserve) {
            res.status(200).json(reserve)
        } else {
            res.status(404).json("Reserva não encontrada!")
        }
    }
}
