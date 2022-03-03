<script>
import StarshipsList from "../components/StarshipsList.vue";

export default {
  name: "Starships",
  components: { StarshipsList },
  data() {
    return {

    }
  },

}
</script>

<template>
  <div id="starshipsList" class="view">
    <h1>Starships page</h1>
    <StarshipsList />
  </div>
</template>
