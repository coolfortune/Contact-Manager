import React from 'react';
import WelcomeTitle from '../components/WelcomeTitle';
import Navbar from '../components/Navbar';
import '../styles.css';

function WelcomePage()
{
	return(
		<div className="WelcomePage" >
			<Navbar />
			<WelcomeTitle />			
		</div>
	);
};

export default WelcomePage;