import React from 'react';
import WeatherDay from './index';
import renderer from 'react-test-renderer';

describe('WeatherDay', () => {
  it('should not render if day prop is not passed', () => {
    const tree = renderer.create(
      <WeatherDay day={null} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly if day prop is passed', () => {
    const day = [{
      dt: '1499342400',
      dt_txt: '2017-07-06 12:00:00',
      main: {
        temp: 22.5,
        humidity: 60
      },
      weather: [{
        description: 'cloudy'
      }]
    }];

    const tree = renderer.create(
      <WeatherDay day={day} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
