import React from 'react';
import ReactDOM from 'react-dom';

class SearchForm extends React.Component 
{
    constructor(props) 
    {
        super(props);
         this.state = {searchBy: 'First Name' };
    }

    render() 
    { 
        return (
            <form class="searchForm">
            <select value={this.state.searchBy}>
                <option value="Last Name">First Name</option>
                <option value="Last Name">Last Name</option>
                <option value="Phone">Phone number</option>
                <option value="Address">Address</option>
                <option value="Email">Email</option>
            </select>
            </form>
        );
    }
}
ReactDOM.render(<SearchForm />, document.getElementById('root'));
export default SearchForm;

        