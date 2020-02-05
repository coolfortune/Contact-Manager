import React, { Component } from 'react';
import ContactsTitle from '../components/ContactsTitle';
import Navbar from '../components/Navbar';
import ContactUI from '../components/ContactUI';
import '../styles.css';

class ContactsPage extends Component
{
	render(){
		return(
			<div className="ContactsPage" >
				<Navbar />				
				<ContactsTitle />
			</div>
		);
	};
}

export default ContactsPage;
