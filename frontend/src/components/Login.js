import React, { useState } from 'react';
import CreateUser from '../pages/CreateUser';

const md5 = require('md5');

function Login(props)
{

    var loginName;
    var loginPassword;

    const [message,setMessage] = useState('');

    const doLogin = async event =>
    {
        event.preventDefault();

        const hashedPass = md5(loginPassword.value);

        var js = '{"username":"'
            + loginName.value
            + '","password":"'
            + hashedPass
            +'"}';

        try
        {
            const response = await fetch('http://localhost:3000/api/users',
                {method:'POST',body:js,headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if( res.id <= 0 )
            {
                setMessage('User/Password combination incorrect');
            }
            else
            {
                var user = {firstName:res.firstName,lastName:res.lastName,id:res.id}
                localStorage.setItem('user_data', JSON.stringify(user));

                setMessage('');
                window.location.href = '/contacts';
            }
        }
        catch(e)
        {
            alert(e.toString());
            return;
        }

    };

    const createUser = async event =>
    {
        window.location.href = '/register';
    }

    return(
        <div id="loginDiv">
            <form onSubmit={doLogin}>
	        <span id="inner-title">PLEASE LOG IN</span><br />
	        <input type="text" id="loginName" placeholder="Username" ref={(c) => loginName = c} /><br />
	        <input type="password" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c} /><br />
            <input type="submit" id="loginButton" class="buttons" value = "Do It" onClick={doLogin} />
            <input type="submit" id="loginButton" class="buttons" value = "Create User" onClick={createUser} />
            </form>
	        <span id="loginResult">{message}</span>
        </div>
    );
};

export default Login;
