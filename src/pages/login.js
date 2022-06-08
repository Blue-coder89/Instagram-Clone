import React ,{useState,useContext} from 'react'
import {useNavigate} from 'react-router-dom'
import FirebaseContext from '../context/firebase.js'
function Login() {
    const history = useNavigate();
    const firebase = useContext(FirebaseContext);
  return (<><p>I am a login Page</p></>);
}

export default Login;
