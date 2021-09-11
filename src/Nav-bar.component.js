import React, { useState } from "react";
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import axios from './axios';
import {removeuser} from './Actions/Auth_actions';
import {useDispatch,useSelector} from 'react-redux';
import {setsublist,setfeed,removedata,settoalsub} from './Actions/Feed_actions';
import './Nav-bar.css';





function Navbar_component() {

    const [subscribtion,setSubscribtion]=useState("");
    const [subscribURL,setSubscribURL]=useState("");
    const [existingsub,setexistingsub]=useState("");
    const dispatch=useDispatch();
    const user=useSelector(state=>state.auth.user)
    const sublist=useSelector(state=>state.feed.usersublist)
    const totalsublist=useSelector(state=>state.feed.totalsublist)


const commonapi=()=>{

    axios.get('/user_subscribelist',{withCredentials: true}).then(function(response){
        if(response.data.statusCode===401){
            alert(response.data.message)
            return
        }
        console.log(response.data)
        dispatch(setsublist(response.data))
    })
    axios.get('/totalsubscribtions_list',{withCredentials: true}).then(function(response){
        if(response.data.statusCode===401){
            alert(response.data.message)
            return
        }
        if(response.data==="please login welcome"){
            return
        }
        dispatch(settoalsub(response.data))
        
      
      })
}


    const addExistingsub=(e)=>{
        e.preventDefault()
        if(existingsub===""){
            return
        }
        console.log(subscribURL)
        axios.post('/existing_subcrition_inser',{
            subid:existingsub
        },{withCredentials: true}).then(function(response){
            if(response.data===false){
                alert("failed try again")
                return
            }
            commonapi()
              axios.post('/user_selected_list',{
                subid:existingsub
            },{withCredentials: true}).then(function(response){
                if(response.data.statusCode===401){
                    alert(response.data.message)
                    return
                }
                dispatch(setfeed(response.data))
            })
          
        })
        
    }
    
   

    const subscribtionfeed=(e)=>{
        e.preventDefault()
        if(!subscribURL){
            return
        }
        axios.post('/rss_subscribe',{
            url:subscribURL
        },{withCredentials: true}).then(function(response){
            if(response.data===false){
                alert("failed try again")
                return
            }
            //window.location.reload();
            console.log("hi")
            console.log(response.data)
            commonapi()
              axios.post('/user_selected_list',{
                subid:response.data
            },{withCredentials: true}).then(function(response){
                if(response.data.statusCode===401){
                    alert(response.data.message)
                    return
                }
                dispatch(setfeed(response.data))
            })
            
        })
    }

    const selectsubscribtion=(e)=>{
        e.preventDefault()
        if (!subscribtion){
            return
        }
        console.log(subscribtion)
        axios.post('/user_selected_list',{
            subid:subscribtion
        },{withCredentials: true}).then(function(response){
            if(response.data.statusCode===401){
                alert(response.data.message)
                return
            }
            dispatch(setfeed(response.data))
        })
    }

    const logout=e=>{
        e.preventDefault()
        console.log("fgf")
        axios.get('/logout',{withCredentials: true}).then(function(response){
            dispatch(removeuser())
            dispatch(removedata())
        })
    }

    const userpisplay=<div><div><h5 style={{color:"rgba(255,255,255,.55)"}}>subscritions</h5>
                        <span><select name="cars" onChange={e=>setSubscribtion(e.target.value)}>
                            <option value={null}>Choose your subscribtion</option>
                            {sublist?.map(item=>(
                                <option key={item.subid} value={item.subid}>{item.title}</option>
                            ))}
                        </select>
                        <button onClick={selectsubscribtion} style={{"borderRadius": "5px"}}>Go</button>
                        </span>
                        </div>
                        {/* ================================== */}
                        <div><h5 style={{color:"rgba(255,255,255,.55)"}}>subscritions you would like</h5>
                        <span><select name="cars" onChange={e=>setexistingsub(e.target.value)}>
                            <option value={null}>Please subscribtion</option>
                            {totalsublist?.map(item=>(
                                <option key={item.subid} value={item.subid}>{item.title}</option>
                            ))}
                        </select>
                        <button onClick={addExistingsub} style={{"borderRadius": "5px"}}>subscribe</button>
                        </span>

                        <Nav.Link href="/home" onClick={logout} >Logout</Nav.Link></div>
                        </div>
    const userdisplay2=<Form inline>
                        <FormControl type="text" onChange={e=>setSubscribURL(e.target.value)} value={subscribURL} placeholder="enter RSS link to subscribe manaully" className="mr-sm-2" />
                        <Button onClick={subscribtionfeed} variant="outline-success" >Subscribe</Button> 
                        
                    </Form>
   
        return (
            <div className="Nav">
                <div className="row">
                    <div className="col-md-12">
                        <Navbar bg="dark" variant="dark" expand="lg" sticky="fixed">
                            <Navbar.Brand href="/">RSS Reader</Navbar.Brand>
                            <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    
                                    <h5 style={{color:"rgba(255,255,255,.55)"}}>{user? "hello "+user.username:"Please login"}</h5>
                                    { !user &&<Nav.Link href="/login">Login</Nav.Link>}
                                    { !user &&<Nav.Link href="/sign-up">Signup</Nav.Link>}
                                    { user && userpisplay}

                                </Nav>
                                    {user && userdisplay2}
                            </Navbar.Collapse>
                        </Navbar>
                        <br />
                    </div>
                </div>
            </div>
        )
    
}

export default Navbar_component;