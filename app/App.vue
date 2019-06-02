<template>
    <div class="weather-app">
        <div class="weather-app__edit-wrap" v-if="countryListIsEditing">
            <div class="weather-app__back" @click="handleListEditing(false)">&larr; back</div>
            <AddCountry/>
            <CountryList/>
        </div>
        <div v-else>
            <div class="weather-app__edit" @click="handleListEditing(true)">&#43;</div>
            <GeoCountry/>
            <CountryList/>
        </div>
    </div>
</template>

<script>
    import AddCountry from './components/AddCountry.vue'
    import Country from './components/Country.vue'
    import CountryList from './components/CountryList.vue'
    import GeoCountry from './components/GeoCountry.vue';

    export default {
        components: {
            GeoCountry,
            AddCountry,
            Country,
            CountryList
        },
        data() {
            return {
                isCountryEditing: false
            }
        },
        computed: {
            countryListIsEditing() {
                return this.$store.state.countryListIsEditing
            }
        },
        methods: {
            handleListEditing(payload) {
                this.$store.commit('countryListIsEditing', payload)
            }
        }
    }
</script>

<style lang="scss">
    html, body {
        height: 100%;
    }

    body {
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: Helvetica, sans-serif;
    }

    .weather-app {
        flex-grow: 1;
        max-width: 300px;
        position: relative;
    }

    .weather-app__edit {
        position: absolute;
        right: 10px;
        top: 10px;
        color: white;
        font-size: 30px;
        z-index: 1;
        width: 30px;
        height: 30px;
        display: flex;
        justify-content: center;
        align-items: flex-end;
        cursor: pointer;
        transition: all 0.2s;
        user-select: none;

        &:hover {
            background-color: white;
            color: #51daac;
        }
    }

    .weather-app__edit-wrap {
        background-color: rgba(81, 218, 172, 0.2);
        padding: 15px;
        box-sizing: border-box;
    }

    .weather-app__back {
        position: relative;
        color: #000;
        display: inline-flex;
        cursor: pointer;
        padding: 5px;
        box-sizing: border-box;

        &:hover {
            background-color: black;
            color: white;
        }
    }
</style>