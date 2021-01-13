export default function gamesReducer(
    state=[], action){
        switch (action.type){
        case 'SET_GAMES':
            return[...action.payload]
        case 'ADD_GAME':
            return[...state, action.payload]  
        case 'REMOVE_GAME':
            let newGames = state.filter(game => game.id !== action.payload)
            return[...newGames] 
        case 'GRAB_GAME':
            let game = state.find(game => game.id === action.payload)
            return[...game]  
        default:
            return state
        }
}

