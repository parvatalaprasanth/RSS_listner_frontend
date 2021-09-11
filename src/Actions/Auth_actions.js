export const setuser=(user)=>{
    return{
      type:'SETUSER',
      payload:user
    };
  };

  export const removeuser=()=>{
    return{
      type:'REMOVEUSER',
      payload: null
    };
  };