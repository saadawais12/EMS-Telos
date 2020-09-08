import React from "react";

function AddNewEmployee() {
  return (
    <div class="emp-data flex-c">
      <div class="header flex-r">
        <span class="top-h">Telos-Employee Mangement System</span>
        <i class="fas fa-user icon"></i>
      </div>
      <span class="employee">Add New Employee</span>
      <div class="flex-r e-check">
        <div class="flex-c check-box">
          <div class="flex-r icn-cnt">
            <i class="fas fa-check-square"></i>
            <span>Register Employee</span>
          </div>
          <span class="chk-txt">
            Fill the form to complete Employee Registration
          </span>
        </div>
        <div class="flex-c check-box">
          <div class="flex-r icn-cnt">
            <i class="far fa-money-bill-alt"></i>
            <span>Add Salary</span>
          </div>
          <span class="chk-txt">
            Fill the form to complete Employee Salary Structure
          </span>
        </div>
        <div class="flex-c check-box">
          <div class="flex-r icn-cnt">
            <i class="fas fa-check-square"></i>
            <span>Add Leaves</span>
          </div>
          <span class="chk-txt">
            Fill the form to complete Eemployee Leave Structure
          </span>
        </div>
      </div>
      <form action="" class="register flex-c">
        <div class="flex-r">
          <label for="firstName">First Name</label>
          <input id="firstName" type="text" placeholder="First Name" />
          <label for="lastName">Last Name</label>
          <input id="lastName" type="text" placeholder="Last Name" />
        </div>
        <div class="flex-r">
          <label for="gender">Gender</label>
          <select id="gender">
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
          <label for="maritalStatus">Marital Status</label>
          <select id="maritalStatus">
            <option value="Single">Single</option>
            <option value="Married">Married</option>
            <option value="Divorced">Divorced</option>
            <option value="Widowed">Widowed</option>
          </select>
        </div>
        <div class="flex-r">
          <label for="mobileNumber">Mobile Number</label>
          <input id="mobileNumber" type="text" placeholder="Mobile Number" />
          <label for="landlineNumber">Landline Number</label>
          <input
            id="landlineNumber"
            type="text"
            placeholder="Landline Number"
          />
        </div>
        <div class="flex-r">
          <label for="idCard">ID Card Number</label>
          <input id="idCard" type="text" placeholder="ID Card Number" />
          <label for="joiningDate">Joining Date</label>
          <input id="joiningDate" type="date" />
        </div>
        <div class="flex-r">
          <label for="mailingAdd">Mailing Address</label>
          <input id="mailingAdd" type="text" placeholder="Mailing Address" />
          <label for="permanentAdd">Permanent Address</label>
          <input
            id="permanentAdd"
            type="text"
            placeholder="Permanent Address"
          />
        </div>
        <div class="flex-r">
          <label for="email">E-mail</label>
          <input id="email" type="text" placeholder="E-mail" />
          <label for="Password">Password</label>
          <input type="text" placeholder="Password" />
        </div>
        <div class="flex-r">
          <label for="department">Department</label>
          <select id="department">
            <option value="Customer Sales Executive">
              Customer Sales Executive
            </option>
            <option value="Director">Director</option>
            <option value="Fianance Officer">Fianance Officer</option>
            <option value="Floor Manager">Floor Manager</option>
            <option value="Human Resource">Human Resource</option>
            <option value="NOC Engineer">NOC Engineer</option>
            <option value="Office Admin">Office Admin</option>
            <option value="SEO Department">SEO Department</option>
            <option value="Team Lead">Team Lead</option>
            <option value="Web Development">Web Development</option>
          </select>
          <label for="contract">Contract</label>
          <select id="contract">
            <option value="Permanent">Permanent</option>
            <option value="Temporary">Temporary</option>
          </select>
        </div>
        <div class="flex-r">
          <label for="workingDays">Working Days Per Week</label>
          <select id="workingDays">
            <option value="1">1 Day</option>
            <option value="2">2 Days</option>
            <option value="3">3 Days</option>
            <option value="4">4 Days</option>
            <option value="5">5 Days</option>
            <option value="6">6 Days</option>
            <option value="7">7 Days</option>
          </select>
          <label for="empStatus">Employee Status</label>
          <select id="empStatus">
            <option value="Active">Active</option>
            <option value="Inactive">Inactive</option>
          </select>
        </div>
        <div class="flex-r">
          <label for="profilePhoto">Profile Picture</label>
          <input type="file" id="profilePhoto" />
          <label for="userStatus">User Status</label>
          <select id="userStatus">
            <option value="Employee">Employee</option>
            <option value="Administrator">Administrator</option>
          </select>
        </div>
        <span>
          <button type="submit">Create New Employee</button>
        </span>
      </form>
    </div>
  );
}

export default AddNewEmployee;
