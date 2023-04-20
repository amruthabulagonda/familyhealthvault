import React from 'react';
import Header from './Header';
import Common from './Common';

function HomePage() {

    return (
    <div>
        <Common/>
        <Header/>
        <section id="hero" class="d-flex align-items-center">
            <div class="container">
            <h1>Welcome to Family Health Vault</h1>
            <h2>A one-stop platform for our family health care</h2>
            <a href="/login" class="btn-get-started scrollto">Get Started</a>
            </div>
        </section>
        <main id="main">
         {/* ======= Why Us Section =======  */}
    <section id="why-us" class="why-us">
      <div class="container">

        <div class="row">
          <div class="col-lg-4 d-flex align-items-stretch">
            <div class="content">
              <h3>Why Choose Family Health Vault?</h3>
              <p>
                It is basically a one stop platform for all your family health records and medical care where we can add family member details along with their health records.
              </p>
              <div class="text-center">
                <a href="/about" class="more-btn">Learn More <i class="bx bx-chevron-right"></i></a>
              </div>
            </div>
          </div>
          <div class="col-lg-8 d-flex align-items-stretch">
            <div class="icon-boxes d-flex flex-column justify-content-center">
              <div class="row">
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-plus-medical"></i>
                    <h4>Family Medicals</h4>
                    <p>We can add our family member details and their health records</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bx-receipt"></i>
                    <h4>Health Records</h4>
                    <p>We can upload and store all our doctor prescriptions and scan reports</p>
                  </div>
                </div>
                <div class="col-xl-4 d-flex align-items-stretch">
                  <div class="icon-box mt-4 mt-xl-0">
                    <i class="bx bxs-dashboard"></i>
                    <h4>Dashboards</h4>
                    <p>We can check each member health vitals in a dahsboard view</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
    </main>
    </div>
    );

}

export default HomePage;