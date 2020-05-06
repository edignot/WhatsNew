import React from 'react'
import './NotFound.css'

const NotFound = (props) => {
    
    return (
        <div className={props.status ? 'hide' : 'not-found'}>
            <button className='back-btn' onClick={() => props.changeMenu(props.selected)}> x </button>
            <h2 className='search-message'>Nothing found!</h2>
        </div>
    )
}

export default NotFound
