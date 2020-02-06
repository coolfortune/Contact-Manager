import React from 'react';
import ReactDOM from 'react-dom';
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

        <button type="button" id="SearchButton" class="btn btn-outline-primary"  onClick={home} >Home</button>
        <button type="button" id="SearchButton" class="btn btn-outline-primary"  onClick={search} >Search/Edit/Delete Contacts</button>
        <button type="button" id="SearchButton" class="btn btn-outline-primary"  onClick={add} >Add New Contact</button>
        <button type="button" id="SearchButton" class="btn btn-outline-primary"  onClick={logOut} >Logout</button>
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