import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../containers/search_form';
import WeatherTable from '../containers/weather_table';

export default class App extends Component{
  render(){
    return (
      <div>
        <h1 className="app-title">Weather Report</h1>
        <SearchForm />
        <WeatherTable city={this.props.weather}/>
        <a href="http://github.com/kanelabs/redux_weather_app"><img src="http://untv.github.io/assets/images/github-icon-black.svg"/><span>View Repo</span></a>
      </div>
    )
  }
}
