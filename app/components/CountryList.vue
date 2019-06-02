<template>
    <div class="country_list">
        <template v-for="country in countries">
            <Country :country="country" :key="country['id']"/>
        </template>
    </div>
</template>

<script>
    import Country from './Country.vue'

    export default {
        components: {
            Country
        },
        computed: {
            countries() {
                return this.$store.state.countries;
            }
        }
    }
</script>