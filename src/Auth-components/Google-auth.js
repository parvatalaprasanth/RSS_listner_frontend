import React from "react";
import GoogleLogin from 'react-google-login';
import axios from '../axios';
import {setuser} from '../Actions/Auth_actions'
import {useDispatch,useSelector} from 'react-redux';

function Google_auth() {
    
        // var provider=new firebase.auth.GoogleAuthProvide();
        const dispatch=useDispatch();

        const authGoogle=(response)=>{
            console.log(response)
            console.log(response.profileObj)
            axios.post('/google_sign',{
                username:response.profileObj.name,
                email:response.profileObj.email,
                password:"test"
            },{withCredentials: true}).then(function(response){
                if(response.data.statusCode===401){
                    alert(response.data.message)
                    return
                }
                dispatch(setuser(response.data))
                console.log(response.data)
            })
        }

        return (
            <div>
                <GoogleLogin
                clientId="880314697569-70cibgobkt1el1bdfmsffeft8g6pr1hk.apps.googleusercontent.com"
                buttonText="Login"
                onSuccess={authGoogle}
                onFailure={authGoogle}
                cookiePolicy={'single_host_origin'}
                />
            </div>
        );
    
}

export default Google_auth;