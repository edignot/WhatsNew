import React, { Component } from 'react';
import './App.css';
import SearchForm from '../SearchForm/SearchForm'
import Menu from '../Menu/Menu'
import NewsContainer from '../NewsContainer/NewsContainer'
import local from '../../data/local';
import entertainment from '../../data/entertainment.js'
import health from '../../data/health.js'
import science from '../../data/science.js'
import technology from '../../data/technology.js'


class App extends Component {
  constructor() {
    super();
    this.state = {
      news: [local, entertainment, health, science, technology]
    }
  }

  render () {
    console.log(this.state.news)
    return (
      <div className="app">
        <SearchForm />
        <Menu />
        <NewsContainer />
      </div>
    );
  }
}

export default App;
