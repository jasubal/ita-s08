<script>
import { mapState } from "vuex";
export default {
    name: "StarshipCard",
    props: ["shipID"],
    data() {
        return {
            starshipCard: {},
            starshipUrl: "",
            starshipId: "",
            //placeholderUrl: "https://starwars-visualguide.com/assets/img/placeholder.jpg",

            }
},

created() {
  //this.$store.dispatch("GET_SHIP", this.shipID);
},
watch: {
    shipID: function() {
    console.log(this.shipID)
    //this.$store.dispatch("GET_SHIP", this.shipID);
    this.renderStarship();

        },
    },
methods: {
    renderStarship() {
        this.starshipCard = {};
        this.starshipCard = this.starship;
        this.starshipUrl = this.starship.url;
        this.starshipId = this.shipID;
        let imgUrl = "https://starwars-visualguide.com/assets/img/starships/" + this.starshipId + ".jpg";
        let output = '';
        let s = this.starshipCard;
        output ="<div class='starship'>"+
        '<header class="flex center two">'+
        '<h1>'+s.name+'</h1>'+
        '<div id="imagWrapper"><img id="shipImg" src="'+imgUrl+'" @error="setErrorImg"></div>'+
        '</header>'+
        '<ul class="flex center">'+
        '<li><span>Model: </span>'+s.model+'</li>'+
        '<li><span>S Class: </span>'+s.starship_class+'</li>'+
        '<li><span>Crew: </span>'+s.crew+'</li>'+
        '<li><span>Passengers: </span>'+s.passengers+'</li>'+
        '<li><span>Cargo Capacity: </span>'+s.cargo_capacity+'</li>'+
        '<li><span>Length: </span>'+s.length+'</li>'+
        '<li><span>Hyperdrive Rating: </span>'+s.hyperdrive_rating+'</li>'+
        '<li><span>Consumables: </span>'+s.consumables+'</li>'+
        '<li><span>Cost In Credits: </span>'+s.cost_in_credits+'</li>'+
        '<li><span>MGLT: </span>'+s.MGLT+'</li>'+
        '<li><span>Manufacturer: </span>'+s.manufacturer+'</li>'+
        '</ul>';
        '</div>';
        //console.log(output);
        return output;
        },
        // renderStarship
setAltImg(event) {
        // evento que asigna ruta a etiqueta img de html
        //event.target.src = this.placeholderUrl;
      },

    },
    computed: {
    ...mapState(["starship"]),

},

}
</script>

<template>
<div id="c-starship" v-html="renderStarship()"></div>
</template>

<style scoped>
#c-starship { background-color: #303030; padding: 20px; }
@media (min-width: 56.25em) {
#c-starship { background-color: #303030; padding: 20px; max-height: 100vh; position: sticky; top: 0; }
}
</style>
