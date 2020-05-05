import React, { Component } from 'react'
import './App.css';
import SearchForm from '../SearchForm/SearchForm'
import Menu from '../Menu/Menu'
import NewsContainer from '../NewsContainer/NewsContainer'
import local from '../../data/local'
import entertainment from '../../data/entertainment.js'
import health from '../../data/health.js'
import science from '../../data/science.js'
import technology from '../../data/technology.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      allNews: {
        local, 
        entertainment, 
        health, 
        science, 
        technology
      },
      news: local
    }
  }

  render () {
    return (
      <div className="app">
        <SearchForm />
        <Menu news={this.state.allNews}/>
        <NewsContainer news={this.state.news}/>
      </div>
    );
  }
}

export default App;
