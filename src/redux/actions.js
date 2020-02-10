import { CITY_CHANGE, CITY_LOADED } from "./actionType";
import get from '../util/RequestUtil';
import formatTime from '../util/DateUtil';

export const cityLoaded = () => (dispatch) => {
    get("/v1/forecast/cities").then((result) => {
        if (result) {
            dispatch({type: CITY_LOADED, cities: result.data});
            if (result.data.length > 0) {
                dispatch(cityChange(0));
            }
        }
    });
}

export const cityChange = (cityIndex) => (dispatch, getState) => {
    dispatch({type: CITY_CHANGE, cityWeather: {
        cityIndex: cityIndex,
        cityName: "",
        updateTime: "",
        weather: "",
        temperature: "",
        windSpeed: "" 
    }});

    let selCity = getState().cityList[cityIndex];
    get("/v1/forecast/city/" + selCity.id).then((result) => {
        if (result) {
            dispatch({type: CITY_CHANGE, cityWeather: {
                cityIndex: cityIndex,
                cityName: selCity.name,
                updateTime: formatTime(result.data.updateTime),
                weather: result.data.weather.toString(),
                temperature: result.data.temperature.toString(),
                windSpeed: result.data.windSpeed.toString()
            }});
        }
    });
} 
