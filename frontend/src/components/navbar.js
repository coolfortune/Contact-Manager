import React from 'react';
import ReactDOM from 'react-dom';
import SearchForm from './SearchForm';
import ContactsPage from '../pages/ContactsPage';
import AddForm from './AddForm';

function Navbar(props)
{
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
           <button type="button" id="SearchButton" class="btn btn-outline-primary"  onClick={search} >Search/Edit/Delete Contacts</button>
           <button type="button" id="SearchButton" class="btn btn-outline-primary"  onClick={add} >Add New Contact</button>
           <button type="button" id="SearchButton" class="btn btn-outline-primary"  onClick={logOut} >Logout</button>
       </div>
       );
   }

export default Navbar;