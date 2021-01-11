export default function GameReducer(
    state=[], 
    action){
        switch (action.type){
        case 'ADD_GAME':
            return{
                
            }    
            
            default:
                return state
        }
  
}

