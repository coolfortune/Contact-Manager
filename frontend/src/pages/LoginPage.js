import React from 'react';

import PageTitle from '../components/PageTitle';
import Login from '../components/Login';

const LoginPage = (props) =>
{

    return(
        <div class="container-fluid">
            <PageTitle />
            <Login />
        </div>
    );
};

export default LoginPage;
