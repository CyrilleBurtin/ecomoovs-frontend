const user = (state, action) => {

   if(action.type === "LOGIN"){
       return action.user
   } else if (action.type === "LOGOUT"){
       return action.user = false
   } else {
       return state
   }
    
}


export default user