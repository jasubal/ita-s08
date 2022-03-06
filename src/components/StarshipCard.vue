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
        this.starshipCard = this.starship;
        this.starshipUrl = this.starship.url;
        this.starshipId = this.shipID;
        let imgUrl = "https://starwars-visualguide.com/assets/img/starships/" + this.starshipId + ".jpg";
        let output = '';
        let s = this.starshipCard;
        output ="<div class='starship'>"+
        '<h1>'+s.name+'</h1>'+
        '<div id="imagWrapper"><img id="shipImg" src="'+imgUrl+'" @error="setErrorImg"></div>'+
        '<ul class="flex center one two-600">'+
        '<li>Model: <BR>'+s.model+'</li>'+
        '<li>Manufacturer: <BR>'+s.manufacturer+'</li>'+
        '<li>S Class: <BR>'+s.starship_class+'</li>'+
        '<li>Hyperdrive Rating: <BR>'+s.hyperdrive_rating+'</li>'+
        '<li>MGLT: <BR>'+s.MGLT+'</li>'+
        '<li>Cargo Capacity: <BR>'+s.cargo_capacity+'</li>'+
        '<li>Consumables: <BR>'+s.consumables+'</li>'+
        '<li>Cost In Credits: <BR>'+s.cost_in_credits+'</li>'+
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
#c-starship {
    background-color: #303030;
    padding: 20px;
    }
@media (min-width: 56.25em) {
#c-starship {
    background-color: #303030;
    padding: 20px;
    max-height: 100vh;
    position: sticky;
    top: 0;
    }


}
</style>
