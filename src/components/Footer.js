import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="pt-65 bg-dark">
        <div className="container">
          <div className="row mb-65">
            <div className="col-md-6">
              <div className="logo wow fadeIn animated">
               
                <a href="index.html">
                  Recipie App
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex text-right text-sm-left align-self-center justify-content-end wow fadeIn animated">
                <h5 className="mr-15 text-white mb-0 align-self-center">
                  Recipie App
                </h5>
                <button className="btn btn-lg bg-brand-1">
                  <a href="#">Become a supporter</a>
                </button>
              </div>
            </div>
            
          </div>
          
          <div className="footer-copy-right pt-30 mt-20 wow fadeIn animated font-md">
            <p className="float-md-left font-small text-muted">
              {" "}
              Copyright © 2021,{" Amsale G "}
              <a href="#" target="_blank">
                Ethiopia
              </a>
            </p>
            <ul className="social-network d-inline-block list-inline color-white mb-20 float-right">
              <li className="list-inline-item">
                <a href="#" target="_blank" title="Facebook">
                  <i className="elegant-icon social_facebook" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" title="Instagram">
                  <i className="elegant-icon social_instagram" />
                </a>
              </li>
              <li className="list-inline-item">
                <a href="#" target="_blank" title="YouTube">
                  <i className="elegant-icon social_youtube" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </footer>
        </div>
    );
};

export default Footer;