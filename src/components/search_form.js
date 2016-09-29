import React, { Component } from 'react';



export default class SearchForm extends Component{
  render(){
    return(
      <form className="search-form">
        <i className="material-icons search-icon">search</i>
        <input className="search-input" placeholder="search for a city"/>
        <button className="search-button" type="submit">Search</button>
      </form>
    );
  }
}
