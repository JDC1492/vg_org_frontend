export const addGame = game => {
    return {
        type:'ADD_GAME', payload: game
    }
}
export const deleteGame = game => {
    return {
        type:'REMOVE_GAME', payload: game
    }
}