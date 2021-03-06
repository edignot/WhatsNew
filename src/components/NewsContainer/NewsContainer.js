import React from 'react'
import PropTypes from 'prop-types'
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
    const articles = props.news.map(item => {
        return <NewsArticle
            key={item.id}
            {...item}
        />
    })
    return (
        <section 
            className={props.status ? 'container' : 'hide'}
            data-testid={props.status ? 'container' : 'hide'}
        >
            { articles }
        </section>
    )
}

NewsContainer.propTypes = {
    news: PropTypes.array,
    status: PropTypes.number
}

export default NewsContainer
