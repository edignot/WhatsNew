import React from 'react'
import PropTypes from 'prop-types'
import './NotFound.css'

const NotFound = (props) => {
    
    return (
        <div 
            className={props.status ? 'hide' : 'not-found'}
            data-testid={props.status ? 'hide' : 'not-found'}
         >
            <button 
                className='back-btn' 
                onClick={() => props.changeMenu(props.selected)}
            >
                x 
            </button>
            <h2 className='search-message'>Nothing found!</h2>
        </div>
    )
}

NotFound.propTypes = {
    status: PropTypes.number,
    selected: PropTypes.string,
    changeMenu: PropTypes.func
}

export default NotFound
