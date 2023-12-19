import React from 'react';

class Footer extends React.Component {
  render() {
    return (
      <footer className="text-center text-lg-start bg-light text-muted">
        <div className="text-center p-4" style={{ backgroundColor: 'rgba(0, 0, 0, 0.05)' }}>
          <div className="container">
            <div className="row">
              <div className="col-lg-6">
                <h5 className="text-uppercase mb-4">Contact</h5>
                <ul className="list-unstyled mb-0">
                  <li>
                    <a href="mailto:contact@bridgetohope.org" className="text-muted">contact@bridgetohope.org</a>
      

                  </li>
              
                  <span className="text-muted"> For Donation - Bridgetohope@9@ybl</span>
                  
          
                </ul>
                <li><span className="text-muted"> Bank Holder Name : Bridge to Hope</span></li>
                <li><span className="text-muted">Bank ACC NO: 2309485720</span></li>
                <li><span className="text-muted"> IFSC : SBIN4003434</span></li>
                <li><span className="text-muted">Branch: Pune</span></li>
                <li><span className="text-muted"> Bank Name : State Bank Of India</span></li>
                <li>
                  <span className="text-muted"> Address : 123 ABC Chowk , Pune, India</span>

                </li>
                
              </div>
              <div className="col-lg-6">
                <h5 className="text-uppercase mb-4">Follow Us</h5>
                <ul className="list-inline mb-0">
                  <li className="list-inline-item">
                    <a href="#" className="text-muted">
                      <i className="fab fa-facebook-f"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-muted">
                      <i className="fab fa-twitter"></i>
                    </a>
                  </li>
                  <li className="list-inline-item">
                    <a href="#" className="text-muted">
                      <i className="fab fa-instagram"></i>
                    </a>
                  </li>
                </ul>
              </div>

            </div>
          </div>
          <div className="mt-3">
            &copy; {new Date().getFullYear()} bridgetohope.org. All rights reserved.
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;
