import React from 'react';
import SignUp from '../components/SignUp';
import RegisterTitle from '../components/RegisterTitle';


function CreateUser()
{
    return(
        <div class="container-fluid">
            <RegisterTitle />
            <SignUp />
        </div>
    );
};

export default CreateUser;
