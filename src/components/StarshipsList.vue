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
getStarshipId(url){
    let id = url.split("starships/").pop().slice(0, -1);
    return id;
},
getStarshipData(idx,url) {
    //console.log(url);
    //console.log(this.shipID);
    this.starship = this.starships[idx];
    //console.log(this.starship)
    this.starship = this.starships[idx];
    this.shipID = this.getStarshipId(url)
    this.$store.dispatch("GET_SHIP", this.shipID)
    //this.starship = this.getstarship;
    //console.log(this.starship);
    this.$store.dispatch("SHOWCARD", true);
    },
    addMoreShips() {
    this.$store.dispatch("ADD_MORE_SHIPS",this.nextUrl)
    },

},
created() {
this.$store.dispatch("GET_SHIPS",1)
},

watch: {
    nextUrl : function(){
         //this.addRouter();
    },
    /*
    paramId : function(){
        this.getStarshipDataFromUrl();
    }
    */
},
computed: {
    ...mapState(["starships","starshipsLoaded","totalStarships","next","page","pilotsApiUrl"]),
    ...mapGetters(["countShips","currentPage","nextUrl","getstarship"]),
},
}

</script>

<template>
<div id="c-liststarships" class="view flex one two-800 center">

<div id="pre-ul-starships" class="flex one center">
<ul>
<li v-for="(starship, idx) in starships" v-bind:key="idx">
    <div class="nau" @click="getStarshipData(idx,starship.url)">
   <!--
    <router-link :to="{ name: 'starships', params: {name: starship.name }}">more..</router-link>
        <router-link :to="{ name: 'starship', params: {id: getStarshipId(starship.url), idx:idx  } }">
    <router-link :to="{ name: 'starship', params: {id: getStarshipId(starship.url) } }">
               <router-link to="/starships" :id="getStarshipId(starship.url)">
    <router-link to="/find" :folder="folder" :file="file">
    <a :href="'#/starships/' + clearWhitespace(starship.name)">
       -->

    <router-link :to="{ name: 'starship', params: {id: getStarshipId(starship.url)  } }">
    <span class="nauIdx">   ({{ idx }}) </span>
    <span class="nauNom">   {{ starship.name }}</span>
    <span class="nauModel"> {{ starship.model }}</span>
</router-link>

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
.nau{cursor: pointer; background: var(--c-grey); padding: 10px 2em; text-align: left; width: 100%; display: flex; flex-direction: column; text-transform: uppercase; transition: all 0.1s; border-radius: 6px }
.nau:hover { background: #000; transition: all 0.5s}
.nauNom { font-weight: bold; color: var(--c-sws);display: block; }
.nauIdx { font-weight: normal; position: relative; left: -28px; font-size: 12px; height: 0; }
#starshipsList a {
    display: flex;
    flex-direction: column;
}
@media (min-width: 70em) {
#pre-ul-starships {
    width: 35vw;
}
}

</style>
