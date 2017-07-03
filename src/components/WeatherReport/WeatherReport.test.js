import React from 'react';
import WeatherReport, { groupByDay } from './index';
import renderer from 'react-test-renderer';

describe('WeatherReport', () => {
  it('should not render if list prop is not passed', () => {
    const tree = renderer.create(
      <WeatherReport list={null} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it('should render correctly if list prop is passed', () => {
    const list = [{
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
      <WeatherReport list={list} />
    ).toJSON();
    expect(tree).toMatchSnapshot();
  });

  describe('WeatherReport/groupByDay', () => {
    it('should group data by day', () => {
      const input = [
        { dt_txt: '2017-07-03 15:00:00'},
        { dt_txt: '2017-07-03 16:00:00'},
        { dt_txt: '2017-07-04 15:00:00'},
        { dt_txt: '2017-07-04 15:00:00'}
      ];
      const output = {
        '2017-07-03': [
          { dt_txt: '2017-07-03 15:00:00'},
          { dt_txt: '2017-07-03 16:00:00'}
        ],
        '2017-07-04': [
          { dt_txt: '2017-07-04 15:00:00'},
          { dt_txt: '2017-07-04 15:00:00'}
        ]
      };

      expect(groupByDay(input)).toEqual(output);
    })
  })
});
