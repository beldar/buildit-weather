import React, {Component} from 'react';
import {connect} from 'react-redux';
import {fetchWeather} from '../../modules/weather';
import PropTypes from 'prop-types';
import WeatherReport from '../WeatherReport';
import './App.css';

export class App extends Component {
  componentDidMount() {
    this.props.fetchData('/weather');
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
