import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import ContactsPage from '../pages/ContactsPage'
import axios from 'axios'
import ContactList from './ContactList'

export class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
			firstName: "",
			lastName: "",
			phoneNumber: null,
			address: "",
			email: ""
		};

        this.handleChange = this.handleChange.bind(this);
        this.show = this.show.bind(this);
    }


    
    getStyle = () => {
        return {
            background : 'rgb(36, 2, 49)',
            color: 'yellow',
            padding: '3px',
            borderBottom: '1px #ccc dotted'
        }
    }

    handleChange(event) {
		const name = event.target.name;
		const value = event.target.value;
        console.log()
	}

    show = (a) => {

        ReactDOM.render(
           <div >
                <div class="form-group">
                <form class="addForm">
        
                <h4 for="loginName" class="text text-primary">{a.firstName} {a.lastName}'s Contact Info</h4>
                <input
                    type="text"
                    name="firstName"
                    class="form-control"
                    onChange={this.handleChange}
                    placeholder={a.firstName}
                />
                <input
                    type="text"
                    name="lastName"
                    onChange={this.handleChange}
                    class="form-control"
                    placeholder={a.lastName}
                />
                <input
                    type="text"
                    name="phoneNumber"
                    class="form-control"
                    onChange={this.handleChange}
                    placeholder={a.phoneNumber}
                />
                <input
                    type="text"
                    name="address"
                    placeholder={a.address}
                    class="form-control"
                />
                <input
                    type="text"
                    name="email"
                    placeholder={a.email}
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
            </div>, 
            <ContactsPage />, 

        </div>, 
            document.getElementById('root'));
    
    }

    deleteContact = (_id) => {

        if(window.confirm("You are about to delete " + this.props.contact.firstName + " " + this.props.contact.lastName + ". Confirm?"))
         {  
         const body = { _id : _id }
        const userId = window.location.pathname;
        const url = "http://localhost:5000/api" + userId;
        console.log(body)

        axios.delete(url, { data: body })
        
        .catch(err => console.log(err))
        // ReactDOM.render(
        //     <div>
        //         {/* <div className="ContactList">
        //             <ContactList />
        //         </div> */}
        //         <ContactsPage />, 
    
        //     </div>,    
        //     document.getElementById('root'));
    }

      
    };


         

    render() {
        const { firstName, lastName, _id } = this.props.contact;
        return (
            <div style = {this.getStyle()}>
                <p>
                    <button type="button" style={btnStyle} onClick = {() => this.deleteContact(_id)}>x</button>
                    <button style={editBtnStyle} onClick={() => this.show(this.props.contact)}>Edit</button>
                </p>
                    {firstName} {lastName}
                
            </div>
        )
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}

const editBtnStyle = {
    background: 'yellow',
    color: 'rgb(36, 2, 49)',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    padding: '3px',
    float: 'right',
    right: '20vh',
    positon: 'relative'
}

const btnStyle = {
    background: '#ff4136',
    color: '#fff',
    border: 'none',
    padding: '3px 11px',
    borderRadius:  '70%',
    cursor: 'solid',
    float: 'right'
}


export default Contact
