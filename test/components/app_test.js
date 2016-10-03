import { renderComponent, expect } from '../test_helper';
import App from '../../src/components/app';

// In react, I use 'describe' for each Component
describe('App', () => {
  let component;

  // creates an instance of App before each 'it'
  beforeEach(() => {
    component = renderComponent(App);
  });

  // 'it' tests a single attribute
  it('renders to page', () => {

    // 'expect' makes an 'assertion' about a target
    expect(component).to.exist;
  });

  it('renders the form component', () => {
    expect(component.find('form')).to.have.class('search-form');
  });

  it('renders the table component', () => {
    expect(component.find('table')).to.have.class('weather-table');
  });

  describe('app-title', () => {

    it('has an h1', () => {
      expect(component.find('h1'))
    });

    it('displays the correct title from reducer', () => {
      expect(component).to.contain('Pow Report');
    });

    it('h1 has the correct class', () => {
      expect(component.find('h1')).to.have.class('app-title');
    });

    it('is centered', () => {
      expect(component.find('h1')).to.have.css('text-align');
    });

  });

});
