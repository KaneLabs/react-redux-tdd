import { FETCH_WEATHER } from '../actions/fetch_weather';

export default function(state = [], action ){

  switch (action.type) {
    case FETCH_WEATHER:
      return [ ...state, action.payload.data ];
  }
  return state
}
