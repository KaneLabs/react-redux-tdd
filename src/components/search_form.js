import React, { Component } from 'react';

export default class SearchForm extends Component{
  render(){
    return(
      <form className="search-form">
        <i className="material-icons">search</i>
        <input className="search-input"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    );
  }
}
