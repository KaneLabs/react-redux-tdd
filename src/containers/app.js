import React, { Component } from 'react';
import { connect } from 'react-redux';
import SearchForm from '../components/search_form';
import WeatherTable from '../components/weather_table';

class App extends Component{
  render(){
    return (
      <div>
        <h1 className="app-title">{this.props.title}</h1>
        <SearchForm />
        <WeatherTable />
      </div>
    )
  }
}

function mapStateToProps(state){
  return state.title
}

export default connect(mapStateToProps)(App)
