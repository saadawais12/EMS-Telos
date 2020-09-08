import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import logo from "./logo.svg";
import "./App.css";
import {
  BrowserRouter as Router,
  Redirect,
  Link,
  Route,
  NavLink,
  Switch,
  useHistory,
} from "react-router-dom";
import "./Styles/home.css";
import Login from "./Pages/login.js";
import ApplyforLoad from "./Pages/ApplyforLoan.js";
import Attendance from "./Pages/Attendance.js";
import AttendanceReport from "./Pages/AttendanceReport.js";
import ChangePassword from "./Pages/ChangePassword.js";
import CompanyProfile from "./Pages/CompanyProfile.js";
import { AuthContext } from "./Context/auth.js";
import Contracts from "./Pages/Contracts.js";
import Dashboard from "./Pages/Dashboard.js";
import Departments from "./Pages/Departments.js";
import EmployeeManagement from "./Pages/EmployeeManagement.js";
import EmployeeSales from "./Pages/EmployeeSales.js";
import Events from "./Pages/Events.js";
import Home from "./Pages/Home.js";
import IpConfiguration from "./Pages/IpConfiguration.js";
import LeaveReport from "./Pages/LeaveReport.js";
import LeavesManagement from "./Pages/LeavesManagement.js";
import LoanReport from "./Pages/LoanReport.js";
import ManuallymarkAttendance from "./Pages/ManuallymarkAttendance.js";
import Pendingleave from "./Pages/PendingLeave.js";
import PendingLoanRequest from "./Pages/PendingLoanRequest.js";
import PostEvent from "./Pages/PostEvent.js";
import PrivateMessage from "./Pages/PrivateMessage.js";
//import Login from "./Pages/login.js";
import SendLeaveRequest from "./Pages/SendLeaveRequest.js";
import ApplyforLoan from "./Pages/ApplyforLoan.js";
import AddNewEmployee from "./Pages/AddNewEmployee.js";
import "./Styles/home.css";
import "font-awesome/css/font-awesome.min.css";
import {
  faClock,
  faCalendar,
  faDollarSign,
  faMoneyBillAlt,
} from "@fortawesome/free-solid-svg-icons";
import * as Icon from "react-bootstrap-icons";
import { library } from "@fortawesome/fontawesome-svg-core";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
library.add(faClock, faCalendar, faDollarSign, faMoneyBillAlt);
function App() {
  const his = useHistory();
  function logout() {
    localStorage.removeItem("tokens");
    his.push("/");
  }

  const setTokens = (data) => {
    localStorage.setItem("tokens", JSON.stringify(data));
    setAuthTokens(data);
  };
  const [authtokens, setAuthTokens] = useState(localStorage.getItem("tokens"));
  const panelRef = useRef();
  const [width, setWidth] = useState("");
  return (
    <div>
      <AuthContext.Provider value={{ authtokens, setAuthTokens: setTokens }}>
        <Router>
          {!authtokens ? (
            <Login></Login>
          ) : (
            <>
              <div
                class="panel flex-c"
                //ref={panelRef}
                onClick={(e) => {
                  //  console.log(panelRef);
                  let element = document.getElementsByClassName("panel");
                  console.log(element[0]);
                  element[0].style.width = "4vw";
                  element[0].style.overflowX = "hidden";
                }}
                onMouseOver={(e) => {
                  //  console.log(panelRef);
                  let element = document.getElementsByClassName("panel");
                  element[0].removeAttribute("style");
                  // element[0].style.width = "22vw";
                  // element[0].style.overflowX = "visible";
                }}
              >
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "#999" }}
                >
                  <div id="dashboard" class="flex-r h-container">
                    <i class="fa fa-home fa-home icon"></i>

                    <span class="headings">Dashboard</span>
                  </div>
                </NavLink>
                <div id="settings" class="flex-r h-container">
                  <i class="fa fa-laptop icon"></i>
                  <span class="headings">
                    Company Settings
                    <i class="fa fa-chevron-right"></i>
                  </span>
                  <div class="sub-menu-company">
                    <NavLink
                      to="/CompanyProfile"
                      style={{ textDecoration: "none", color: "#999" }}
                    >
                      <div class="h-container">
                        <span class="headings">Company Profile</span>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/ipconfiguration"
                      style={{ textDecoration: "none", color: "#999" }}
                    >
                      <div class="h-container">
                        <span class="headings">IP Configuration</span>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/contracts"
                      style={{ textDecoration: "none", color: "#999" }}
                    >
                      <div class="h-container">
                        <span class="headings">Contracts</span>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/Departments"
                      style={{ textDecoration: "none", color: "#999" }}
                    >
                      <div class="h-container">
                        <span class="headings">Departments</span>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/LeaveManagement"
                      style={{ textDecoration: "none", color: "#999" }}
                    >
                      <div class="h-container">
                        <span class="headings">Leaves Mangement</span>
                      </div>
                    </NavLink>
                  </div>
                </div>
                <NavLink
                  to="/EmployeeManagement"
                  style={{ textDecoration: "none", color: "#999" }}
                >
                  <div id="management" class="flex-r h-container">
                    <i class="fa fa-user icon"></i>

                    <span class="headings">Employee Management</span>
                  </div>
                </NavLink>
                <NavLink
                  to="/Attendance"
                  style={{ textDecoration: "none", color: "#999" }}
                >
                  <div id="attendance" class="flex-r h-container">
                    <FontAwesomeIcon
                      class="icon"
                      icon="clock"
                    ></FontAwesomeIcon>
                    <span class="headings">Attendance</span>
                  </div>
                </NavLink>
                <NavLink
                  to="/ManuallyMarkAttendance"
                  style={{ textDecoration: "none", color: "#999" }}
                >
                  <div id="mark-att" class="flex-r h-container">
                    <FontAwesomeIcon
                      class="icon"
                      icon="clock"
                    ></FontAwesomeIcon>
                    <span class="headings">Manually Mark Attendance</span>
                  </div>
                </NavLink>
                <NavLink
                  to="/PostEvents"
                  style={{ textDecoration: "none", color: "#999" }}
                >
                  <div id="events" class="flex-r h-container">
                    <i class="fa fa-bullhorn icon"></i>
                    <span class="headings">Post Events</span>
                  </div>
                </NavLink>
                <div id="message" class="flex-r h-container">
                  <i class="fa fa-comments icon"></i>
                  <span class="headings">Private Message</span>
                </div>
                <div id="leave" class="flex-r h-container">
                  <FontAwesomeIcon
                    class="icon"
                    icon="calendar"
                  ></FontAwesomeIcon>
                  <span class="headings">
                    Leaves
                    <i class="fa fa-chevron-right"></i>
                  </span>
                  <div class="sub-menu-leave">
                    <NavLink
                      to="/SendLeave"
                      style={{ textDecoration: "none", color: "#999" }}
                    >
                      <div class="h-container">
                        <span class="headings">Send Leave Request</span>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/PendingLeave"
                      style={{ textDecoration: "none", color: "#999" }}
                    >
                      <div class="h-container">
                        <span class="headings">Pending Leave Request</span>
                      </div>
                    </NavLink>
                  </div>
                </div>
                <div id="loan" class="flex-r h-container">
                  <FontAwesomeIcon
                    class="icon"
                    icon="dollar-sign"
                  ></FontAwesomeIcon>
                  <span class="headings">
                    Loan
                    <i class="fa fa-chevron-right"></i>
                  </span>
                  <div class="sub-menu-loan">
                    <NavLink
                      to="/ApplyLoan"
                      style={{ textDecoration: "none", color: "#999" }}
                    >
                      <div class="h-container">
                        <span class="headings">Apply For Loan</span>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/PendingLoan"
                      style={{ textDecoration: "none", color: "#999" }}
                    >
                      <div class="h-container">
                        <span class="headings">Pending Loan Request</span>
                      </div>
                    </NavLink>
                  </div>
                </div>
                <NavLink
                  to="/EmployeeSalary"
                  style={{ textDecoration: "none", color: "#999" }}
                >
                  <div id="salary" class="flex-r h-container">
                    <FontAwesomeIcon
                      class="icon"
                      icon="money-bill-alt"
                    ></FontAwesomeIcon>
                    <span class="headings">Employee Salary</span>
                  </div>
                </NavLink>
                <div id="report" class="flex-r h-container">
                  <i class="fa fa-sticky-note icon"></i>
                  <span class="headings">
                    Reports
                    <i class="fa fa-chevron-right"></i>
                  </span>
                  <div class="sub-menu-report">
                    <NavLink
                      to="/AttendanceReport"
                      style={{ textDecoration: "none", color: "#999" }}
                    >
                      <div class="h-container">
                        <span class="headings">Attendance Report</span>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/LeaveReport"
                      style={{ textDecoration: "none", color: "#999" }}
                    >
                      <div class="h-container">
                        <span class="headings">Leave Report</span>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/LoanReport"
                      style={{ textDecoration: "none", color: "#999" }}
                    >
                      <div class="h-container">
                        <span class="headings">Loan Report</span>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/AttendanceSheet"
                      style={{ textDecoration: "none", color: "#999" }}
                    >
                      <div class="h-container">
                        <span class="headings">Attendance Sheet</span>
                      </div>
                    </NavLink>
                    <NavLink
                      to="/SalaryReport"
                      style={{ textDecoration: "none", color: "#999" }}
                    >
                      <div class="h-container">
                        <span class="headings">Salary Report</span>
                      </div>
                    </NavLink>
                  </div>
                </div>
                <NavLink
                  to="/"
                  style={{ textDecoration: "none", color: "#999" }}
                >
                  <div id="logout" class="flex-r h-container">
                    <i class="fa fa-power-off icon"></i>

                    <span
                      class="headings"
                      onClick={() => {
                        setAuthTokens("");
                        localStorage.removeItem("tokens");
                      }}
                    >
                      Logout
                    </span>
                  </div>
                </NavLink>
              </div>
              <div class="child">
                <Route
                  exact
                  path="/EmployeeManagement"
                  component={EmployeeManagement}
                />
                <Route exact path="/" render={(props) => <Home />} />
                <Route
                  exact
                  path="/AddNewEmployee"
                  render={(props) => <AddNewEmployee />}
                />
                <Route
                  exact
                  path="/CompanyProfile"
                  component={CompanyProfile}
                />
                <Route
                  exact
                  path="/ipconfiguration"
                  component={IpConfiguration}
                />
                <Route exact path="/contracts" component={Contracts} />
                <Route exact path="/Departments" component={Departments} />
                <Route
                  exact
                  path="/LeaveManagement"
                  component={LeavesManagement}
                />
                <Route
                  exact
                  path="/Attendance"
                  render={(props) => <Attendance />}
                />
                <Route
                  exact
                  path="/ManuallyMarkAttendance"
                  component={ManuallymarkAttendance}
                />
                <Route exact path="/PostEvents" component={PostEvent} />
                <Route exact path="/SendLeave" component={SendLeaveRequest} />
                <Route exact path="/ApplyLoan" component={ApplyforLoan} />
                <Route
                  exact
                  path="/PendingLoan"
                  component={PendingLoanRequest}
                />
                <Route
                  exact
                  path="/AttendanceReport"
                  render={(props) => <AttendanceReport />}
                />
                <Route
                  exact
                  path="/LeaveReport"
                  render={(props) => <LeaveReport />}
                />
                {/* <Route
                  exact
                  path="/LeaveReport"
                  render={(props) => <LeaveReport />}
                /> */}
                <Route
                  exact
                  path="/AttendanceSheet"
                  render={(props) => <Attendance />}
                />
              </div>
            </>
          )}

          {/* <Route
              exact
              path="/AttendanceReport"
              render={(props) => <CategoryDisplay {...props} cat={"Tees"} />}
            />
            <Route
              exact
              path="/categoryFormal"
              render={(props) => <CategoryDisplay {...props} cat={"Formal"} />}
            />
            <Route
              exact
              path="/SingleProduct/:id"
              render={(props) => <SingleProduct />}
            />
            <Route
              exact
              path="/Addproduct"
              render={(props) => <AddProduct />}
            />
            <Route exact path="/form/:id" render={(props) => <EditForm />} />
            <PrivateRoute path="/Admin" component={Admin} /> */}
        </Router>
      </AuthContext.Provider>
    </div>
  );
}

export default App;
