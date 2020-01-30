import React, { useState } from 'react';

const md5 = require('md5');

function Login(props)
{

    var loginName;
    var loginPassword;

    const [message,setMessage] = useState('');

    const doLogin = async event =>
    {
        event.preventDefault();

        if(!loginName.value || !loginPassword.value)
        {
            setMessage('Please use all required fields');
            return;
        }

        const hashedPass = md5(loginPassword.value);

        // Change 'user' to 'username'
        var js = JSON.stringify({user:loginName.value, password:loginPassword.value});

        try
        {
            const response = await fetch('http://localhost:5000/api/users',
                {method:'POST', body:js, headers:{'Content-Type': 'application/json'}});

            var res = JSON.parse(await response.text());

            if(!res)
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
            <form>
            <label for="loginName" class="text text-primary">Enter Username: </label>
	        <input type="text" id="loginName" placeholder="Username" ref={(c) => loginName = c} /><br />
            <label for="loginPassword" class="text text-primary">Enter Password: </label>
	        <input type="password" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c} /><br />
            <button type="button" id="registerButton" class="btn btn-outline-primary m-1"  onClick={createUser} >Create User</button>
            <input type="submit" id="loginButton"  class="btn btn-primary m-1" value="Log In" onClick={doLogin} />
            </form>
	        <span id="loginResult" class="text text-warning">{message}</span>
        </div>
    );
};

export default Login;
