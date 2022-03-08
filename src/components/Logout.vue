<template>
  <div id="c-logout">
    <h1>You are logged out</h1>
    <router-view>GOING HOME in 2 seconcds...</router-view>
  </div>
</template>

<script>
export default {
    name: 'logout',
    methods: {
        logout: function () {
            this.$store.dispatch('auth/LOGOUT')
            .then(() => this.$router.push('/'))
            .catch(err => console.log(err))
        }
    },
    created: function () {

       setTimeout(() => { this.logout() }, 2000);

    }

}
</script>

<style>

</style>
