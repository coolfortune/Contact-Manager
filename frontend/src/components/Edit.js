import React from 'react';
import ReactDOM from 'react-dom';
import EditForm from './EditForm';
import ContactsPage from '../pages/ContactsPage';

function Edit()
{
   ReactDOM.render(
        <div> 
            <ContactsPage />,
            <EditForm contact/>
        </div>,    
        document.getElementById('root'));
};

export default Edit;