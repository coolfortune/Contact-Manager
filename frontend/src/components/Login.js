import React, { useState } from 'react';

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

        var js = JSON.stringify({username:loginName.value, password:loginPassword.value});

        // Try login request
        try
        {
            const response = await fetch('http://localhost:5000/api/users/login',
                {method:'POST', body:js, headers:{'Content-Type': 'application/json'}});

            var res = await response.json();

            if(res.usernameNotFound)
            {
                setMessage('Username not found');
            }
            else if(res.incorrectPassword)
            {
                setMessage('Password combination incorrect');
            }
            else
            {
                // Sets user id to local storage (may be redundant, might remove)
                var userId = res;
                localStorage.setItem('user_data', userId);

                setMessage('');
                // Goes to contacts page with the user's id
                window.location.href = '/contacts/' + userId;
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
        <div id="loginDiv" class="form-group">
            <form class="LoginForm">
                <label for="loginName" class="text text-primary">Enter Username: </label>
                <input type="text" class="form-control" id="loginName" placeholder="Username" ref={(c) => loginName = c} /><br />
                <label for="loginPassword" class="text text-primary">Enter Password: </label>
                <input type="password" class="form-control" id="loginPassword" placeholder="Password" ref={(c) => loginPassword = c} /><br />
                <div class="buttons">
                    <button type="button" id="registerButton" class="btn btn-outline-primary"  onClick={createUser} >Create User</button>
                    <input type="submit" id="loginButton"  class="btn btn-primary m-2" value="Log In" onClick={doLogin} />
                </div>
            </form>
	        <span id="loginResult" class="badLogin1 text text-warning">{message}</span>
        </div>
    );
};

export default Login;
