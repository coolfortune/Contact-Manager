import React from 'react';

import PageTitle from '../components/PageTitle';
import Login from '../components/Login';
import '../styles.css';

const LoginPage = (props) =>
{

    return(
        <div className="LoginPage">
            <PageTitle /> 
            <Login />
        </div>
    );
};

export default LoginPage;
