import React from 'react';
import ContactsTitle from '../components/ContactsTitle';
//import Navbar from '../components/Navbar';
//import Table from '../components/Table';
import ContactUI from '../components/ContactUI';
import '../styles.css';

function ContactsPage()
{
	return(
		<div className="ContactsPage" >
			
			<ContactsTitle />
			<ContactUI />
			
		</div>
	);
};

export default ContactsPage;
