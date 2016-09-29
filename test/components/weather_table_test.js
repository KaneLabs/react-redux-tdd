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

});
