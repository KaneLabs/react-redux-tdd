import { combineReducers } from 'redux';
import TitleReducer from './reducer_title'

const rootReducer = combineReducers({
  title: TitleReducer
});

export default rootReducer;
