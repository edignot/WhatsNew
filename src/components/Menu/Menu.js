import React from 'react';
import './Menu.css'

const Menu = (props) => {
let categories = props.types.map(type => <li onClick={() => props.changeMenu(type)} className="type">{type}</li>)
    return (
        <nav>
            <div className="menu-img">
                <h1> What's New?</h1>
            </div>
            <ul className="type-container">
                { categories }
            </ul>
        </nav>
    )
}

export default Menu;