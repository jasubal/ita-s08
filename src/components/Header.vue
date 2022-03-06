<template>
<header id="c-header">
    <div id="app-brand" class="flex one center">
 <img id="app-logo"  alt="Vue logo" src="../assets/logo-starwars.png" />
    </div>
    <ul id="nav">
        <li> <router-link to="/">Home</router-link> </li>
        <li> <router-link to="/starships">Starships</router-link> </li>
        <li v-if="starshipsLoaded" > loaded: {{countShips}}</li>
    </ul>
</header>
</template>

<script>
import { mapState, mapGetters } from 'vuex'
export default {
    name: 'Header',
    computed: {
    ...mapGetters(["countShips"]),
    ...mapState(["starshipsLoaded"]),

},
}

</script>

<style>

</style>
