import { renderComponent, expect } from '../test_helper';
import WeatherTable from '../../src/components/weather_table';

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
      expect(component).to.have.css('position');
    });

    it('has css top property', ()  => {
      expect(component).to.have.css('top');
    });

    it('has css width property', ()  => {
      expect(component).to.have.css('width');
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
  })



  it('has a body', () => {
    expect(component.find('tbody')).to.exist;
  });





});
