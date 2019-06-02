export default function (params) {
    let url = 'https://api.openweathermap.org/data/2.5/weather?';

    let defaultParams = {
        appid: '4e9bcc73202a27856576ebace8d81dbc',
        units: 'metric',
        lang: 'ru'
    };
    let allParams = Object.assign({}, params, defaultParams);

    return url.concat(Object.keys(allParams)
        .map(key => encodeURIComponent(key) + '=' + encodeURIComponent(allParams[key]))
        .join('&'))

}

