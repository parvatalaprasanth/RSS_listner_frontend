import FeedCard from './FeedCard';
import React, { useEffect} from "react";
import './welcome.css';
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {setsublist,setfeed,settoalsub} from '../Actions/Feed_actions';
import axios from '../axios';
import Search from './Search'



function Welcome() {
  
    
    var history=useHistory();
    const user=useSelector(state=>state.auth.user);
    const feeddata=useSelector(state=>state.feed.feeddata)
    const dispatch=useDispatch();
    

  useEffect(()=>{
    if(!user){
      history.replace("/login");
  }
  },[user])

  useEffect(()=>{
    axios.get('/user_subscribelist',{withCredentials: true}).then(function(response){
      if(response.data.statusCode===401){
          alert(response.data.message)
          return
      }
      dispatch(setsublist(response.data))
  })

  axios.get('/user_default_list',{withCredentials: true}).then(function(response){
    if(response.data.statusCode===401){
        alert(response.data.message)
        return
    }
    dispatch(setfeed(response.data))

})

axios.get('/totalsubscribtions_list',{withCredentials: true}).then(function(response){
  if(response.data.statusCode===401){
      alert(response.data.message)
      return
  }
  dispatch(settoalsub(response.data))

})

  
  },[])
    
    return (
      <div className="Feed">
        <Search/>
        <div className="Feeddata">
        {feeddata?.length===0 && <h1>Please subscribe to see content</h1>}
        {feeddata?.map(item=>(
          <FeedCard key={item.dataid} content={item.feed_content} title={item.title} link={item.link} pubdate={item.pubdate} authur={item.authur}/>
        ))}
        </div>
      </div>
    );
  }
  
  export default Welcome;
  