<template>
    <div class="geo-country">
        <template v-if="Object.entries(geoCountry).length">
            <div class="geo-country__name">{{geoCountry['name']}}</div>
            <div class="geo-country__temp" v-celsius="geoCountry['main']['temp']"></div>
        </template>
        <template v-else>
            Loading...
        </template>
    </div>
</template>

<script>
    export default {
        mounted() {
            navigator.geolocation.getCurrentPosition(position => {
                this.$store.dispatch('getGeoCountry', position);
            })
        },
        computed: {
            geoCountry() {
                return this.$store.state.geoCountry
            },
            geoCountryIsLoading() {
                return this.$store.state.geoCountryIsLoading
            }
        }
    }
</script>

<style lang="scss" scoped>
    .geo-country {
        height: 300px;
        justify-content: center;
        align-items: center;
        background-color: #51daac;
        display: flex;
        flex-direction: column;
        color: white;
    }

    .geo-country__name {
        font-size: 26px;
        margin-bottom: 10px;
    }

    .geo-country__temp {
        font-size: 55px;
    }
</style>