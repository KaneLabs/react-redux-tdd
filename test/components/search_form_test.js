import { renderComponent, expect } from '../test_helper';
import SearchForm from '../../src/components/search_form'

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

  it('renders an i', () => {
    expect(component.find('i')).to.exist
  });

  it('renders a material design search icon', () => {
    expect(component.find('i')).to.have.class('material_icons');
    expect(component.find('i')).to.contain.text('search');
  });

  it('has an input', () => {
    expect(component.find('input')).to.exist
  });

  it('has an input with the right class name', () => {
    expect(component.find('input')).to.have.class('search-input')
  });

  it('renders a button', () => {
    expect(component.find('button')).to.exist
  });

  it('renders a button with the right class name', () => {
    expect(component.find('button')).to.have.class('search-button')
  });

  it('renders a button with type submit', () => {
    expect(component.find('button')).to.have.attr('type', 'submit')
  });

});
