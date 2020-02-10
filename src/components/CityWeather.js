import React from 'react'
import PropTypes from 'prop-types'

const CityWeather = ({cityWeather}) => (
    <table>
    <tbody>
    <tr>
        <td>City</td>
        <td>{cityWeather.cityName}</td>
    </tr>
    <tr>
        <td>Updated time</td>
        <td>{cityWeather.updateTime}</td>
    </tr>
    <tr>
        <td>Weather</td>
        <td>{cityWeather.weather}</td>
    </tr>
    <tr>
        <td>Temperature</td>
        <td>{cityWeather.temperature} &#8451;</td>
    </tr>
    <tr>
        <td>Wind</td>
        <td>{cityWeather.windSpeed} m/s</td>
    </tr>
    </tbody>
    </table>
)

CityWeather.propTypes = {
    cityWeather: PropTypes.shape({
        cityIndex: PropTypes.number,
        cityName: PropTypes.string,
        updateTime: PropTypes.string,
        weather: PropTypes.string,
        temperature: PropTypes.string,
        windSpeed: PropTypes.string
    })
}

export default CityWeather;