import React, { useState } from 'react';
import "../css/style.css"; 
import Header from './Header';

function MyRecords() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    file: null,
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((formData) => ({
      ...formData,
      [name]: value,
    }));
  };

  const handleFileChange = (event) => {
    setFormData((formData) => ({
      ...formData,
      file: event.target.files[0],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // handle form submission here
  };

  return (
    <div>
        <Header/>
            <section id="record" class="record section-bg">
      <div class="container">
    <form class="record-form" onSubmit={handleSubmit}>
    <div class="row">
      <div class="col-md-4 form-group">
      <label for="recordType"></label>
        <select id="recordType" name="recordType">
        <option value="" disabled selected hidden>Record Type</option>
            <option value="prescription">Doctor Prescription</option>
            <option value="bloodtest">Blood Test</option>
            <option value="urinetest">Urine Test</option>
            <option value="usscan">UltraScound Scan</option>
            <option value="ctscan">CT Scan</option>
            <option value="mri">MRI Scan</option>
        </select>
      </div>
      <div class="col-md-4 form-group mt-3 mt-md-0">
        <input type="text" class="form-control" name="recordname" id="recordname" placeholder="Record Name"/>
      </div>
      <div class="col-md-4 form-group mt-3 mt-md-0">
        <input type="text" class="form-control" name="hospitalname" id="hospitalname" placeholder="Hospital Name"/>
      </div>
    </div>
    <div class="row">
        <div class="col-md-4 form-group mt-3">
            <input type="text" class="form-control" name="doctorname" id="doctorname" placeholder="Doctor Name"/>
        </div>
        <div class="col-md-4 form-group mt-3">
            <input type="text" class="form-control" name="departmentname" id="departmentname" placeholder="Department Name"/>
        </div>
      <div class="col-md-4 form-group mt-3">
      <input type="date" placeholder="Record Date" onchange="this.className=(this.value!=''?'has-value':'')"/>
      </div>
    </div>
    <div class="form-group mt-3">
            <textarea class="form-control" name="reason" rows="2" placeholder="Reason"></textarea>
            <div class="validate"></div>
        </div>
    <div class="text-center"><button type="submit">Submit</button></div>
    </form>
    </div>
    </section>
    </div>
  );
}

export default MyRecords;