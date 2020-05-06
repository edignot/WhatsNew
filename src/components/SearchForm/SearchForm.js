import React, { Component } from 'react'
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
                    className='search-button'
                >
                    SEARCH
                </button>
            </form>
        )
    }
}

export default SearchForm