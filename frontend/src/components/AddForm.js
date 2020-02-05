import React from "react";
import { MDBContainer, input } from "mdbreact";

class App extends React.Component {
  
  render() {
    return (

        <div class="form-group">
        <form className="addForm">
        <input container hint="First Name" />
        <input container hint="Last Name" />
        <input container hint="Phone number" />
        <input container hint="Address" />
        <input container hint="Email" />
         <button type="button" id="AddButton" class="btn btn-outline-primary"  >Add Contact</button>
         <a type="button" id="CancelButton" class="btn btn-outline-primary" href ='/contacts/:id' >Cancel</a>
         </form>
         </div>
    );
  }
}

export default App;