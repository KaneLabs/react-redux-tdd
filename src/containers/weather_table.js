import React, {Component} from 'react';
import { connect } from 'react-redux';
import { Sparklines, SparklinesLine } from 'react-sparklines';

class WeatherTable extends Component{

  renderWeather(cityData){
    const name = cityData.city.name;
    const tempsInF = cityData.list.map( weather => weather.main.temp * (9 / 5) - 459.67 );
    const pressure = cityData.list.map( weather => weather.main.pressure );
    const humidity = cityData.list.map( weather => weather.main.humidity );
    return (
      <tr key={name}>
        <td>{name}</td>
        <td>
          <Sparklines data={tempsInF} height={120}>
            <SparklinesLine color="red"/>
          </Sparklines>
        </td>
        <td>
          <Sparklines data={pressure} height={120}>
            <SparklinesLine color="orange"/>
          </Sparklines>
        </td>
        <td>
          <Sparklines data={humidity} height={120}>
            <SparklinesLine color="blue"/>
          </Sparklines>
        </td>
      </tr>
    )
  }

  render(){
    return(
      <table className="weather-table">
        <thead>
          <tr>
            <td>city</td>
            <td>temperature °F</td>
            <td>pressure</td>
            <td>humidity</td>
          </tr>
        </thead>
        <tbody>
          {this.props.weather.map(this.renderWeather)}
        </tbody>
      </table>
    );
  }
}

function mapStateToProps({ weather }){
  return { weather };
}

export default connect(mapStateToProps)(WeatherTable);
