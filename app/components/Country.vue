<template>
    <div class="country">
        <div class="country__info">
            <div class="country__name">{{country['name']}}</div>
            <div class="country__temp" v-celsius="country['main']['temp']"></div>
        </div>
        <div v-if="countryListIsEditing" class="country__actions">
            <button class="country__delete" @click="handleDelete">&times;</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'country'
        ],
        computed: {
            countryListIsEditing() {
                return this.$store.state.countryListIsEditing
            }
        },
        methods: {
            handleDelete() {
                this.$store.dispatch('removeCountry', this.country)
            }
        }
    }
</script>

<style lang="scss" scoped>
    .country {
        display: flex;
        height: 60px;
        padding: 20px;
        box-sizing: border-box;
        justify-content: space-between;
        align-items: center;
        background-color: #5fb79a;
        color: white;
    }

    .country__info {
        display: flex;
        flex-grow: 1;
        justify-content: space-between;
    }

    .country__temp {
        font-weight: bold;
    }

    .country__actions {
        margin-left: 10px;
    }

    .country__delete {
        border: none;
        background-color: brown;
        color: white;
        font-size: 16px;
    }
</style>