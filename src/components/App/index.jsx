import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../../modules/weather';
import PropTypes from 'prop-types';
import WeatherReport from '../WeatherReport';
import './App.css';
const API_KEY = '1611b57cd45b95fdf4632fcdc5fc4a86';
const OWM = `http://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&APPID=${API_KEY}`;

const isDev = () => document.location.hostname === 'localhost';

export class App extends Component {
  componentDidMount() {
    const url = isDev() ? OWM : '/weather';
    this.props.fetchData(url);
  }

  getContent() {
    if (this.props.hasErrors) {
      return <p>Sorry! There was an error loading the weather data: <code>{ this.props.hasErrors }</code></p>;
    }

    if (this.props.isLoading) {
      return <p>Loading…</p>;
    }

    return <WeatherReport list={this.props.weather.list} />;
  }

  render() {
    return (
      <div className="app">
        <h1>Weather forecast for London, UK</h1>
        <div className="app__content">
          { this.getContent() }
        </div>
      </div>
    );
  }
}

App.propTypes = {
  fetchData: PropTypes.func.isRequired,
  weather  : PropTypes.object.isRequired,
  hasErrors: PropTypes.any.isRequired,
  isLoading: PropTypes.bool.isRequired
};

const mapStateToProps = (state) => {
  return {
    weather  : state.weather.weather,
    hasErrors: state.weather.hasErrors,
    isLoading: state.weather.isLoading
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    fetchData: (url) => dispatch(fetchWeather(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
