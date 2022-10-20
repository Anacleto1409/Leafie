import { populateProducts } from "../../src/services/produtos"

export default async (req, res) => {
    await populateProducts()
    res.status(200).json({ message: 'ok' })
}