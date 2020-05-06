import React, { Component } from 'react'
import './App.css';
import SearchForm from '../SearchForm/SearchForm'
import Menu from '../Menu/Menu'
import NewsContainer from '../NewsContainer/NewsContainer'
class App extends Component {
  constructor() {
    super();
    this.state = {
      allNews: {},
      news: [],
      selected: ''
    }
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(data => data.json())
    .then(data => this.setState({
      allNews: data, 
      news: data.local,
      selected: 'local'
    }))
  }
  
  changeMenu = (type) => {
    this.setState({
      news: this.state.allNews[type],
      selected: type
    })
  }

  searchNews = (input) => {
    const filteredNews = this.state.news.filter(n => {
      return n.description.toLowerCase().includes(input.toLowerCase())
    });
    this.setState({
      news: filteredNews
    })
  }

  render () {
    return (
      <div className='app'>
        <SearchForm searchNews={this.searchNews} />
        <Menu 
          changeMenu={this.changeMenu}
          selected={this.state.selected} 
          types={Object.keys(this.state.allNews)} 
        />
        <NewsContainer news={this.state.news} />
      </div>
    )
  }
}

export default App
