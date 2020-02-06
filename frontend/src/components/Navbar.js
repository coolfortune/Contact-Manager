import React from 'react';
import ReactDOM from 'react-dom';
import ContactsPage from '../pages/ContactsPage';
import ContactList from './ContactList';
import AddForm from './AddForm';
import SearchForm from './SearchForm';

function Navbar(props)
{

    const home = async event =>
    {
        ReactDOM.render(
        <div>
            <div className="ContactList">
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

        <button type="button" id="SearchButton" class="btn btn-outline-primary"  onClick={home} >Home</button>
        <button type="button" id="SearchButton" class="btn btn-outline-primary"  onClick={search} >Search</button>
        <button type="button" id="SearchButton" class="btn btn-outline-primary"  onClick={add} >Add New Contact</button>
        <button type="button" id="SearchButton" class="btn btn-outline-primary"  onClick={logOut} >Logout</button>
    </div>
    );
}

//    const ListStyle = {
// 	position: 'fixed',
// 	width: '30%',
// 	bottom: '30vh',
// 	right: '30vh',
// }

export default Navbar; 