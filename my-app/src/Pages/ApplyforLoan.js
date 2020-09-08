import React, { useState } from "react";
import {
  MDBDataTable,
  MDBIcon,
  MDBCol,
  MDBCardBody,
  MDBCard,
  MDBBtn,
} from "mdbreact";
import { Form, Col } from "react-bootstrap";
export default function ApplyforLoan() {
  const [test, setTest] = useState("");
  return (
    <div>
      <div class="flex-r">
        {" "}
        <MDBIcon style={{ padding: "7px" }} icon="home" />
        <MDBIcon style={{ padding: "10px" }} icon="angle-right" />
        <span style={{ padding: "5px" }}>
          Employee Management System - Loan Request
        </span>
        <MDBIcon icon="user" />
      </div>
      <MDBCol style={{ padding: "15px" }}>
        <MDBCard style={{ padding: "5px" }}>
          <MDBCardBody>
            <div class="flex-r" style={{ padding: "10px" }}>
              <MDBIcon far icon="edit" size="2x" />
              <span style={{ padding: "5px" }}>
                Employee Management System - Loan Request
              </span>
            </div>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>{" "}
      <MDBCard>
        <MDBCardBody>
          <Form>
            <Form.Row>
              <Col>
                <Form.Control placeholder="Loan Amount" />
              </Col>
              <Col>
                <Form.Control placeholder="Description for Loan" />
              </Col>
            </Form.Row>
          </Form>
          <button type="button" class="btn btn-primary">
            Submit Loan Request
          </button>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
}
