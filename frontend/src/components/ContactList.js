import React, { Component } from "react";
import Contact from "./Contact.js";
import axios from 'axios'
import "../styles.css";




export class ContactList extends Component {
    // this is hard coded for now but is should be fetched from the database

    state = { 
        contacts: []
    }

    constructor(props){

            super(props);
        const userId = window.location.pathname;



            
            //         {
    //     id: uuid.v4(),
    //     firstName: "Magic",
    //     lastName: "Johnson"
    //   },
    //   {
        //     id: uuid.v4(),
        //     firstName: "Shaquille",
        //     lastName: "Oneal"
        //   },
        //   {
            //     id: uuid.v4(),
            //     firstName: "Phil",
            //     lastName: "Jackson"
            //   }
            
            axios.get('http://localhost:5000/api' + userId)
            .then(res => this.setState({ contacts: res.data} ))
        
        
                // fetch('http://localhost:5000/api' + userId,
                // { method: 'GET',headers: {
                //     'Content-Type': 'application/json',
                // },
                // })
                // .then(response => {
                //     this.setState({ contacts: [response.json()]});
                // })
                // .catch((error) => {
                //     console.error('Error',error);
                // })
                // console.log(this.state.contact);
            }
        render() {

            if(this.state.contacts === [])
                return;

            var contactArray = this.state.contacts;


            return contactArray.map(contact => (
                <div className="ShowList">
        <Contact key={contact._id} contact={contact} />
      </div>
    ));
  }
}



export default ContactList;
