import React from 'react';


function SignUp()
{

	// STILL TO DO:
	// Align text boxes
	// use create APIs


    var registerName;
    var registerPassword;



	return (

	<div id="registerDiv">
		<form >
            <label for="registerName" class="text text-primary">Enter Username: </label>
	        <input type="text" id="registerName" placeholder="Username" ref={(c) => registerName = c} /><br />
            <label for="registerPassword" class="text text-primary">Enter Password: </label>
	        <input type="password" id="registerPassword" placeholder="Password" ref={(c) => registerPassword = c} /><br />
            <input type="submit" id="registerButton" class="btn btn-primary m-1" value="Register" />
            <a role="button" class="btn btn-warning m-1" href="/" >Go Back</a>
		</form>
	</div>

	);
}

export default SignUp;
