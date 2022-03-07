import React, { useContext, useState } from 'react';
import { UserContext } from '../Context/UserContext';
import { useNavigate } from 'react-router-dom';

export default function Login() {
    const navigate = useNavigate();

    //תייבא את הפונקציה הרלוונטית מתוך הקונטקסט
    const { FindUser } = useContext(UserContext);


    const [loginInfo, SetLoginInfo] = useState({
        email: '', password: '',
    })

    const LoginUser = (event) => {
        try {
            event.preventDefault();
            console.log('loginInfo', loginInfo)
            let res = FindUser(loginInfo.email, loginInfo.password);
            if(res)
                navigate('/profile');
            else    
                alert('user not found');
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <form onSubmit={LoginUser}>
                <div>
                    <label htmlFor="email">Email: </label>
                    <input id="email" type="email"
                        value={loginInfo.email}
                        onChange={(event)=>SetLoginInfo(details=>({...details, email: event.target.value}))}
                    />
                </div>
                <div>
                    <label htmlFor="pass">Password: </label>
                    <input id="pass" type="password"
                        value={loginInfo.password}
                        onChange={(event)=>SetLoginInfo(details=>({...details, password: event.target.value}))}
                    />
                </div>
                <div>
                    <input type="submit" value="Login" />
                </div>
            </form>
        </div>
    )
}
