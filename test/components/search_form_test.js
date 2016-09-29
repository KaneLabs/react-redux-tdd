import { renderComponent, expect } from '../test_helper';
import SearchForm from '../../src/components/search_form';

describe('SearchForm', () => {

  let component;

  beforeEach(() => {
    component = renderComponent(SearchForm)
  });

  it('renders to the page', () => {
    expect(component).to.exist;
  });

  it('has the right class', () => {
    expect(component).to.have.class('search-form');
  });

  describe('it is centered', () => {
    it('has position', () => {
      expect(component).to.have.css('position');
    });

    it('has margin', () => {
      expect(component).to.have.css('margin');
    });

    it('has width', () => {
      expect(component).to.have.css('width');
    });

    it('has border', () => {
      expect(component).to.have.css('border');
    });

  });

  describe('search-icon', () => {

    it('renders an i', () => {
      expect(component.find('i')).to.exist;
    });

    it('renders a material design search icon', () => {
      expect(component.find('i')).to.have.class('material-icons');
      expect(component.find('i')).to.contain.text('search');
    });

    it('icon has search-icon class', () => {
      expect(component.find('i')).to.have.class('search-icon');
    });

    it('is styled', () => {
      expect(component.find('i')).to.have.css('color');
    });

  });

  describe('search-input', () => {

    it('has an input', () => {
      expect(component.find('input')).to.exist;
    });

    it('has an input with the right class name', () => {
      expect(component.find('input')).to.have.class('search-input');
    });

    it('has the correct placeholder value', () => {
      expect(component.find('input')).to.have.attr('placeholder', 'search for a city');
    });

    it('is styled', () => {
      expect(component.find('input')).to.have.css('width');
    });

  });

  describe('search-button', () => {

    it('renders a button', () => {
      expect(component.find('button')).to.exist;
    });

    it('renders a button with the right class name', () => {
      expect(component.find('button')).to.have.class('search-button');
    });

    it('renders a button with type submit', () => {
      expect(component.find('button')).to.have.attr('type', 'submit');
    });

    it('is styled', () => {
      expect(component.find('button')).to.have.css('width');
    });

  });

});
