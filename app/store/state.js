let state = {
    countries: [],
    countryValue: '',
    countryIsLoading: false,
    countryIsFailed: false,
    countryIsFailedMessage: '',
    countryListIsEditing: false,
    geoCountry: {},
    geoCountryIsLoading: false
};

let localState = JSON.parse(localStorage.getItem('weather_app'));

export default localState || state;