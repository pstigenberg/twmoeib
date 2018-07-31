import {LOAD_SETTINGS_SUCCESS} from '../actions/actionTypes';
import initialState from './initialState';

export default function siteReducer(state = initialState.settings, action){
  switch (action.type) {
    case LOAD_SETTINGS_SUCCESS:
        return action.settings;
    default:
      return state;
  }
}