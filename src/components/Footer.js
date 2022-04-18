import React from 'react';

const Footer = () => {
    return (
  <footer className="text-lg-start text-white" style={{backgroundColor: 'rgb(34, 34, 34)'}}>
    <div className="container p-4 pb-0">
      <section className>
        <div className="row">
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              About This Page
            </h6>
            <p>
             This page was built with GatsbyJs and MDBoostrap, CSS with styled components. It was deployed on Netlify. 
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
    
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">
              About Me
            </h6>
            <p>
             I blend creativity with experience to create amazing interfaces and flow that stimulate user engagement. I love keeping things simple. 
            </p>
          </div>
          <hr className="w-100 clearfix d-md-none" />
          <div className="col-md-4 col-lg-4 col-xl-4 mx-auto mt-3">
            <h6 className="text-uppercase mb-4 font-weight-bold">How You Can Reach me</h6>
            <p><i className="fas fa-envelope mr-3" /> ibraphem@gmail.com</p>
            <p><i className="fas fa-phone mr-3" /> +2347031259185</p>
          </div>
        </div>
      </section>
      <hr className="my-1" />
      <section className="p-2 pt-0">
        <div className="row d-flex align-items-center">
          <div className="col-md-7 col-lg-8 text-center text-md-start">
          </div>
  
          <div className="col-md-5 col-lg-4 ml-lg-0 text-center text-md-end">
            <a href="https://www.linkedin.com/in/ibraphem/" rel="noreferrer" target="_blank" className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-linkedin" /></a>
            <a  href="https://twitter.com/ibraphem"  rel="noreferrer" target="_blank" className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-twitter" /></a>
            <a rel="noreferrer" target="_blank" href="mailto:ibraphem@gmail.com" className="btn btn-outline-light btn-floating m-1" role="button"><i className="fab fa-google" /></a>
           
          </div>
          {/* Grid column */}
        </div>
      </section>
      {/* Section: Copyright */}
    </div>
    {/* Grid container */}
  </footer>



    );
};

export default Footer;