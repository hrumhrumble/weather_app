<template>
    <div class="add-country">
        <div class="add-country__title">Add New Country</div>
        <form class="add-country__form" @submit.prevent="handleSubmit">
            <input class="add-country__input" type="text" :value="countryValue" @input="updateCountryValue">
            <button class="add-country__button" :disabled="countryIsLoading || countryValue.length === 0">+</button>
        </form>
        <div v-if="countryIsFailed" class="add-country__error">{{countryIsFailedMessage}}</div>
    </div>
</template>

<script>
    export default {
        computed: {
            countryValue() {
                return this.$store.state.countryValue
            },
            countryIsLoading() {
                return this.$store.state.countryIsLoading
            },
            countryIsFailed() {
                return this.$store.state.countryIsFailed
            },
            countryIsFailedMessage() {
                return this.$store.state.countryIsFailedMessage
            }
        },
        methods: {
            handleSubmit() {
                this.countryValue.length && this.$store.dispatch('getCountry', this.countryValue);
            },
            updateCountryValue(e) {
                this.$store.commit('updateCountryValue', e.target.value)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .add-country__form {
        display: flex;
        margin-bottom: 15px;
    }

    .add-country__input {
        width: 100%;
        height: 35px;
        border: 1px solid darkgrey;
        border-right: none;
        padding: 0 10px;
        font-size: 15px;
    }

    .add-country__title {
        font-size: 18px;
        margin: 15px 0;
    }

    .add-country__button {
        border: none;
        width: 45px;
        font-size: 20px;
        background-color: #5fb79a;
        color: white;

        &:disabled {
            background-color: #cccccc;
        }
    }

    .add-country__error {
        background-color: brown;
        color: white;
        padding: 5px;
        margin-bottom: 15px;
    }
</style>