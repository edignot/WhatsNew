import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = () => {
    return (
        <section className="container">
            <NewsArticle 
            key="id"
            img="image" 
            head="head" 
            text="text" 
            link="adress"
            />
        </section>
    )
}


export default NewsContainer;