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
        {/* <MDBInputGroup
          label="Your vanity URL"
          containerClassName="mb-3"
          prepend="https://example.com/users/"
          id="basic-url"
        />
        <MDBInputGroup containerClassName="mb-3" prepend="$" append=".00" />
        <MDBInputGroup prepend="With textarea" type="textarea" /> */}
         </div>
      </MDBContainer>
    );
  }
}

export default App;