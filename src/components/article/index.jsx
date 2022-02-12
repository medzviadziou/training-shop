import React from 'react';

import './article.scss'

const Article = (props) => {
    return (
        <article className='article'>
            <img className='article__img' src={props.item.img} alt={props.item.description}/>
            <div className='article__banner'>
                <h3 className='article__title'>{props.item.title}</h3>
                <p className='article__text'>{props.item.text}</p>
            </div>
        </article>
    );
};

export default Article;