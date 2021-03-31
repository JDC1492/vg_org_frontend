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
        // case 'GRAB_GAME':
        //     let selectedGame = state.filter(game => game.id === action.payload)
        //     debugger
        //     return [...selectedGame]   
        default:
            return state
        }
}