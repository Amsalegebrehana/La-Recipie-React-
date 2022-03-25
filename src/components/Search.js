import React, { useState } from 'react';

const Search = (prop) => {
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const searchItems = (s) => {
        setSearchInput(s);
        if(searchInput !== ''){
            const filteredData = prop.filter((item)=>{
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData);
        }
        else{
            setFilteredResults(prop)
        }
        
    }
    return (
        <section className="newsletter bg-brand-3 pt-40 pb-50">
        <div className="container">
          <div className="position-relative">
            <div className="row">
              <div className="col-lg-8">
                
                <form className="form-subcriber mt-30 d-flex wow fadeIn animated">
                  <input
                    type="text"
                    className="form-control bg-white font-small"
                    placeholder="Search ..."
                    onChange={(e)=>searchItems(e.target.value)}
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