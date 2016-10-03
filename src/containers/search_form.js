import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import { fetchWeather } from '../actions/fetch_weather';

class SearchForm extends Component{

  constructor(props){
    super(props);
    this.state = { city: '' }

    this.onInputChange = this.onInputChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  onInputChange(e){
    this.setState({ city: e.target.value});
  }

  onFormSubmit(e){
    e.preventDefault();
    this.props.fetchWeather(this.state.city);
    this.setState({ city: '' });
  }

  render(){
    return(
      <form onSubmit={this.onFormSubmit} className="search-form">
        <i className="material-icons search-icon">search</i>
        <input
          onChange={this.onInputChange}
          value={this.state.city}
          className="search-input"
          placeholder="search for a city"
        />
        <button className="search-button" type="submit">Search</button>
      </form>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ fetchWeather }, dispatch);
}

export default connect(null, mapDispatchToProps)(SearchForm);
