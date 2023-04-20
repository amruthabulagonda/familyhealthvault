import React from 'react';
import Header from './Header';

const HomePage = () => {

    return (
        <div>
            <Header/>
            <section id="services" class="services">
      <div class="container">

      <div class="row">
          <div class="col-lg-4 col-md-6 d-flex align-items-stretch">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-file-medical"></i></div>
              <h4><a href="/myrecords">My Records</a></h4>
              <p>Upload and store all our doctor prescriptions and scan reports</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-md-0">
            <div class="icon-box">
              <div class="icon"><i class="fas fa-people-group"></i></div>
              <h4><a href="">Family Records</a></h4>
              <p>Add our family member details and their health records</p>
            </div>
          </div>

          <div class="col-lg-4 col-md-6 d-flex align-items-stretch mt-4 mt-lg-0">
            <div class="icon-box">
              <div class="icon"><i class="bx bxs-dashboard"></i></div>
              <h4><a href="">Dashboards</a></h4>
              <p>Check each member health vitals in a dashboard view</p>
            </div>
          </div>
        </div>
      </div>
    </section>
        </div>
    );
};

export default HomePage;