import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="pt-65 bg-dark">
        <div className="container">
          <div className="row mb-65">
            <div className="col-md-6">
              <div className="logo wow fadeIn animated">
                {/* index.html link here should be linked with app.js route name */}
                <a href="index.html">
                  {" "}
                  <img src="assets/imgs/theme/logo2.png" alt="" />
                </a>
              </div>
            </div>
            <div className="col-md-6">
              <div className="d-flex text-right text-sm-left align-self-center justify-content-end wow fadeIn animated">
                <h5 className="mr-15 text-white mb-0 align-self-center">
                  Transform life on campus{" "}
                </h5>
                <button className="btn btn-lg bg-brand-1">
                  <a href="#">Become a supporter</a>
                </button>
              </div>
            </div>
            <div className="col-12">
              <div className="bottom-line mt-40" />
            </div>
          </div>
          <div className="row bottom-area-2">
            <div className="col-lg-7 col-md-6">
              <div className="sidebar-widget widget-about wow fadeIn animated mb-30">
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">About</h5>
                </div>
                <div className="textwidget">
                  <p>
                    Ratio Christi (Latin for ‘The Reason of Christ’) is a global
                    movement that equips university students and faculty to give
                    historical, philosophical, and scientific reasons for
                    following Jesus Christ.{" "}
                  </p>
                  <p>
                    <strong className="color-black">Address</strong>
                    <br />
                    7502 Fondren Rd, <br />
                    Houston, TX 77074
                  </p>
                  <p>
                    <strong className="color-black">Phone</strong>
                    <br />
                    (888) 888-8888
                  </p>
                </div>
              </div>
            </div>
            <div className="col-lg-3 col-md-6">
              <div
                className="sidebar-widget widget_categories wow fadeIn animated mb-30"
                data-wow-delay="0.1s"
              >
                <div className="widget-header-2 position-relative mb-30">
                  <h5 className="mt-5 mb-30">Helpful link</h5>
                </div>
                <ul className="font-small">
                  <li className="cat-item cat-item-2">
                    <a href="./page-about.html">About</a>
                  </li>
                  <li className="cat-item cat-item-4">
                    <a href="#">Articles</a>
                  </li>
                  <li className="cat-item cat-item-5">
                    <a href="#">Support ministry</a>
                  </li>
                  <li className="cat-item cat-item-6">
                    <a href="#">National Chapter</a>
                  </li>
                  <li className="cat-item cat-item-7">
                    <a href="#">Contact</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-copy-right pt-30 mt-20 wow fadeIn animated font-md">
            <p className="float-md-left font-small text-muted">
              {" "}
              Copyright © 2021,{" "}
              <a href="https://ethiopican.com" target="_blank">
                Ethiopican
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