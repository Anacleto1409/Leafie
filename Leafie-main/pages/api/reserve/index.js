import {
  createNewReserve,
  showAllReserves,
} from "../../../src/services/reservas";

export default async function handler(req, res) {
  //cria uma reserva e retorna seu id
  if (req.method === "POST") {
    const reserve = req.body;

    if (reserve) {
      const NewReserve = await createNewReserve(reserve);
      res.status(200).json(NewReserve);
    } else {
      res.status(404).json("Não foi possível inserir uma nova reserva!");
    }
    //obter todas as reservas
  } else if (req.method === "GET") {
    const reserves = await showAllReserves();
    if (reserves) {
      res.status(200).json({ reservations: reserves });
    } else {
      res.status(404).json("Nenhuma reserva registrada!");
    }
  }
}
