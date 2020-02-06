import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import PropTypes from 'prop-types'
import EditForm from './EditForm'
import ContactsPage from '../pages/ContactsPage'

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

    getSyle = () => {
        return {
            background : '#f4f4f4',
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
                    value={a.firstName}
                />
                <input
                    type="text"
                    name="lastName"
                    onChange={this.handleChange}
                    class="form-control"
                    value={a.lastName}
                />
                <input
                    type="text"
                    name="phoneNumber"
                    class="form-control"
                    onChange={this.handleChange}
                    value={a.phoneNumber}
                />
                <input
                    type="text"
                    name="address"
                    value={a.address}
                    class="form-control"
                />
                <input
                    type="text"
                    name="email"
                    value={a.email}
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
         

    render() {
        const { firstName, lastName } = this.props.contact;
        return (
            <div style = {this.getSyle()}>
                <p>
                    <button type="button" style={btnStyle} >x</button>
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
    background: 'grey',
    color: 'white',
    borderRadius: '50%',
    border: 'none',
    cursor: 'pointer',
    padding: '3px',
    float: 'right'
}

const btnStyle = {
    background: '#ff4136',
    color: '#fff',
    border: 'none',
    padding: '3px 11px',
    borderRadius:  '70%',
    cursor: 'pointer',
    float: 'right'
}


export default Contact
