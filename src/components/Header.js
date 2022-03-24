import React from 'react';

const Header = () => {
    return (
        <>
           <aside id = "sidebar-wrapper" className='custom-scrollbar offcanvas-sidebar'>
               <button className='off-canvas-close'>
               <img
                    className="svg-icon-24"
                    src="assets/imgs/theme/svg/close.svg"
                    alt=""
                ></img>

               </button>
               <div id='widget-sidebar' className='sidebar-inner'>
                   <div className='wow fadeIn animated font-md'>
                       <ul className='social-network d-inline-block list-inline color-white mb-20 float-right'>
                           <li className='list-inline-item'>
                                <a href="/" target="_blank" title="Facebook">
                                <i className="elegant-icon social_facebook"></i>
                            </a>
                           </li>
                           <li className="list-inline-item">
                                <a href="/" target="_blank" title="Instagram">
                                <i className="elegant-icon social_instagram"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/" target="_blank" title="YouTube">
                                <i className="elegant-icon social_youtube"></i>
                                </a>
                            </li>
                            <li className="list-inline-item">
                                <a href="/" target="_blank" title="Twitter">
                                <i className="elegant-icon social_twitter"></i>
                                </a>
                            </li>
                       </ul>
                   </div>
                   <div className="sidebar-widget widget-creative-menu">
                    <ul>
                    <li>
                        <a href="/">Home</a>
                    </li>
                    <li>
                        <a href="/about">About</a>
                    </li>
                    <li>
                        <a href="/article">
                        Articles<sup>17</sup>
                        </a>
                    </li>
                    <li>
                        <a href="/contact">Contact</a>
                    </li>
                    </ul>
                </div>
               </div>
            </aside> 
            <header className="main-header header-sticky">
        <div className="position-relative">
          <div className="container align-self-center">
            <div className="header-style-1">
              <div className="logo">
                <a href="/">
                  <img
                    src="assets/imgs/theme/logo.png"
                    alt="logo"
                    className="logo"
                  />
                </a>
              </div>
              <div className="main-nav d-none d-lg-block">
                <nav>
                  <ul className="main-menu d-none d-lg-inline">
                    <li className="menu-item-has-children">
                      <a href="/">Home</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/about">About</a>
                    </li>
                    <li className="menu-item-has-children">
                      <a href="/article">Articles</a>
                    </li>
                    <li>
                      {" "}
                      <a href="/contact">Contact</a>{" "}
                    </li>
                  </ul>
                </nav>
              </div>
              <div className="header-right">
                <button className="btn btn-md bg-dark text-white ml-15 box-shadow d-none d-lg-inline">
                  <a
                    href="https://give.ratiochristi.org/chapter/houston-baptist-university"
                    target="blank"
                  >
                    Support our ministry
                  </a>
                </button>
              </div>
            </div>
            <div className="mobile_menu d-lg-none d-block"></div>
          </div>
          <div className="off-canvas-toggle-cover d-inline-block">
            <div
              className="off-canvas-toggle hidden d-inline-block"
              id="off-canvas-toggle"
            >
              <img
                className="svg-icon-24"
                src="assets/imgs/theme/svg/menu.svg"
                alt=""
              ></img>
            </div>
          </div>
        </div>
      </header>
        </>
    );
};

export default Header;