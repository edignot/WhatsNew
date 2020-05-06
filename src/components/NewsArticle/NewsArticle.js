import React from 'react'
import './NewsArticle.css'

const NewsArticle = (props) => {
    return (
        <article className='article'>
            <img className='article-img' src={props.img} alt='News'/>
            <h2 className='article-head'>{props.headline}</h2>
            <p className='article-text'>{props.description}</p>
            <a className='article-link' href={props.url} target='_blank'>READ MORE</a>
        </article>
    )
}

export default NewsArticle