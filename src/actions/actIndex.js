export const fetchGames = () => {
    return (dispatch) => {
        return fetch('http://localhost:3000/games')
            .then(resp => resp.json())
            .then(games => {
                dispatch({type: "SET_GAMES", payload: games})
            })
    }
}

export const addGame = game => {
    return {
        type:'ADD_GAME', payload: game
    }
}

export const deleteGame = gameId => {
    return {
        type:'REMOVE_GAME', payload: gameId
    }
}