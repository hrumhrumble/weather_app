export default {
    addCountry(state, payload) {
        state['countries'].push(payload)
    },
    updateCountryValue(state, payload) {
        state['countryValue'] = payload
    },
    countryIsLoading(state, payload) {
        state['countryIsLoading'] = payload
    },
    countryIsFailed(state, payload) {
        state['countryIsFailed'] = payload
    },
    countryListIsEditing(state, payload) {
        state['countryListIsEditing'] = payload
    },
    countryIsFailedMessage(state, payload) {
        state['countryIsFailedMessage'] = payload
    },
    addGeoCountry(state, payload) {
        state['geoCountry'] = payload
    },
    geoCountryIsLoading(state, payload) {
        state['geoCountryIsLoading'] = payload
    },
    removeCountry(state, country) {
        state['countries'].splice(state['countries'].indexOf(country), 1);
    }
};