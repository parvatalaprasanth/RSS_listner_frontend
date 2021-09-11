export const setsublist=(data)=>{
    return{
      type:'SETUSERSUBLIST',
      payload:data
    };
  };

  

export const setfeed=(data)=>{
    return{
      type:'SETFEED',
      payload:data
    };
  };

  export const settoalsub=(data)=>{
    return{
      type:'SETTOTALSUBLIST',
      payload:data
    };
  };


  export const removedata=()=>{
    return{
      type:'REMOVE',
      payload: null
    };
  };