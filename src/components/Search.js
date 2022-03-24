import React from 'react';

const Search = () => {
    return (
        <section className="newsletter bg-brand-3 pt-40 pb-50">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-8">
                
                <form className="form-subcriber mt-30 d-flex wow fadeIn animated">
                  <input
                    type="email"
                    className="form-control bg-white font-small"
                    placeholder="Search ..."
                  ></input>
                  <button className="btn bg-dark text-white" type="submit">
                    Search
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
};

export default Search;