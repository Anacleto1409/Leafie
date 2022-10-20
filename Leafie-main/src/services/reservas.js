import { deleteOneReserveById, insertNewReserve, getReserveById, getAllReserves, getProductOfReserveById } from "../data/reservas";


//cria uma reserva
async function createNewReserve(data) {
    const reserve = await insertNewReserve(data)

    /*
        name,
        contact,
        productId,
        dayMatch
    */

    return reserve
}

//verifica se o produto foi reservado e retorna seu id
async function verifyIfReserve(productId) {
    const product = await getProductOfReserveById(productId)
    return product
}

function checkIfProductIsReserved(productId) {
    const p = verifyIfReserve(id)
    return Boolean(p)
}





//deleta uma reserva pelo id
async function moveReserveToTrashById(reserveId) {
    return deleteOneReserveById(reserveId)

}

//mostrar reserva pelo id
async function showReserveById(reserveId) {
    const reserveOne = getReserveById(reserveId)
    if (reserveOne === undefined) {
        return "código inexistente"
    }
    return reserveOne
}

//obter todas as reservas do sistema
async function showAllReserves() {
    const reserves = await getAllReserves()
    if (reserves == undefined) {
        return "Nenhuma reserva registrada!"
    }
    return reserves
}

export {
    createNewReserve,
    moveReserveToTrashById,
    showReserveById,
    showAllReserves,
    verifyIfReserve,
    checkIfProductIsReserved
}

/*
async function pullCloth(pathToImage, color, type, slot, title) {
    const cloth = await insertClothing({
        pathToImage,
        title,
        slot, //top, bottom, shoes
        type,
        color
    })
    //todos os slots começam inicialmente com false
    return cloth
}

*/