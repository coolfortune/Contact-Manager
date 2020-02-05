import React, { Component } from 'react';
import ContactsTitle from '../components/ContactsTitle';
import Navbar from '../components/Navbar';
import ContactUI from '../components/ContactUI';
import '../styles.css';
import ContactList from '../components/ContactList';

class ContactsPage extends Component
{
	render(){
		return(
			<div className="ContactsPage" >
				<Navbar />				
				<ContactsTitle />
				<div style={ListStyle}>
					<ContactList />
				</div>
			
				
			</div>
		);
	};
}

const ListStyle = {
	position: 'absolute',
	width: '50%',
	bottom: '0px',
	right: '0',
}

export default ContactsPage;
