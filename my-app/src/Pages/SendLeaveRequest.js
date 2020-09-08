import React from "react";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBIcon,
  MDBCard,
  MDBCardBody,
} from "mdbreact";
function SendLeaveRequest() {
  return (
    <div>
      <div class="flex-r">
        {" "}
        <MDBIcon style={{ padding: "7px" }} icon="home" />
        <MDBIcon style={{ padding: "10px" }} icon="angle-right" />
        <span style={{ padding: "5px" }}>
          Employee Management System - Employee Leave
        </span>
        <MDBIcon icon="user" />
      </div>
      <MDBCol style={{ padding: "15px" }}>
        <MDBCard style={{ padding: "5px" }}>
          <MDBCardBody>
            <div class="flex-r" style={{ padding: "10px" }}>
              <MDBIcon far icon="edit" size="2x" />
              <span style={{ padding: "5px" }}>
                Employee Management System - Employee Leave
              </span>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <form>
              <p className="h4 text-center mb-4">Send Leave Request</p>
              <label htmlFor="defaultFormContactNameEx" className="grey-text">
                Your name
              </label>
              <input
                type="text"
                id="defaultFormContactNameEx"
                className="form-control"
              />
              <br />
              <label htmlFor="defaultFormContactEmailEx" className="grey-text">
                Your email
              </label>
              <input
                type="email"
                id="defaultFormContactEmailEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormContactSubjectEx"
                className="grey-text"
              >
                Subject
              </label>
              <input
                type="text"
                id="defaultFormContactSubjectEx"
                className="form-control"
              />
              <br />
              <label
                htmlFor="defaultFormContactMessageEx"
                className="grey-text"
              >
                Your message
              </label>
              <textarea
                type="text"
                id="defaultFormContactMessageEx"
                className="form-control"
                rows="3"
              />
              <div className="text-center mt-4">
                <MDBBtn color="warning" outline type="submit">
                  Send
                  <MDBIcon far icon="paper-plane" className="ml-2" />
                </MDBBtn>
              </div>
            </form>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
}

export default SendLeaveRequest;
