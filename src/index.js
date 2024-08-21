import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import './index.css';
function EmployeeForm() {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    birthDate: "",
    email: "",
    phoneNumber: "",
    gender: "",
    joinDate: "",
    startTime: "",
    endTime: "",
    jobPosition: "",
    SelectTeams: "",
    SelectDescription: "",
    BillableHours: "",
    isBillable: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    console.log("Form Data Submitted", formData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>First Name*</label>
        <input
          type="text"
          name="firstName"
          value={formData.firstName}
          onChange={handleChange}
          required
          style={{ borderColor: formData.firstName ? "" : "red" }}
        />
      </div>
      <div>
        <label>Middle Name</label>
        <input
          type="text"
          name="middleName"
          value={formData.middleName}
          onChange={handleChange}
          required
          style={{ borderColor: formData.firstName ? "" : "red" }}
        />
      </div>
      <div>
        <label>Last Name*</label>
        <input
          type="text"
          name="lastName"
          value={formData.lastName}
          onChange={handleChange}
          required
          style={{ borderColor: formData.lastName ? "" : "red" }}
        />
      </div>
      <div>
        <label>Birth Date*</label>
        <input
          type="date"
          name="birthDate"
          value={formData.birthDate}
          onChange={handleChange}
          required
          style={{ borderColor: formData.birthDate ? "" : "red" }}
        />
      </div>
      <div>
        <label>Email*</label>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          required
          style={{ borderColor: formData.email ? "" : "red" }}
        />
      </div>
      <div>
        <label>Phone Number*</label>
        <input
          type="tel"
          name="phoneNumber"
          value={formData.phoneNumber}
          onChange={handleChange}
          required
          style={{ borderColor: formData.phoneNumber ? "" : "red" }}
        />
      </div>
      <div>
        <label>Gender*</label>
        <select className='gender'
          name="gender"
          value={formData.gender}
          onChange={handleChange}
          required
          style={{ borderColor: formData.gender ? "" : "red" }}
        >
          <option value="">Select Gender</option>
          <option value="Male">Male</option>
          <option value="Female">Female</option>
        </select>
      </div>
      <div>
        <label>Join Date*</label>
        <input
          type="date"
          name="joinDate"
          value={formData.joinDate}
          onChange={handleChange}
          required
          style={{ borderColor: formData.joinDate ? "" : "red" }}
        />
      </div>
      <div>
        <label>Start Time*</label>
        <input
          type="time"
          name="startTime"
          value={formData.startTime}
          onChange={handleChange}
          required
          style={{ borderColor: formData.startTime ? "" : "red" }}
        />
      </div>
      <div>
        <label>End Time*</label>
        <input
          type="time"
          name="endTime"
          value={formData.endTime}
          onChange={handleChange}
          required
          style={{ borderColor: formData.endTime ? "" : "red" }}
        />
      </div>
      <div>
        <label>Job Position*</label>
        <input
          type="text"
          name="jobPosition"
          value={formData.jobPosition}
          onChange={handleChange}
          required
          style={{ borderColor: formData.jobPosition ? "" : "red" }}
        />
      </div>
      <div>
        <label>Select Teams</label>
        <input
          type="number"
          name="salary"
          value={formData.Salary}
          onChange={handleChange}
          required
          style={{ borderColor: formData.Salary ? "" : "red" }}
        />
      </div>
      <div>
        <label>Select Designation*</label>
        <input
          type="text"
          name="team"
          value={formData.team}
          onChange={handleChange}
          required
          style={{ borderColor: formData.team ? "" : "red" }}
        />
      </div>
      <div>
        <label>Billable Hours*</label>
        <input
          type="text"
          name="designation"
          value={formData.designation}
          onChange={handleChange}
          required
          style={{ borderColor: formData.designation ? "" : "red" }}
        />
      </div>
      <div>
        <label>Is Billable</label>
        <input className='check'
          type="checkbox"
          name="isRelocate"
          checked={formData.isRelocate}
          onChange={handleChange}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
}


ReactDOM.render(<EmployeeForm/>,document.getElementById('root'));
