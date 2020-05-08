import React from 'react'
import PropTypes from 'prop-types'
import './NewsArticle.css'

const NewsArticle = (props) => {
    return (
        <article className='article'>
            <img 
            className='article-img' 
            data-testid={props.img}
            src={props.img} 
            alt=''/>
            <h2 className='article-head'>{props.headline}</h2>
            <p className='article-text'>{props.description}</p>
            <a className='article-link' href={props.url} target='_blank'>READ MORE</a>
        </article>
    )
}

NewsArticle.propTypes = {
    id: PropTypes.number,
    headline: PropTypes.string,
    img: PropTypes.string,
    description: PropTypes.string,
    url: PropTypes.string
}

export default NewsArticle