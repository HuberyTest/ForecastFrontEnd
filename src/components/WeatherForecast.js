import React from 'react';
import { connect } from 'react-redux';
import { cityLoaded, cityChange } from '../redux/actions';
import Picker from './Picker';
import CityWeather from './CityWeather';

class WeatherForecast extends React.Component {

    componentDidMount() {
        const { dispatch } = this.props;
        dispatch(cityLoaded());
    }

    forecastCity = cityIndex => {
        const { dispatch } = this.props;
        dispatch(cityChange(Number.parseInt(cityIndex)));
    }

    render() {
        const {cityList, cityWeather} = this.props;
        return (
            <div className="Main">
                <h2>Current weather in your city</h2>

                <Picker cityList={cityList} onChange={this.forecastCity} />
                <div>&nbsp;</div>

                <CityWeather cityWeather={cityWeather} />
            </div>
        );
    }
}

const mapStoreToProps = state => {
    const {cityList, cityWeather} = state;
    return {
        cityList,
        cityWeather
    }
}
export default connect(mapStoreToProps)(WeatherForecast);