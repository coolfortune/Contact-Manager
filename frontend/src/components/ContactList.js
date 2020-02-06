import React, { Component } from "react";
import Contact from "./Contact.js";
import axios from 'axios'
import "../styles.css";
import ReactDOM from 'react-dom';


export class ContactList extends Component {

    state = { 
        contacts: []
    }

    constructor(props){

            super(props);
            const userId = window.location.pathname;

            axios.get('https://mamba-contacts.herokuapp.com/api' + userId)
            .then(res => this.setState({ contacts: res.data} ))
        
            }
        render() {

            if(this.state.contacts === [])
                return;

            var contactArray = this.state.contacts;

            return contactArray.map(contact => (
                <div className="ShowList">
        <Contact key={contact._id} contact={contact} >
              </Contact>
      </div>
    ));
  }
}

ReactDOM.render(<ContactList />, document.getElementById('root'));

export default ContactList;
