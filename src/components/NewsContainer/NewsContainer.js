import React from 'react'
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
        <section className={props.status ? 'container' : 'hide'}>
            { articles }
        </section>
    )
}

export default NewsContainer
