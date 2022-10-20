import { ObjectId } from "mongodb";
import { CLIENT_STATIC_FILES_RUNTIME_REACT_REFRESH } from "next/dist/shared/lib/constants";
import { getMongoCollection } from "./mongodb";

const DB_NAME = "hack404";
const COLLECTION_NAME = "reservas";

//adiciona uma reserva ao banco de dados
async function insertNewReserve(reserve) {
  const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME);
  return (await collection.insertOne(reserve)).insertedId;
}

//deletar uma reserva
async function deleteOneReserveById(reserveId) {
  const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME);
  return await collection.deleteOne({ _id: new ObjectId(reserveId) });
}

//obter reserva pelo id
async function getReserveById(reserveId) {
  const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME);
  return await collection.findOne({ _id: new ObjectId(reserveId) });
}

//mostra todas as reservas armazenadas no sistema
async function getAllReserves() {
  const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME);
  return await collection.find().toArray();
}

//retorna um id de produto reservado
async function getProductOfReserveById(productId) {
  const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME);
  const a = await collection.findOne({ productId: productId });

  return a;
}

export {
  insertNewReserve,
  deleteOneReserveById,
  getAllReserves,
  getReserveById,
  getProductOfReserveById,
};
