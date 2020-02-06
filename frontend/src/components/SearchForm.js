import React , { Component } from 'react';
import ReactDOM from 'react-dom';

class SearchForm extends Component 
{
    constructor(props) {
        super(props);
        
        this.state = {
            firstName: ""
        }
        
        this.handleInputChange = this.handleInputChange.bind(this);
        this.getContact = this.getContact.bind(this);
    }
    
    handleInputChange(event) {
        const value = event.target.value;
        this.setState({
            firstName: value
        })
    }

    getContact (event) {
        event.preventDefault();

        const userID = window.location.pathname;
        const firstName = JSON.stringify(this.state);
    
        fetch('http://localhost:5000/api' + userID, 
            {method: 'POST', body: firstName, headers:{'Content-Type': 'application/json'}})
            .then(res => res.json())
            .catch(err => alert(err.message))
    }

    render()
    { 
        return (
            <form class="searchForm">
            <input 
                placeholder="Search for contact.."
                value={this.state.firstName}
                onChange={this.handleInputChange}
            />

            <p>
                <button type="submit"
                        id= "SearchButton"
                        class="btn btn-outline-primary"
                        onClick={this.getContact}

                >Search</button>
            </p>
            </form>
        );
    }
}
ReactDOM.render(<SearchForm />, document.getElementById('root'));
export default SearchForm;

        