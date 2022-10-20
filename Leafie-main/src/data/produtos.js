import { ObjectId } from "mongodb";
import { getMongoCollection } from "./mongodb";

const DB_NAME = "hack404";
const COLLECTION_NAME = "produtos";

//insere um produto na base de dados
async function insertNewProduct(product) {
  const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME);
  return (await collection.insertOne(product)).insertedId;
}

export async function insertNewProducts(products) {
  const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME);
  return await collection.insertMany(products);
}

//deleta um produto pelo seu id
async function deleteProductById(productId) {
  const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME);
  return await collection.deleteOne({ _id: new ObjectId(productId) });
}

//obter produto pelo id
async function getProductById(productId) {
  const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME);
  return await collection.findOne({ _id: new ObjectId(productId) });
}

//mostra todas as produtos armazenados no sistema
async function getAllProducts() {
  const collection = await getMongoCollection(DB_NAME, COLLECTION_NAME);
  return await collection.find().toArray();
}

export { insertNewProduct, deleteProductById, getProductById, getAllProducts };
