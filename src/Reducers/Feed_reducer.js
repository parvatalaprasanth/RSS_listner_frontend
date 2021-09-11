const initialState={
    feeddata: [],
    usersublist: [],
    totalsublist:[]
}

const feed_reducer=(state=initialState,action)=>{
    switch(action.type){
        case "SETFEED":
            if (action.payload==="please login welcome"){
                return {
                    ...state,feeddata:[]
                }
            }
            return {
                ...state,feeddata:action.payload
            }
        case "SETUSERSUBLIST":
            if (action.payload==="please login welcome"){
                return {
                    ...state,usersublist:[]
                }
            }
            return {
                ...state,usersublist:action.payload
            }
        case "SETTOTALSUBLIST":
            var list= action.payload.filter( x => !state.usersublist.filter( y => y.subid === x.subid).length);
            return {
                ...state,totalsublist:list
            }
        case "REMOVE":
            console.log("remove")
            return {
                ...state,feeddata: [],
                usersublist: [],
                totalsublist:[]
            }
        default:
            return state
    }
}

export default feed_reducer;