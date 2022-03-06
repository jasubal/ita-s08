<script>

export default {
    name: "StarshipCard",
    data() {
        return {
            starshipCard: {},
            starshipUrl: "",
            starshipId: "",
            placeholderUrl: "https://starwars-visualguide.com/assets/img/placeholder.jpg",

            }
        },
props: {
        starship:Object
    },
created() {

},
watch: {
        starship: function() {
        this.renderStarship();

        },
    },
    created() {
        this.renderStarship();
     },
methods: {
    renderStarship() {
        this.starshipCard = this.starship;
        this.starshipUrl = this.starship.url;
        this.starshipId = this.starshipUrl.split("starships/").pop().slice(0, -1);
        let imgUrl = "https://starwars-visualguide.com/assets/img/starships/" + this.starshipId + ".jpg";
        let output = '';
        let s = this.starshipCard;
        output ="<div class='starship'>"+
        '<h1>'+s.name+'</h1>'+
        '<img id="shipImg" src="'+imgUrl+'" @error="setErrorImg">'+
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
        event.target.src = this.placeholderUrl;
      },


    },

    computed: {

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
