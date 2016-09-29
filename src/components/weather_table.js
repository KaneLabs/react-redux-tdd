import React, {Component} from 'react';

export default class WeatherTable extends Component{
  render(){
    return(
      <table className="weather-table">
        <thead>
          <tr>
            <td>city</td>
            <td>temperature</td>
            <td>pressure</td>
            <td>humidity</td>
          </tr>
        </thead>
        <tbody></tbody>
      </table>
    );
  }
}
