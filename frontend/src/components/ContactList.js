import React, { Component } from "react";
import Contact from "./Contact.js";
import "../styles.css";

import uuid from "uuid";
import PropTypes from "prop-types";


export class ContactList extends Component {
    // this is hard coded for now but is should be fetched from the database
    componentDidMount(){
        fetch('http://localhost:5000/api/users/login',
        { method: 'GET',headers: {
            'Content-Type': 'application/json',
        },
        body:JSON.stringify(contacts),
        })
        .then((respone) =>  respone.json())
        .then((contacts) => {
            console.log(contacts);
        })
        .catch((error) => {
            console.error('Error',error);
        })
    }
    state = {
        contacts: [
            {
        id: uuid.v4(),
        firstName: "Magic",
        lastName: "Johnson"
      },
      {
        id: uuid.v4(),
        firstName: "Shaquille",
        lastName: "Oneal"
      },
      {
        id: uuid.v4(),
        firstName: "Phil",
        lastName: "Jackson"
      }
    ]
  };

  render() {
    return this.state.contacts.map(contact => (
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
