import { expect } from '../test_helper';
import WeatherReducer from '../../src/reducers/reducer_weather';
import { FETCH_WEATHER } from '../../src/actions/action_types';
import { fetchWeather } from '../../src/actions/action_fetch_weather';

describe('Weather Reducer', () => {

  it('handles action with unknown type', () => {
    // if no state or initial state return an array
    expect(WeatherReducer(undefined, {})).to.eql([]);
  });

  it('handle action type FETCH_WEATHER', () => {

    // resolve API call before sending to reducer
    fetchWeather('chicago').payload.then(response => {
      const action = { type: FETCH_WEATHER, payload: response}

      // check if reducer handles FETCH_WEATHER type and the action returns the correct data
      expect(WeatherReducer([], action)).to.have.deep.property('data.city.name', 'chicago');

    });
  });

})
