import React from 'react';
import './Menu.css'

const Menu = (props) => {
let types = Object.keys(props.news)
types.map(type => <li className="type">{type}</li>)
    return (
        <nav>
            <div>BACKGROUND IMAGE</div>
            <ul>
                { types }
            </ul>
        </nav>
    )
}

export default Menu;