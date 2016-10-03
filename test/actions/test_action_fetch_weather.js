import { expect } from '../test_helper';
import { FETCH_WEATHER } from '../../src/actions/action_types';
import { fetchWeather } from '../../src/actions/action_fetch_weather';


describe('action_fetch_weather', () => {

  it('has the correct type', () => {
    const action = fetchWeather();
    expect(action.type).to.equal(FETCH_WEATHER);
  });

  it('calls the API and returns a promise', () => {
    const action = fetchWeather('chicago');
    action.payload.then(response => {
      expect(response.data.city.name).to.equal('chicago')
    });
  });

});
