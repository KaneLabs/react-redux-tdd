import { renderComponent, expect } from '../test_helper';
import WeatherTable from '../../src/containers/weather_table';

describe('WeatherTable', () => {

  let component;
  beforeEach(() => {
    component = renderComponent(WeatherTable);
  });

  it('renders to page', () => {
    expect(component).to.exist;
  });

  it('has the correct class', () => {
    expect(component).to.have.class('weather-table');
  });

  describe('weather_table displays below search_input', () => {

    it('has css position property', () => {
      expect(component).to.have.css('position').exist;
    });

    it('has css top property', ()  => {
      expect(component).to.have.css('top').exist;
    });

    it('has css width property', ()  => {
      expect(component).to.have.css('width').exist;
    });

  });

  describe('weather-header', () => {
    it('has a header', () => {
      expect(component.find('thead')).to.exist;
    });

    it('has row inside a header', () => {
      expect(component.find('thead').find('tr')).to.exist;
    });

    it('has 4 header values', () => {
      expect(component.find('thead').find('tr').children().length).to.equal(4);
    });
    it('has a styled header', () => {
      expect(component.find('thead')).to.have.css('text-align');
    });

    describe('weather-header has correct values', () => {

      it('has city header', () => {
        expect(component.find('thead').find('tr').children()).to.contain('city');
      });

      it('has temperature header', () => {
        expect(component.find('thead').find('tr').children()).to.contain('temperature');
      });

      it('has temperature pressure', () => {
        expect(component.find('thead').find('tr').children()).to.contain('pressure');
      });

      it('has temperature humidity', () => {
        expect(component.find('thead').find('tr').children()).to.contain('humidity');
      });

    });


  });


  describe('weather-body', () => {

    beforeEach(() => {
      const mockWeatherPropsFromAPI = {
        weather: [
          {
            city: {name: 'chicago'},
            list: [
              {
                main: {
                  humidity:100,
                  pressure:1009.53,
                  temp:287.64
                }
              }
            ]
          }
        ]
      };
      component = renderComponent(WeatherTable, null, mockWeatherPropsFromAPI)
    });

    it('renders', () => {
      expect(component.find('tbody')).to.exist;
    });

    it('displays weather props title in body', () => {
      expect(component.find('tbody')).to.contain('chicago');
    });

    it('renders an sparklines graphs', () => {
      expect(component.find('tbody').find('tr').find('td').find('svg')).to.exist;
    });

  });

});
