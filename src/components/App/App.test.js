import React from 'react';
import { mount } from 'enzyme';
import {App} from './index';

const renderComponent = props => mount(<App {...props} />);

const getProps = overwrites => Object.assign({
  fetchData: jest.fn(),
  weather: {},
  isLoading: false,
  hasErrors: false
}, overwrites);

describe('App', () => {
  it('should call fetchData on mount with the right url', () => {
    const props = getProps();
    const component = renderComponent(props);
    expect(props.fetchData).toBeCalledWith('http://api.openweathermap.org/data/2.5/forecast?q=London,uk');
  });

  it('should display a loading message if isLoading is true', () => {
    const props = getProps({isLoading: true});
    const component = renderComponent(props);
    expect(component.find('.app__content p').text()).toBe('Loading…');
  });

  it('should display an error if hasErrors is not false', () => {
    const props = getProps({hasErrors: 'Yes'});
    const component = renderComponent(props);
    expect(component.find('.app__content p').text()).toBe('Sorry! There was an error loading the items: Yes');
  });

  it('should pass the right props to its children if successful data', () => {
    const weather = {
      list: []
    };
    const props = getProps({weather});
    const component = renderComponent(props);
    expect(component.find('WeatherReport').length).toBe(1);
    expect(component.find('WeatherReport').props().list).toEqual(weather.list);
  })
})
