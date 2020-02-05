import React, {useState} from 'react';

function ContactUI()
{
    var contact = '';
    var search = '';

    const [message,setMessage] = useState('');
    const [searchResults,setResults] = useState('');
    const [contactList,setContactList] = useState('');

    const addContact = async event => 
    {
        
        event.preventDefault();

		alert('addContact()' + contact.value);

	};

    const searchContact = async event => 
    {
        event.preventDefault();
        
		alert('searchContact()' + search.value);
    };

    return(
        <div id="accessUIDiv">
            <br />

            <input type="text" id="searchFirst" placeholder="First Name" ref={(c) => search = c} />
            <input type="text" id="searchLast" placeholder="Last Name" ref={(c) => search = c} />
            <input type="text" id="searchPhone" placeholder="Phone: 5551231234" ref={(c) => search = c} />
            <input type="text" id="searchAddress" placeholder="Address" ref={(c) => search = c} />
            <input type="text" id="searchEmail" placeholder="Email" ref={(c) => search = c} />
            <button type="button" id="searchContactButton" class="UIbuttons" onClick={searchContact}> Search By:</button><br />
            <span id="ContactSearchResult"></span>
            <p id="ContactList">{contactList}</p><br /><br />

            {/* <input type="text" id="ContactText" placeholder="First, Last, (xxx) xxx-xxxx" ref={(c) => contact = c} /> */}
            <button type="button" id="addContactButton" class="UIbuttons" onClick={addContact}> Add Contact </button><br />
            <span id="ContactAddResult">{message}</span>
            {/* <img id="dunkGif" alt='' src='https://media.giphy.com/media/pkfmPUCExTmAo/giphy.gif'></img> */}

        </div>
    );
}

export default ContactUI;