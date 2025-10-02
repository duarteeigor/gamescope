const API_KEY = process.env.RAWG_API_KEY!;

export async function getGames(order?: string, plat?: string){
    let url = `https://api.rawg.io/api/games?key=${API_KEY}`

    if(order) url += `&ordering=${order}`
    if(plat) url += `&platforms=${plat}`

    try {
        const response = await fetch(url, {next: {revalidate: 320}})
        if(!response.ok){
            throw new Error("Erro ao buscar jogos")
        }
        const data = await response.json()
        return await data.results;
    } catch (error) {
        console.error(error)
    }
}

export async function getGameById(id: string | number){
    const url = `https://api.rawg.io/api/games/${id}?key=${API_KEY}`

    try {
        const response = await fetch(url, {next: {revalidate: 320}})
        const data = await response.json();
        return data;
    } catch (error) {
        throw new Error("Erro ao buscar jogo pelo id")
    }
}

export async function searchGames(name: string){
    let url = `https://api.rawg.io/api/games?key=${API_KEY}&search=%${name}%`

    try {
        const response = await fetch(url, {next:{revalidate: 320}})
        const data = await response.json()
        return await data.results
    } catch (error) {
        throw new Error("Erro ao buscar pelo nome")
    }
}