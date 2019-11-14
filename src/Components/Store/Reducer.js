const reducer = (state = {}, action) => {

   if(action.type === "LOGIN"){
       return action.user
   } else if (action.type === "LOGOUT"){
       return action.user = {}
   } else {
       return state
   }
    
}


export default reducer