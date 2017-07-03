import React from 'react';
import WeatherHour from './index';
import renderer from 'react-test-renderer';

describe('WeatherHour', () => {
  it('should not render if hour prop is not passed', () => {
    const tree = renderer.create(
      <WeatherHour hour={null} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly if hour prop is passed', () => {
    const hour = {
      dt_txt: "2017-07-06 12:00:00",
      main: {
        temp: 22.5,
        humidity: 60
      },
      weather: [{
        description: 'cloudy'
      }]
    };

    const tree = renderer.create(
      <WeatherHour hour={hour} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
