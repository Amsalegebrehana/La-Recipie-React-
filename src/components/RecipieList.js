import React, { useEffect, useState } from 'react';
import axios from "axios";
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
    for(let i =0; i < recipie.length; i++){
        items.push(
            <article className="col-lg-4 col-md-6 mb-40 wow fadeIn animated">
            <div className="post-card-1 border-radius-10 hover-up">
            <h5 className="post-title font-md">
                <a href="single.html">{recipie[i].username}</a>
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
                        
                    </div>
                    <p className=" float-left  mb-10 text-primary" >
                            #{recipie[i].template_hashtag_links }
                    </p>
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
                            <sub>17 Reciepies</sub>
                        </h1>
                        <p className="mb-0">Explore from multitude resources</p>
                    </div>
                </div>
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