import React, { Component } from 'react';

export default class SearchForm extends Component{
  render(){
    return(
      <form className="search-form">
        <i className="material_icons">search</i>
        <input className="search-input"/>
        <button className="search-input">Search</button>
      </form>
    );
  }
}
