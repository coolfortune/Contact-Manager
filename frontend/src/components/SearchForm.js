import React , { Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import axios from 'axios';
import Contact from './Contact';

class SearchForm extends Component 
{
    constructor(props) {
        super(props);
        
        this.state = {
            firstName : "",
            _id: "",
            results: []
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getContact = this.getContact.bind(this);
    }
    
    handleInputChange(event) {
        const value = event.target.value;
        const _id = event.target._id;
        
        this.setState({
            firstName: value,
        })
    }

    getContact (event) {
        event.preventDefault();

        const userID = window.location.pathname;
        const body = {firstName: this.state.firstName}
        const url = '/api' + userID + '/search';

        if (body.firstName === "")
            console.log("Contact not found")
        
        

        axios.post(url, body)
        .then(res => this.setState({ results: res.data }))

        console.log(this.state.results)

    }

    render()
    { 
        if (this.state.results === [])
            return;

        const contactArr = this.state.results;
        return (
            <form class="searchForm">
            <input 
                placeholder="Search for contact.."
                value={this.state.firstName}
                id={this.state._id}
                onChange={this.handleInputChange}
            />

            <p>
                <button type="submit"
                        id= "SearchButton"
                        class="btn btn-outline-primary"
                        onClick={this.getContact}

                >Search</button>
            </p>
            {contactArr.map(contact => 
                <div className="ShowList">
                <Contact key = {contact.id} contact = {contact} >
                    </Contact></div>)}
            </form>
        );
    }
}

Contact.propTypes = {
    contact: PropTypes.object.isRequired
}
ReactDOM.render(<SearchForm />, document.getElementById('root'));
export default SearchForm;

        