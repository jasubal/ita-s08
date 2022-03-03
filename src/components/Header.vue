<template>
<header id="c-header">
    <div id="app-brand" class="flex one center">
 <img id="app-logo"  alt="Vue logo" src="../assets/logo-starwars.png" />
    </div>
    <ul id="nav">
        <li> <router-link to="/">Home</router-link> </li>
        <li> <router-link to="/starships">Starships</router-link> </li>
    </ul>
</header>
</template>

<script>
export default {
    name: 'Header',
}

</script>

<style>

</style>
