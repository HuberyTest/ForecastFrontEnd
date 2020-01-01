import React from 'react';
import WeatherForecast from './WeatherForecast';
import './App.css';
import './mock/cityData.js';
import './mock/forecastData.js';

function App() {
  return (
    <div className="App">
      <WeatherForecast />
    </div>
  );
}

export default App;
