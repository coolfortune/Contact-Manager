import React from 'react';
import SignUp from '../components/SignUp';
import RegisterTitle from '../components/RegisterTitle';
import '../styles.css';


function RegisterPage()
{
    return(
        <div className="RegisterPage">
            <RegisterTitle />
            <SignUp />
        </div>
    );
};

export default RegisterPage;
