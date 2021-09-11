import React, {  useState} from "react";
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import {setfeed} from '../Actions/Feed_actions';
import axios from '../axios';
import './Search.css';



function Search() {
  
    
   
    const [searchInput,setsearchInput]=useState("");

    const dispatch=useDispatch();
    
    const Searchdata=(e)=>{
        e.preventDefault()
        //console.log(searchInput)
        axios.post('/rss_search',{
          value:searchInput
      },{withCredentials: true}).then(function(response){
          if(response.data.statusCode===401){
              alert(response.data.message)
              return
          }
          dispatch(setfeed(response.data))
      })
    }
  
    return (
      <div className="Search-feed">
        <form onSubmit={Searchdata}>
        <input type="text" onChange={e=>setsearchInput(e.target.value)}/>
        <button type="submit">Search </button>
        </form>
      </div>
    );
  }
  
  export default Search;