import React, { useState } from "react";
import { useAuth } from "../Context/auth.js";
import axios from "axios";
import { useHistory } from "react-router-dom";
import { Card } from "react-bootstrap";
import {
  MDBCol,
  MDBContainer,
  MDBRow,
  MDBInput,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBIcon,
} from "mdbreact";

function Login(props) {
  const [isLoggedIn, setLoggedIn] = useState(false);
  const [isError, setIsError] = useState(false);
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [token, settoken] = useState(localStorage.getItem("tokens"));
  const { setAuthTokens } = useAuth();
  const history = useHistory();
  const [email, setEmail] = useState("");

  function postLogin() {
    console.log("inside login");
    axios
      .post(
        "https://cors-anywhere.herokuapp.com/https://serene-atoll-43336.herokuapp.com/api/user/login",
        {
          email: userName,
          password: password,
        },
        {
          header: { "Content-Type": "application/json" },
        }
      )
      .then((result) => {
        if (result.status === 200) {
          console.log("helloworld");
          console.log(result.headers["x-auth-token"]);

          setAuthTokens(result.headers["x-auth-token"]);
          setLoggedIn(true);
          console.log("before redirect");
          return history.push("/");

          // console.log(isLoggedIn);
          // console.log(result.data.token);
          // console.log(result.data.role);
          // console.log({ isLoggedIn });
          // console.log(AuthContext.authtokens);
        } else if (result.status == 400) {
          console.log("hahsd ");
          console.log(result);
          setIsError(true);
        }
      })
      .catch((e) => {
        console.log("hello catch");
        setAuthTokens("helloworld");
        setIsError(true);
        if (typeof e.response["data"] === "object") {
          console.log("array ai hai");
          console.log(e.response["data"]);
          e.response["data"].forEach((e) => {
            console.log(e);
          });
        } else {
          console.log("array nai hai");
        }
      });
  }
  return (
    <div>
      {token ? (
        history.push("/")
      ) : (
        <MDBContainer>
          <MDBRow>
            <MDBCol md="8">
              <MDBCard>
                <MDBCardBody>
                  <form>
                    <p className="h4 text-center py-4">Log In</p>
                    <label
                      htmlFor="defaultFormCardNameEx"
                      className="grey-text font-weight-light"
                    >
                      Enter Email
                    </label>
                    <input
                      type="text"
                      id="defaultFormCardNameEx"
                      className="form-control"
                      onChange={(e) => {
                        setUserName(e.target.value);
                      }}
                    />
                    <br />
                    <label
                      htmlFor="defaultFormCardEmailEx"
                      className="grey-text font-weight-light"
                    >
                      Enter Password
                    </label>
                    <input
                      type="email"
                      id="defaultFormCardEmailEx"
                      className="form-control"
                      onChange={(e) => {
                        setPassword(e.target.value);
                      }}
                    />
                    <div className="text-center py-4 mt-3">
                      <MDBBtn
                        className="btn btn-outline-purple"
                        onClick={postLogin}
                      >
                        LogIn
                        <MDBIcon far icon="paper-plane" className="ml-2" />
                      </MDBBtn>
                    </div>
                  </form>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      )}
    </div>
  );
}
export default Login;
