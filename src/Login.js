 
import React from 'react'
import './Login.css'
import { auth, provider } from './firebase'

import { Button } from '@material-ui/core'

function Login() {

    const signIn = () => {
        auth.signInWithPopup(provider).catch((error) => alert(error.message));
    }

    return (
        <div className="login">
            
            <div className="login__logo">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/7e/Discord_Color_Text_Logo_No_Padding.svg/738px-Discord_Color_Text_Logo_No_Padding.svg.png" alt="" srcset=""/>
            </div>

            <Button onClick={signIn}>SignIn</Button>

        </div>
    )
}

export default Login;
