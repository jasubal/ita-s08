<script>
import { mapState } from "vuex";

export default {
    name: "Pilots",
    data() {
        return {
            placeholderUrl: "../src/assets/pilot-not.jpg",
            pilotUrlBase: "https://starwars-visualguide.com/assets/img/characters/",

        }
},
mounted() {
    //this.$store.dispatch("GET_PILOTS",1)

},
methods : {
    pilotId(url) {
        return url.split("people/").pop().slice(0, -1);
    },
    imgUrl(url) {
        return this.pilotUrlBase + this.pilotId(url) + ".jpg";
    }
},
computed : {
    ...mapState(["pilots"]),
       //
       /*
  pilotId = function(url) {
    return url.split("people/").pop().slice(0, -1);
  } // this.pilots[idx].url.split("people/").pop().slice(0, -1);
*/

},

}
</script>

<template>
<h2>Pilots:</h2>
<ul id="s-pilots" class="flex center one two-600 three-800">
<li v-for="(pilot, idx) in pilots" v-bind:key="idx" class="flex one center">
<div class="flex one center">
    <h3>{{pilot.name}}</h3>
    <img :src="imgUrl(pilot.url)" :alt="pilot.name" class="pilot-img">
</div>
</li>
</ul>

</template>

<style>
#c-pilots h2 {
    text-align: center;
}
#c-pilots h3 {
    text-align: center;
    color: var(--c-sws);
}
#s-pilots img {
    border-radius: 20px;
}
</style>
