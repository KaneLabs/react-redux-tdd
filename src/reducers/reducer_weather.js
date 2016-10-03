import { FETCH_WEATHER } from '../actions/fetch_weather';

export default function weather(state = [], action ){

  switch (action.type) {
    case FETCH_WEATHER:
      return [ ...state, action.payload.data ]
      break;
    default:
    return state;
  }

}
