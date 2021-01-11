export default function gamesReducer(
    state=[{title:"Legend of Dragoon", id:1}], action){
        switch (action.type){
        case 'ADD_GAME':
            return[...state, action.payload]  
        case 'REMOVE_GAME':
            let newGames = state.filter(game => game.id !== action.payload)
            return[...newGames]   
        default:
            return state
        }
}

