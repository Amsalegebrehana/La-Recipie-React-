import React, { useEffect, useState } from 'react';
import axios from "axios";
import Search from './Search';
const RecipieList = () => {
    const [recipie, setRecipie] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(()=>{
        const getRecipie = ()=>{
            axios
              .get("https://www.larecipe.com/api/recipes/")
              .then(res => {
                  console.log(res.data.posts);
                  setRecipie(res.data.posts);
              })
              .catch(err => console.error(err));
        }
        getRecipie();
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
                <Search/>
            </div>
            </section>
            <div className="trending position-relative pb-15">
            <div className="container p-25">
                <div className="row">
             
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