import * as siteSettings from '../config/settings';

export function getSettings() {
    return new Promise((resolve, reject) => {
        let r = new XMLHttpRequest();
        r.open('GET', siteSettings.API_ENDPOINT);
        r.setRequestHeader(siteSettings.API_ENDPOINT_API_KEY_NAME, siteSettings.API_KEY);  
        r.onload = function() {
            if (r.status == 200) {
                resolve(JSON.parse(r.response).settings);
            }
            else {
                reject(Error(r.statusText));
            }
        };
        r.onerror = function() {
            reject(Error("Network error when calling the settings service"));
        };
        r.send();
    });
}