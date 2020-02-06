import React, { useState } from "react";
import { MDBContainer, MDBInputGroup } from "mdbreact";
import axios from 'axios'


class EditForm extends React.Component {

	constructor(props) {
        super(props)

        this.onChangeFirstName = this.onChangeFirstName.bind(this)
        this.onChangeLastName = this.onChangeLastName.bind(this)
        this.onChangePhoneNumber = this.onChangePhoneNumber.bind(this)
        this.onChangeAddress = this.onChangeAddress.bind(this)
        this.onChangeEmail = this.onChangeEmail.bind(this)

        this.state = {
			firstName: "",
			lastName: "",
			phoneNumber: null,
			address: "",
			email: ""
		};

	}
	

	onChangeFirstName(event) {
        this.setState({ firstName: event.target.value })
    }
    onChangeLastName(event) {
        this.setState({ lastName: event.target.value })
    }
    onChangePhoneNumber(event) {
        this.setState({ phoneNumber: event.target.value })
    }
    onChangeAddress(event) {
        this.setState({ address: event.target.value })
    }
    onChangeEmail(event) {
        this.setState({ email: event.target.value })
    }

    onSubmit(event) {
        event.preventDefault();

        const userId = window.location.pathname;
        
        const contact = {
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            phoneNumber: this.state.phoneNumber,
            address: this.state.address,
            email: this.state.email
        }

        axios.get('https://mamba-contacts.herokuapp.com/api' + userId, contact)
        .then(res => {
            console.log(res.data)
            console.log('Student succesfully updated')
        }).catch((error) => {
            console.log(error)
        })

        
    }

	render() {
		return (
			<div className="editForm">
				<input
					type="text"
					name="firstName"
					placeholder="First Name"
					onChange={this.handleChange}
					value={this.state.firstName}
				/>
				<input
					type="text"
					name="lastName"
					placeholder="Last Name"
					onChange={this.handleChange}
					value={this.state.lastName}
				/>
				<input
					type="text"
					name="phoneNumber"
					placeholder="Phone Number"
					onChange={this.handleChange}
					value={this.state.phoneNumber}
				/>
				<input
					type="text"
					name="address"
					placeholder="Address"
					onChange={this.handleChange}
					value={this.state.address}
				/>
				<input
					type="text"
					name="email"
					placeholder="Email"
					onChange={this.handleChange}
					value={this.state.email}
				/>
				<button
					type="submit"
					id="AddButton"
					class="btn btn-primary"
					onClick={this.addContact}
				>
					Add Contact
				</button>
				<a
					type="button"
					id="CancelButton"
					class="btn btn-outline-primary"
					href="/contacts/:id"
				>
					Cancel
				</a>
				<span id="loginResult" class="badLogin1 text text-warning" value={this.state2} />
			</div>
		);
	}
}

export default EditForm;
