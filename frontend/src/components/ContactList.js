import React, { Component } from "react";
import Contact from "./Contact.js";
import axios from 'axios'
import "../styles.css";

import uuid from "uuid";
import PropTypes from "prop-types";


export class ContactList extends Component {

    state = { 
        contacts: []
    }

    constructor(props){

            super(props);
            const userId = window.location.pathname;

            axios.get('http://localhost:5000/api' + userId)
            .then(res => this.setState({ contacts: res.data} ))
        
            }
        render() {

            if(this.state.contacts === [])
                return;

            var contactArray = this.state.contacts;


            return contactArray.map(contact => (
                <div className="ShowList">
        <Contact key={contact.id} contact={contact} />
      </div>
    ));
  }
}

ContactList.propTypes = {
  contacts: PropTypes.array.isRequired
};

export default ContactList;
