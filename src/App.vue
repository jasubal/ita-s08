<script>
import Header    from './components/Header.vue'
import Footer    from './components/Footer.vue'

export default {
  name: 'App',
  components: {Header,Footer }
}
</script>

<template>
<div id="page">
<Header />
  <!-- component matched by the route will render here -->
<div id="v-views" class="flex one center">
  <router-view />
</div>
<Footer />
</div>
</template>

<style>
</style>
