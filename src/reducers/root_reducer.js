import { combineReducers } from 'redux';
import TitleReducer from './reducer_title';
import WeatherReducer from './reducer_weather';

const rootReducer = combineReducers({
  title: TitleReducer,
  weather: WeatherReducer
});

export default rootReducer;
