import React, { useState } from 'react';


function SignUp()
{

	// STILL TO DO:
	// Align text boxes
	// use create APIs


    var registerName;
	var registerPassword;
	var verifyPassword;

	const [message,setMessage] = useState('');

	const doRegister = async event => {
		event.preventDefault();

        if(!registerName.value || !registerPassword.value || !verifyPassword.value)
        {
            setMessage('Please use all required fields');
            return;
		}
		else if(registerPassword.value !== verifyPassword.value)
		{
			setMessage('Passwords do not match');
			return;
		}

		var jsUser = JSON.stringify({username:registerName.value});
		var js = JSON.stringify({username:registerName.value, password:registerPassword.value});
		
		try 
		{
            const fstResponse = await fetch('http://localhost:5000/api/users',
                {method:'POST', body:jsUser, headers:{'Content-Type': 'application/json'}});

			var res = await fstResponse.text();

			if(!(res === "[]"))
			{
				console.log(res.toString());
				setMessage('This account already exists, please login');
				return;
			}

            const sndResponse = await fetch('http://localhost:5000/api/users/register',
                {method:'POST', body:js, headers:{'Content-Type': 'application/json'}});

			var result = JSON.parse(await sndResponse.text());
			console.log(result);
			
			setMessage('Account successfully created');
			return;
		}
		catch(e)
		{
			console.log(e);
			return;
		}
	};


	return (
	<div id="registerDiv">
		<form class="Signup" >
            <label for="registerName" class="text text-primary">Enter Username: </label>
	        <input type="text" class="form-control" id="registerName" placeholder="Username" ref={(c) => registerName = c} /><br />
            <label for="registerPassword" class="text text-primary">Enter Password: </label>
	        <input type="password" class="form-control" id="registerPassword" placeholder="Password" ref={(c) => registerPassword = c} /><br />
            <label for="verifyPassword" class="text text-primary">Verify Password: </label>
	        <input type="password" class="form-control" id="verifyPassword" placeholder="Password" ref={(c) => verifyPassword = c} /><br />
            <a role="button" class="btn btn-outline-warning" href="/" >Go Back</a>
            <input type="submit" id="registerButton" class="btn btn-primary m-2" value="Register" onClick={doRegister} />
		</form>
	        <span id="registerResult" class="text text-warning badLogin2">{message}</span>
	</div>
	);
}

export default SignUp;
