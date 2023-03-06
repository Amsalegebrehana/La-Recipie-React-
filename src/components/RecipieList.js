import React, { useEffect, useState } from 'react';
import axios from "axios";
import Search from './Search';
const RecipieList = () => {
    let offset = 0;
    const [recipie, setRecipie] = useState([]);
    const [loading, setLoading] = useState(true);
    const getRecipie = ()=>{
        axios
          .get(`https://www.larecipe.com/api/recipes?limit=12&offset=${offset}`)
          .then(({data}) => {
              console.log(data.posts);
              const newRecipie = [];
              data.posts.forEach(p => {
                  newRecipie.push(p);
              });
              console.log(newRecipie);
              setRecipie(oldRecipie => [...oldRecipie, ...newRecipie]);
          })
          .catch(err => console.error(err));
          offset += 12;
    };
    const [searchInput, setSearchInput] = useState('');
    const [filteredResults, setFilteredResults] = useState([]);
    const searchItems = (s) => {
        setSearchInput(s);
        if(searchInput !== ''){
            const filteredData = recipie.filter((item)=>{
                return Object.values(item).join('').toLowerCase().includes(searchInput.toLowerCase())
            })
            setFilteredResults(filteredData);
        }
        else{
            setFilteredResults(recipie)
        }
        
    }
    const handleScroll = (e) =>{
        

        if(window.innerHeight + e.target.documentElement.scrollTop + 1 > e.target.documentElement.scrollHeight){
        console.log('bottom of page');
        getRecipie();
        }
    };
    useEffect(()=>{
       
        getRecipie();
        window.addEventListener('scroll', handleScroll);
    },[])
    const items = [];
    
    function removeTags(str) {
        if ((str===null) || (str===''))
            return false;
        else
            str = str.toString();
        return str.replace( /(<([^>]+)>)/ig, '');
    }
    for(let i =0; i < recipie.length; i++){
        items.push(
            <article className="col-lg-4 col-md-6 mb-40 wow fadeIn animated">
            <div className="post-card-1 border-radius-10 hover-up">
            <h5 className="post-title font-md">
                <a href="single.html">By {recipie[i].username}</a>
            </h5>
                <div className="post-thumb thumb-overlay img-hover-slide position-relative" 
                style={{"backgroundImage": `url(${recipie[i].post_img_url_src})`}}>
                    <a className="img-link" href="single.html"></a>
                </div>
                <div className="post-content p-30">
                    <div className="post-card-content">
                        <h5 className="post-title font-md">
                            <a href="single.html">{recipie[i].post_title}</a>
                        </h5>
                        <div className="entry-meta meta-1 float-left font-md mb-10">
                            <span className="post-on ">{recipie[i].post_description} </span>
                        </div>
                        <div className="entry-meta meta-1 float-left font-md mb-10">
                            <span className=" post-on text-primary" >
                                {removeTags(recipie[i].template_hashtag_links) }
                            </span>
                        </div>
                        
                    </div>
                    
                </div>
                
            </div>
        </article>
        );
    };

    return (
        <>
            <section className='pt-65 pb-35 bg-brand-4'>
            <div className="container">
                <div className="archive-header">
                    <div className="archive-header-title">
                        <h1 className="font-heading mb-30">La Reciepie
                            <sub>{recipie.length} Reciepies</sub>
                        </h1>
                    </div>
                </div>
                {/* <Search recipie={recipie}/> */}
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
            </div>
            </section>
            <div className="trending position-relative pb-15">
            <div className="container p-25">
                <div className="row">
                    {searchInput.length > 1 ? (
                        filteredResults.map((item)=>{
                            <article className="col-lg-4 col-md-6 mb-40 wow fadeIn animated">
                            <div className="post-card-1 border-radius-10 hover-up">
                            <h5 className="post-title font-md">
                                <a href="single.html">By {item.username}</a>
                            </h5>
                                <div className="post-thumb thumb-overlay img-hover-slide position-relative" 
                                style={{"backgroundImage": `url(${item.post_img_url_src})`}}>
                                    <a className="img-link" href="single.html"></a>
                                </div>
                                <div className="post-content p-30">
                                    <div className="post-card-content">
                                        <h5 className="post-title font-md">
                                            <a href="single.html">{item.post_title}</a>
                                        </h5>
                                        <div className="entry-meta meta-1 float-left font-md mb-10">
                                            <span className="post-on ">{item.post_description} </span>
                                        </div>
                                        <div className="entry-meta meta-1 float-left font-md mb-10">
                                            <span className=" post-on text-primary" >
                                                {removeTags(item.template_hashtag_links) }
                                            </span>
                                        </div>
                                        
                                    </div>
                                    
                                </div>
                                
                            </div>
                        </article>
                        })
                    )
                    
                    : items}
                  {items}
                </div>
                <div className="text-center mt-65">
                    <button className="btn btn-lg bg-dark text-white d-inline-block">Load more posts</button>
                </div>
            </div>
        </div>
        </>
    );
};

export default RecipieList;
