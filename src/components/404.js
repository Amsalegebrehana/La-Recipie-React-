import React from "react";

export default function PageNotFound() {
  return (
    <>
      <div className="main-search-form bg-brand-4">
        <div className="container">
          <div className=" pt-50 pb-50 ">
            <div className="row mb-20">
              <div className="col-12 align-self-center main-search-form-cover m-auto">
                <p className="text-center">
                  <span className="display-1">Search</span>
                </p>
                <form action="#" className="search-header">
                  <div className="input-group w-100">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search articles, places and people"
                    ></input>
                    <div className="input-group-append">
                      <button className="btn btn-search bg-white" type="submit">
                        <img
                          className="svg-icon-24"
                          src="assets/imgs/theme/svg/search.svg"
                          alt=""
                        ></img>
                      </button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div className="row mt-80 text-center">
              <div className="col-12 font-small suggested-area">
                <h5 className="suggested font-heading mb-20 text-grey-400">
                  {" "}
                  <strong>Suggested keywords:</strong>
                </h5>
                <ul className="list-inline d-inline-block">
                  <li className="list-inline-item">
                    <a href="category.html">Health</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="category.html">Travel tips</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="category.html">Lifestyle</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="category.html">Technology</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="category.html">Food</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="category.html">Books</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="category.html">Drink</a>
                  </li>
                  <li className="list-inline-item">
                    <a href="category.html">Fashion</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="bg-brand-4">
        <section className="pt-150 pb-150">
          <div className="container">
            <div className="row">
              <div className="col-lg-12 text-center">
                <img
                  className="mb-30"
                  src="assets/imgs/theme/404.png"
                  alt=""
                ></img>
                <h2 className="headline-1 font-heading">Page Not Found</h2>
                <p className="font-lg text-grey-700">
                  The link you clicked may be broken or the page may have been
                  removed.
                  <br /> visit the{" "}
                  <a href="index.html">
                    {" "}
                    <strong> Homepage</strong>
                  </a>{" "}
                  or{" "}
                  <a href="page-contact.html">
                    <strong>Contact us</strong>
                  </a>{" "}
                  about the problem
                </p>
                <form className="mt-50 w-50 m-auto" action="#" id="commentForm">
                  <div className="form-group">
                    <input
                      className="form-control bg-white"
                      name="username"
                      id="username"
                      type="text"
                      placeholder="Search..."
                    ></input>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
