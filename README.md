# BuildIt Weather Forecast

Small React + Redux application that shows the weather forecast using OpenWeather API.

## Install

Just run on the root of the folder:

```
npm install
```

## Run

To run in dev mode:

```
npm start
```

To build for production run:

```
npm run build
```

## Test

All tests are inside of each component folder, some are using Jest snapshots.

To run them:

```
npm test
```

Note: Please ensure you have the latest Node LTS (v7.10 at the moment of this writting).

## Further improvements

- Make the target city configurable and/or get geolocation from browser
- Implement caching of the API calls using the service worker API for fully offline experience.
- Improve the UI with weather images/icons
- Show a chart of the different hours on each day instead of only text
- Implement refresh period (i.e. refresh data every 10min)
