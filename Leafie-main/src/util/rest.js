export async function fazPedido(url, method, body) {
    const res = await fetch(url, {
        method: method,
        headers: {
            "Content-Type": "aplication/json"
        },
        body: JSON.stringify(body)
    })
    if (res.status === 204) return true
    const json = await res.json()
    return json
}