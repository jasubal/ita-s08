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
            shipID:'',
            starship: {},
     }
    },
methods: {
    getStarshipData(idx,url) {
    //console.log(this.starships[idx]);
    this.shipID =  url.split("starships/").pop().slice(0, -1);
    this.$store.dispatch("GET_SHIP", this.shipID)
    // .then(() => this.$store.dispatch("CREATE_PILOTS_OBJECTS", this.pilotsApiUrl))

    this.$store.dispatch("SHOWCARD", true);
    //this.showcard = true;
    this.starship = this.starships[idx];
    },
    addMoreShips() {
    this.$store.dispatch("ADD_MORE_SHIPS",this.nextUrl)
    },

    clearWhitespace(str) {
        return str.replace(/\s/g, '-')
    },
    addRouter(){
// update router
// console.log(this.$route.query)
// this.$router.push({ path: '/starships', query: { page: this.page } })
    }
},
created() {
this.$store.dispatch("GET_SHIPS",1)
},

watch: {
    nextUrl : function(){
         this.addRouter();
    }
},
computed: {
    ...mapState(["starships","starshipsLoaded", "starship","totalStarships","next","page","pilotsApiUrl"]),
    ...mapGetters(["countShips","currentPage","nextUrl"]),
/*
    page: 1,
    totalStarships: '',
    next: '',
    previous: '',
    starships:[],
    starship: {},
    pilotsApiUrl: [],
    pilots: [],
    starshipsLoaded: false,
    showcard: false,*/

},
}

</script>

<template>
<div id="c-liststarships" class="view flex one two-800 center">

<div id="pre-ul-starships" class="flex one center">
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
<li v-if="starshipsLoaded" ><span class="flex center">Loaded {{countShips}} Starships of {{totalStarships}}</span>  </li>
<button v-if="next"  @click="addMoreShips()">view more</button>
<li v-else class="flex center">No more ships...</li>
</ul>
</div>
<div id="pre-c-starchipcards">
<StarshipCard  :shipID="shipID" :starship="starship"  />
</div>


</div>
</template>

<style scoped>
#starshipsList { max-width: 1200px; }
#pre-ul-starships {
    margin: 0;
}
ul { margin-block-start: 0; display: flex; flex-direction: column; padding: 0 0 5em; }
ul li { display: flex; margin: 2px; align-items: center; }
ul li a, .nau{ background: var(--c-grey); padding: 10px 2em; text-align: left; width: 100%; display: flex; flex-direction: column; text-transform: uppercase; transition: all 0.1s  }
.nau {border-radius: 6px}
ul li a:hover, .nau:hover { background: #000; transition: all 0.5s}
.nau {cursor: pointer;}
.nauNom { font-weight: bold; }
.nauNom { font-weight: bold; color: var(--c-sws); }
.nauIdx { font-weight: normal; position: relative; left: -28px; font-size: 12px; height: 0; }

@media (min-width: 70em) {
#pre-ul-starships {
    width: 35vw;
}
}

</style>
