import React from "react";
import { MDBContainer, MDBInputGroup } from "mdbreact";

class App extends React.Component {
  render() {
    return (
      <MDBContainer>
          <div className="addForm">
        <MDBInputGroup containerClassName="mb-3" hint="First Name" />
        <MDBInputGroup containerClassName="mb-3" hint="Last Name" />
        <MDBInputGroup containerClassName="mb-3" hint="Phone number" />
        <MDBInputGroup containerClassName="mb-3" hint="Address" />
        <MDBInputGroup containerClassName="mb-3" hint="Email" />
         </div>
         <button type="button" id="AddButton" class="btn btn-outline-primary"  >Add Contact</button>
         <button type="button" id="CancelButton" class="btn btn-outline-primary" >Cancel</button>
      </MDBContainer>
    );
  }
}

export default App;