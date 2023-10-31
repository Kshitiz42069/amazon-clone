import React, { useState } from 'react'
import './Login.css'
import {Link , useNavigate} from 'react-router-dom';
import { auth } from './firebase';


function Login() {
    const history =useNavigate();
   const [email, Setemail] = useState('');
   const [password, Setpassword] = useState('');
   const signIn = e =>{
        e.preventDefault(); 
        auth
        .signInWithEmailAndPassword(email,password)
        .then(auth =>{
            history('/')
        })
        .catch(error => alert(error.message))

   }
   const register = e=>{
    e.preventDefault();
    auth
    .createUserWithEmailAndPassword(email,password)
    .then((auth)=>{
        if(auth){
            history('/')
        }
    })
    .catch(error =>alert(error.message))
    //some fancy firebase register
    }
  return (
    <div className='login'>
        <Link to='/'>
            <img className='login_logo' src="https://pngimg.com/uploads/amazon/amazon_PNG1.png" alt="amazon" />
        </Link>
        <div className="login_container">
            <h1>Sign-in</h1>
            <form action="">
                <h5>Email</h5>
                <input type="text" value={email} onChange={e => Setemail(e.target.value)}/>
                <h5>Password</h5>
                <input type="password" value={password} onChange={e =>Setpassword(e.target.value)}/>
                <button type='submit' onClick={signIn} className='login_signin'>Sign in</button>
            </form>
            <p>
                *By signing in you agree to amazon clone conditions of Use & Sale.Please see our privacy policy,our Cookies notice
                and out interest based Ads.
            </p>
            <button onClick={register} className='login_register'>Create new amazon account</button>
        </div>
    </div>
  )
}

export default Login