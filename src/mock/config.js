import fetchMock from 'fetch-mock';
import './cityData.js';
import './forecastData.js';


let env = process.env.REACT_APP_ENV;
if (env === 'prod') {
    fetchMock.config.fallbackToNetwork = 'always';
}
