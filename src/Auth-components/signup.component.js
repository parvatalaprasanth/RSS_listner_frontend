import React, { useState ,useEffect} from "react";
import axios from '../axios';
import {setuser} from '../Actions/Auth_actions'
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';


function Signup(){

        const [username,setUsername]=useState("");
        const [email,setEmail]=useState("");
        const [password,setPassword]=useState("");
        const dispatch=useDispatch();
        var history=useHistory();
        const user=useSelector(state=>state.auth.user);
       

        useEffect(()=>{
            if(user){
                    history.replace("/");
                }
        },[user])

        const signUP=e=>{
            e.preventDefault()
            console.log(username,email,password)
            axios.post('/signup',{
                email:email,
                password:password,
                username:username
            },{withCredentials: true}).then(function(response){
                if(response.data.statusCode===401){
                    alert(response.data.message)
                    return
                }
                setEmail("")
                setPassword("")
                setUsername("")
                dispatch(setuser(response.data))
            })
           
        }

        return (
            <form onSubmit={signUP}>
                <h3>Sign Up</h3>

                <div className="form-group">
                    <label>Username</label>
                    <input type="text" value={username} onChange={e=>setUsername(e.target.value)} className="form-control" placeholder="First name" required />
                </div>
                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" placeholder="Enter email" required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="Enter password" required/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
            </form>
        );
    
}

export default Signup;