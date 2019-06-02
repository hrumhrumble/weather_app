export default [(store) => {
    store.subscribe((action, state) => {
        localStorage.setItem('weather_app', JSON.stringify(state))
    })
}]