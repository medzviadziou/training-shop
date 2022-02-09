import React from 'react';
import './blog.scss'

import articles from "../../data/articles";
import Article from "../article";



const Blog = () => {
    return (
        <div className='blog contain'>
            <div  className='blog__header'>
                <h2  className='blog__title'>LATEST FROM BLOG</h2>
                <button className='blog__button'>SEE ALL</button>
            </div>
            <div className='blog__articles'>
            {articles.map((item) => {
                return <Article item={item} key={item.id}/>
            })}
            </div>
        </div>
    );
};

export default Blog;