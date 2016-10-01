import React, { Component } from 'react';



export default class SearchForm extends Component{

  constructor(props){
    super(props);
    this.state = { city: '' }

    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e){
    this.setState({ city: e.target.value});
  }

  handleSubmit(e){
    e.preventDefault();
  }

  render(){
    return(
      <form onSubmit={this.handleSubmit} className="search-form">
        <i className="material-icons search-icon">search</i>
        <input
          onChange={this.handleChange}
          value={this.state.city}
          className="search-input"
          placeholder="search for a city"
        />
        <button className="search-button" type="submit">Search</button>
      </form>
    );
  }
}
