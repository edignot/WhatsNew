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
      news: []
    }
  }

  componentDidMount() {
    fetch('https://whats-new-api.herokuapp.com/api/v1/news')
    .then(data => data.json())
    .then(data => this.setState({
      allNews: data, 
      news: data.local}))
  }
  
  changeMenu = (type) => {
    this.setState({
      news: this.state.allNews[type]
    })
  }

  render () {
    return (
      <div className="app">
        <SearchForm />
        <Menu changeMenu={this.changeMenu} types={Object.keys(this.state.allNews)}/>
        <NewsContainer news={this.state.news}/>
      </div>
    );
  }
}

export default App;
