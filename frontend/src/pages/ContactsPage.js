import React from 'react';
import ContactsTitle from '../components/ContactsTitle';
//import Navbar from '../components/Navbar';
import Table from '../components/Table';
import '../styles.css';

function ContactsPage()
{
	return(
		<div className="ContactsPage" >
			
			<ContactsTitle />
			<Table />
		</div>
	);
};

export default ContactsPage;
