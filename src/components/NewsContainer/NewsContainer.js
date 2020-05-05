import React from 'react';
import './NewsContainer.css'
import NewsArticle from '../NewsArticle/NewsArticle'

const NewsContainer = () => {
    return (
        <section className="container">
            <NewsArticle 
            key="id"
            img="https://www.rollingstone.com/wp-content/uploads/2019/09/10331207d.jpg?resize=900,600&w=1200" 
            head="Obi-Wan: Lucasfilm Taps Jedi Universe Veteran To Direct Disney+ Series" 
            text="Deborah Chow will be the director who ushers Ewan McGregor back into the Jedi Universe to resume his portrayal of Obi-Wan Kenobi on the new Lucasfilm series planned for the Disney+ subscription streaming service." 
            link="adress"
            />
            <NewsArticle 
            key="id"
            img="https://www.rollingstone.com/wp-content/uploads/2019/09/10331207d.jpg?resize=900,600&w=1200" 
            head="Obi-Wan: Lucasfilm Taps Jedi Universe Veteran To Direct Disney+ Series" 
            text="Deborah Chow will be the director who ushers Ewan McGregor back into the Jedi Universe to resume his portrayal of Obi-Wan Kenobi on the new Lucasfilm series planned for the Disney+ subscription streaming service." 
            link="adress"
            />
            <NewsArticle 
            key="id"
            img="https://www.rollingstone.com/wp-content/uploads/2019/09/10331207d.jpg?resize=900,600&w=1200" 
            head="Obi-Wan: Lucasfilm Taps Jedi Universe Veteran To Direct Disney+ Series" 
            text="Deborah Chow will be the director who ushers Ewan McGregor back into the Jedi Universe to resume his portrayal of Obi-Wan Kenobi on the new Lucasfilm series planned for the Disney+ subscription streaming service." 
            link="adress"
            />
            <NewsArticle 
            key="id"
            img="https://www.rollingstone.com/wp-content/uploads/2019/09/10331207d.jpg?resize=900,600&w=1200" 
            head="Obi-Wan: Lucasfilm Taps Jedi Universe Veteran To Direct Disney+ Series" 
            text="Deborah Chow will be the director who ushers Ewan McGregor back into the Jedi Universe to resume his portrayal of Obi-Wan Kenobi on the new Lucasfilm series planned for the Disney+ subscription streaming service." 
            link="adress"
            />
            
        </section>
    )
}


export default NewsContainer;