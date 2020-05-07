import React, { Component } from 'react'
import PropTypes from 'prop-types'
import './SearchForm.css'

class SearchForm extends Component {
    constructor() {
        super()
        this.state = {
            searchInput: ''
        }
    }

    updateInput = (e) => {
        this.setState({ searchInput: e.target.value })
    }

    searchNews = (e) => {
        e.preventDefault()
        this.props.searchNews(this.state.searchInput)
        this.setState({ searchInput: '' })
    }

    render() {
        return (
            <form className="search">
                <input 
                    onChange={this.updateInput}
                    className='search-input'
                    placeholder='Search for News'
                    value={this.state.searchInput}
                    type='text'
                />
                <button 
                    onClick={this.searchNews}
                    className='search-btn'
                >
                    SEARCH
                </button>
            </form>
        )
    }
}

SearchForm.propTypes = {
    searchNews: PropTypes.func,
}

export default SearchForm