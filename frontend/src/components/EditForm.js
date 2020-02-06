import React from 'react';
// import ReactDOM, { render } from 'react-dom';
// import ContactsPage from '../pages/ContactsPage';

function EditForm ()
{
    
    // var first = props.firstName;
    // var last = props.lastName;
    
    return(
        <div class="form-group">
        <form class="addForm">

        <label for="loginName" class="text text-primary">{this.props.contact.firstName} </label>
        <input
            type="text"
            name="firstName"
            placeholder="First Name"
            class="form-control"
        />
        <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            class="form-control"
        />
        <input
            type="text"
            name="phoneNumber"
            placeholder="Phone Number"
            class="form-control"
        />
        <input
            type="text"
            name="address"
            placeholder="Address"
            class="form-control"
        />
        <input
            type="text"
            name="email"
            placeholder="Email"
            class="form-control"
        />
        <button
            type="submit"
            id="AddButton"
            class="btn btn-primary"
        >
            Edit Contact
        </button>
        <a
            type="button"
            id="CancelButton"
            class="btn btn-outline-primary"
            href={window.location.pathname}
        >
            Cancel
        </a>

        </form>
    </div>);

};

export default EditForm;