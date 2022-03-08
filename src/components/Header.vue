<template>
<header id="c-header" class="center">
    <div id="app-brand" class="flex one center">
    <router-link id="link-app-logo" to="/"> <img id="app-logo"  alt="Vue logo" src="../assets/logo-starwars.png" /></router-link>
    </div>
    <div v-if=isAuthenticated id="user-btns">
  <router-link to="/logout">LOG OUT</router-link>
    </div>
    <div v-else id="user-btns">
    <router-link to="/login">LOG IN</router-link> //
    <router-link to="/register">SIGN UP</router-link>
    </div>

    <ul id="nav">
        <li> <router-link to="/">Home</router-link> </li>
        <li> <router-link to="/starships">Starships</router-link> </li>
    </ul>
</header>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    name: 'Header',
    data(){
        return {
        }
    },
    watch: {

    },
    computed: {
        ...mapGetters({ isAuthenticated: 'auth/isAuthenticated' })
    },
}
</script>
