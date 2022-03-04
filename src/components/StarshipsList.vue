<script>
import StarshipCard from "../components/StarshipCard.vue";


export default {
   name: "StarshipsList",
   components: { StarshipCard },
    data() {
        return {
            starships:[],
            starship: {},
     }
    },
    created() {
    fetch( 'https://swapi.py4e.com/api/starships',
    { method: 'GET', headers: {'Accept': 'application/json'},})
        .then(res => res.json())
        .then(res => {
            this.starships = res.results;
            console.log(this.starships);
        });

},
methods: {
    clearWhitespace(str) {
        return str.replace(/\s/g, '-');
    },
    getStarshipData(idx) {
    //console.log(this.starships[idx]);
    this.starship = this.starships[idx];
        }
    }
}

// TODO:
// https://stackoverflow.com/questions/65944874/how-to-fetch-all-the-87-object-in-this-api

</script>

<template>
<div id="c-liststarships" class="view flex two center">

<ul>
<li v-for="(starship, idx) in starships" v-bind:key="idx">

    <div class="nau" @click="getStarshipData(idx)">
   <!--  <a v-bind:href="'#/starships/' + clearWhitespace(starship.name)"> -->
    <span class="nauNom">   {{ starship.name }}</span>
    <span class="nauModel"> {{ starship.model }}</span>
    <span class="nauIdx">   {{ idx }}</span>
<!-- </a> -->
    </div>

</li>
</ul>

<StarshipCard :starship="starship" />


</div>
</template>


<style scoped>
ul { display: flex; flex-direction: column; max-width: 480px; }
ul li { display: flex; margin: 2px; align-items: center; }
ul li a, .nau{ background: #484848; padding: 10px; text-align: left; width: 100%; display: flex; flex-direction: column; text-transform: uppercase; }
ul li a:hover, .nau:hover { background: #000; }
.nau {cursor: pointer;}
.nauNom { font-weight: bold; }
.nauModel { font-weight: normal; }
</style>
