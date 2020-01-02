import React from 'react';
import get from '../util/RequestUtil';
import formatTime from '../util/DateUtil';

class WeatherForecast extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            cities: [],
            selName: "",
            updateTime: "",
            weather: "",
            temperature: "",
            windSpeed: ""
        }
    }

    componentDidMount() {
        get("/v1/forecast/cities").then((result) => {
            if (result) {
                this.setState({cities: result.data});

                this.forecastCity(this.state.cities[0].id);
            }
        });
    }

    forecastCity = (cityId) => {
        get("/v1/forecast/city/" + cityId).then((result) => {
            if (result) {
                let selCity = this.state.cities.find((c) => c.id === cityId);
                this.setState({
                    selName: selCity.name,
                    updateTime: formatTime(result.data.updateTime),
                    weather: result.data.weather,
                    temperature: result.data.temperature,
                    windSpeed: result.data.windSpeed
                });
            }
        });
    }

    render() {
        const ops = this.state.cities.map((item) => <option key={item.id} value={item.id}>{item.name}</option>);
        return (
            <div className="Main">
                <h2>Current weather in your city</h2>

                <select onChange={(e) => this.forecastCity(e.target.value)}>
                    {ops}
                </select>
                <div>&nbsp;</div>

                <table>
                <tbody>
                <tr>
                    <td>City</td>
                    <td>{this.state.selName}</td>
                </tr>
                <tr>
                    <td>Updated time</td>
                    <td>{this.state.updateTime}</td>
                </tr>
                <tr>
                    <td>Weather</td>
                    <td>{this.state.weather}</td>
                </tr>
                <tr>
                    <td>Temperature</td>
                    <td>{this.state.temperature} &#8451;</td>
                </tr>
                <tr>
                    <td>Wind</td>
                    <td>{this.state.windSpeed} m/s</td>
                </tr>
                </tbody>
                </table>

            </div>
        );
    }
}

export default WeatherForecast;