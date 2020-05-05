import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = (props) => {
    return (
        <section className="container">
            {props.news.map(item => {
                return <NewsArticle
                    key={item.id}
                    head={item.headline}
                    text={item.description}
                    img={item.img} 
                />
            })}
        </section>
    )
}


export default NewsContainer;
