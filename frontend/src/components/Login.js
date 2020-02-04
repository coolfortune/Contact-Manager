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

        // Change 'user' to 'username'
        var js = JSON.stringify({username:loginName.value, password:loginPassword.value});

        try
        {
            const response = await fetch('http://localhost:5000/api/users',
                {method:'POST', body:js, headers:{'Content-Type': 'application/json'}});

            var res = await response.text();

            if(res === "")
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
        <div id="loginDiv" class="form-group">

            <form>
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
