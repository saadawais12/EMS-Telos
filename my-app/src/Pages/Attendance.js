import React from "react";

import { MDBIcon, MDBCol, MDBCardBody, MDBCard, MDBBtn } from "mdbreact";

function Attendance() {
  return (
    <div>
      <div class="flex-r">
        {" "}
        <MDBIcon style={{ padding: "7px" }} icon="home" />
        <MDBIcon style={{ padding: "10px" }} icon="angle-right" />
        <span style={{ padding: "5px" }}>
          Employee Management System - Contracts
        </span>
        <MDBIcon icon="user" />
      </div>
      <MDBCol style={{ padding: "15px" }}>
        <MDBCard style={{ padding: "5px" }}>
          <MDBCardBody>
            <div class="flex-r" style={{ padding: "10px" }}>
              <MDBIcon far icon="edit" size="2x" />
              <span style={{ padding: "5px" }}>
                Employee Management System - Contracts
              </span>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>

      <MDBCard style={{ padding: "5px" }}>
        <MDBCardBody>
          <span style={{ padding: "5px" }}>
            Current Date And Time {new Date().toLocaleString()}
          </span>
          <div class="flex-r" style={{ padding: "10px" }}>
            <MDBBtn color="primary" style={{ width: "50vw", height: "8vw" }}>
              <MDBIcon icon="clock" />
              Check IN
            </MDBBtn>
            <MDBBtn color="danger" style={{ width: "50vw", height: "8vw" }}>
              <MDBIcon icon="clock" />
              Check Out
            </MDBBtn>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}

export default Attendance;
