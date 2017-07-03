# BuildIt Weather Forecast

Small React + Redux application that shows the weather forecast using OpenWeather API.

## Demo

See it working [here](https://buildit-weather-qmvwopnkez.now.sh)

## Install

Just run on the root of the folder:

```
npm install
```

## Run

To run in dev mode:

```
npm run start:dev
```

To build for production run:

```
npm run build
```

To run like production, please run `npm run build` first, and then run:

```
npm start
```

## Test

All tests are inside of each component folder, some are using Jest snapshots.

To run them:

```
npm test
```

Note: Please ensure you have the latest Node LTS (v7.10 at the moment of this writing).

## Notes

Because of the requirement to have this deployed somewhere, nowadays every free hosting service serves the content on HTTPS, unfortunately OpenWeatherMap APIs only provides HTTP urls for the Free Tier.

Therefor I had to create a small Node server (`src/server.js`) that would fetch the API content and then serve it to the frontend so all communication between frontend and backend would be over HTTPS.

## Further improvements

- Make the target city configurable and/or get geolocation from browser
- Implement caching of the API calls using the service worker API for fully offline experience.
- Improve the UI with weather images/icons
- Show a chart of the different hours on each day instead of only text
- Implement refresh period (i.e. refresh data every 10min)
