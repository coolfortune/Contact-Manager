import React from 'react';

function Navbar()
{
    return(
     <div className="navbar">
        <a href='ContactsPage'><i class="fa fa-fw fa-search"></i> Search/Edit/Delete Contacts</a> 
        <a href='ContactsPage'><i class="fa fa-fw fa-envelope"></i> Add New Contact</a> 
        <a href='ContactsPage'><i class="fa fa-fw fa-home"></i> Logout</a> 
    </div>
    );
}

export default Navbar;