export const WEATHER_IS_LOADING = 'weather/WEATHER_IS_LOADING'
export const WEATHER_SUCCESS = 'weather/WEATHER_SUCCESS'
export const WEATHER_ERROR = 'weather/WEATHER_ERROR'

const initialState = {
  weather: {},
  isLoading: false,
  hasErrors: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case WEATHER_IS_LOADING:
      return {
        ...state,
        isLoading: action.isLoading
      }

    case WEATHER_SUCCESS:
      return {
        ...state,
        weather: action.weather,
        isLoading: false
      }

    case WEATHER_ERROR:
      return {
        ...state,
        hasErrors: action.hasErrors,
        isLoading: false
      }

    default:
      return state
  }
}

export function weatherHasErrored(error) {
  return {
    type: WEATHER_ERROR,
    hasErrors: error
  };
}
export function weatherIsLoading(bool) {
  return {
    type: WEATHER_IS_LOADING,
    isLoading: bool
  };
}
export function weatherFetchDataSuccess(weather) {
  return {
    type: WEATHER_SUCCESS,
    weather
  };
}

export const fetchWeather = (url) => {
  return (dispatch) => {
    dispatch(weatherIsLoading(true));

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw Error(response.statusText);
        }

        return response;
      })
      .then((response) => response.json())
      .then((weather) => dispatch(weatherFetchDataSuccess(weather)))
      .catch((e) => dispatch(weatherHasErrored(e.message)));
  };
}
