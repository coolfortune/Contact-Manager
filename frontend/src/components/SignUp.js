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
		else if(!(registerPassword.value === verifyPassword.value))
		{
			setMessage('Passwords do not match');
			return;
		}

		try 
		{
			return;
		}
		catch(e)
		{
			alert(e.toString());
		}
	};


	return (
	<div id="registerDiv">
		<form >
            <label for="registerName" class="text text-primary">Enter Username: </label>
	        <input type="text" id="registerName" placeholder="Username" ref={(c) => registerName = c} /><br />
            <label for="registerPassword" class="text text-primary">Enter Password: </label>
	        <input type="password" id="registerPassword" placeholder="Password" ref={(c) => registerPassword = c} /><br />
            <label for="verifyPassword" class="text text-primary">Verify Password: </label>
	        <input type="password" id="verifyPassword" placeholder="Password" ref={(c) => verifyPassword = c} /><br />
            <input type="submit" id="registerButton" class="btn btn-primary m-1" value="Register" onClick={doRegister} />
            <a role="button" class="btn btn-warning m-1" href="/" >Go Back</a>
		</form>
	        <span id="registerResult" class="text text-warning">{message}</span>
	</div>
	);
}

export default SignUp;
