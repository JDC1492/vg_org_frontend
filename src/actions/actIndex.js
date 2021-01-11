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