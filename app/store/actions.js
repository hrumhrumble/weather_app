import openWeatherUrl from '../utils/openWeatherApi'

export default {
    removeCountry({commit}, country) {
        commit('removeCountry', country);
    },
    getCountry({commit}, country) {
        let url = openWeatherUrl({q: country});

        commit('countryIsLoading', true);

        fetch(url)
            .then(response => {
                if (response['status'] === 404) {
                    response.json().then(error => {
                        commit('countryIsLoading', false);
                        commit('countryIsFailed', true);
                        commit('countryIsFailedMessage', error['message']);
                    })
                }

                return response.json()
            })
            .then(result => {
                commit('countryIsLoading', false);
                commit('countryIsFailed', false);
                commit('countryIsFailedMessage', '');
                commit('updateCountryValue', '');
                commit('addCountry', result)
            });
    },
    getGeoCountry({commit}, position) {
        let url = openWeatherUrl({
            lat: position.coords.latitude,
            lon: position.coords.longitude
        });

        commit('geoCountryIsLoading', true);

        fetch(url)
            .then(response => response.json())
            .then(result => {
                commit('geoCountryIsLoading', false);
                commit('addGeoCountry', result)
            });
    }
};