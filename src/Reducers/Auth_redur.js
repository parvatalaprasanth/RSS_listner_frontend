const initialState={
    user:null
}

const auth_reducer=(state=initialState,action)=>{
    switch(action.type){
        case "SETUSER":
            return {
                user:action.payload
            }
        case "REMOVEUSER":
            return {
                user:null
            }
        default:
            return state
    }
}

export default auth_reducer;