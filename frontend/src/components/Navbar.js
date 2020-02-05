import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import ContactsPage from '../pages/ContactsPage';
import ContactList from './ContactList';
import AddForm from './AddForm';

function Navbar(props)
{

    const home = async event =>
    {
        ReactDOM.render(
        <div>
            <div style={ListStyle}>
                <ContactList />
            </div>
            <ContactsPage />, 

        </div>,    
        document.getElementById('root'));

    }
    const search = async event =>
    {
        ReactDOM.render(
        <div>
            <SearchForm />,
            <ContactsPage />, 

        </div>,    
        document.getElementById('root'));

    }

    const add = async event =>
    {
        ReactDOM.render(
            <div>
                <AddForm />,
                <ContactsPage />, 
            </div>,    
            document.getElementById('root'));

    }

    const logOut = async event =>
    {
        window.location.href = '/';
    }

    return(
     <div className="navbar">
        <a href=''><i class="fa fa-fw fa-search"></i> Search/Edit/Delete Contacts</a> 
        <a href=''><i class="fa fa-fw fa-envelope"></i> Add New Contact</a> 
        <a href='/'><i class="fa fa-fw fa-home"></i> Logout</a> 
    </div>
    );
        
   }

   const ListStyle = {
	position: 'fixed',
	width: '50%',
	bottom: '0px',
	right: '0',
}

export default Navbar; 