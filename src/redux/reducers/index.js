import { CITY_CHANGE, CITY_LOADED } from "../actionType";
import { combineReducers } from 'redux';

const cityList = (state = [], action) => {
    switch(action.type) {
        case CITY_LOADED:
            return action.cities;
        default:
            return state;
    }
}

const cityWeather = (state = {}, action) => {
    switch(action.type) {
        case CITY_CHANGE:
            return action.cityWeather;
        default:
            return state;
    }
}

export default combineReducers({cityList, cityWeather});