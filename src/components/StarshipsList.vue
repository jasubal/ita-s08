<script>
import { mapState } from "vuex";
import { mapGetters } from "vuex";
// import { mapMutations } from 'vuex'
import StarshipCard from "../components/StarshipCard.vue";

export default {
   name: "StarshipsList",
   components: { StarshipCard },
    data() {
        return {
            showcard: false,
            shipID:'',
     }
    },
methods: {


    getStarshipData(idx,url) {
    console.log(this.starships[idx]);
    this.shipID =  url.split("starships/").pop().slice(0, -1);
    this.$store.dispatch("GET_SHIP", this.shipID);
    this.showcard = true;
    //console.log("getStarshipData idx="+idx);

    //this.starship = this.starships[idx];
    },
    clearWhitespace(str) {
        return str.replace(/\s/g, '-');
    },
},
created() {
this.$store.dispatch("GET_SHIPS");
},
computed: {
    ...mapState(["starships", "starship"]),
    ...mapGetters(["countShips"]),

},
}

</script>

<template>
<div id="c-liststarships" class="view flex one two-800 center">

<ul>
<li v-for="(starship, idx) in starships" v-bind:key="idx">

    <div class="nau" @click="getStarshipData(idx,starship.url)">
   <!--  <a v-bind:href="'#/starships/' + clearWhitespace(starship.name)"> -->
    <span class="nauIdx">   ({{ idx }}) </span>
    <span class="nauNom">   {{ starship.name }}</span>
    <span class="nauModel"> {{ starship.model }}</span>

<!-- </a> -->
    </div>

</li>

<button >view more</button>
</ul>
<div>
<StarshipCard v-if="showcard" :shipID="shipID" />
</div>


</div>
</template>

<style scoped>
#starshipsList {
    max-width: 1200px;
}
ul {
    margin-block-start: 0;
    display: flex;
    flex-direction: column;
    max-width: 600px;
    padding: 0 0 5em;
    }
ul li { display: flex; margin: 2px; align-items: center; }
ul li a, .nau{
    background: #484848;
    padding: 10px 2em;
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
}
ul li a:hover, .nau:hover { background: #000; }
.nau {cursor: pointer;}
.nauNom { font-weight: bold; }
.nauNom[data-v-4d48a13a] {
    font-weight: bold;
    color: #ffeb3b;
}
.nauIdx[data-v-4d48a13a] {
    font-weight: normal;
    position: relative;
    left: -28px;
    font-size: 18px;
    height: 0;
}
</style>
