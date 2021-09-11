import React, { useState ,useEffect} from "react";
import axios from '../axios';
import {setuser} from '../Actions/Auth_actions'
import {useDispatch,useSelector} from 'react-redux';
import {useHistory} from 'react-router-dom';
import Google_auth from './Google-auth';

function Login() {
    
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const dispatch=useDispatch();
    var history=useHistory();
    const user=useSelector(state=>state.auth.user)
    // if(user){
    //     history.replace("/");
    // }

    useEffect(()=>{
        if(user){
                history.replace("/");
            }
    },[user])

    const signIN=e=>{
        e.preventDefault()
        
        axios.post('/login',{
            email:email,
            password:password
        },{withCredentials: true}).then(function(response){
            if(response.data.statusCode===401){
                alert(response.data.message)
                return
            }
            setEmail("")
            setPassword("")
            dispatch(setuser(response.data))
        })
    }


        return (
            <form onSubmit={signIN}>
                <h3>Sign In</h3>

                <div className="form-group">
                    <label>Email address</label>
                    <input type="email" value={email} onChange={e=>setEmail(e.target.value)} className="form-control" placeholder="Enter email" required/>
                </div>

                <div className="form-group">
                    <label>Password</label>
                    <input type="password" value={password} onChange={e=>setPassword(e.target.value)} className="form-control" placeholder="Enter password" required/>
                </div>

                <button type="submit" className="btn btn-primary btn-block">Submit</button> 
               <Google_auth/>
            </form>
        );
    
}

export default Login;