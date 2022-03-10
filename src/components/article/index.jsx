import React from 'react';
import './article.scss'

const Article = ({item: {img, title, text, description}}) => {
    return (
        <article className='article'>
            <img className='article__img' src={img} alt={description}/>
            <div className='article__banner'>
                <h3 className='article__title'>{title}</h3>
                <p className='article__text'>{text}</p>
            </div>
        </article>
    );
};

export default Article;