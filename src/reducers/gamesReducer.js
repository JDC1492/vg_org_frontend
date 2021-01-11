export default function gamesReducer(
    state=[{id:15, title:"Legend of Dragoon",
        release_year:"2001",
        console:"Playstation",
        developer:"Japan Studio", 
        genre:"JRPG", 
        description:"Dragons and Knights",
        cover_art:"N/A"
        }], action){
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

