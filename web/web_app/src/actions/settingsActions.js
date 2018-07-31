import * as types from './actionTypes';
import { getSettings } from '../api/settingsApi';

export function loadSettingsSuccess(settings){
    return { type: types.LOAD_SETTINGS_SUCCESS, settings };
}

export function loadSettings() {
    return function(dispatch) {
        return getSettings().then(settings => {
            dispatch(loadSettingsSuccess(settings));
        }).catch(error => {
            throw(error);
        });
    }; 

}