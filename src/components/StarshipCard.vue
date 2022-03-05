<script>

export default {
    name: "StarshipCard",
    props: ["starship"],
    data() {
        return {
            starshipCard: {},
            name: "",
            model: "",
            url: "",
            }
        },
    watch: {
        starship: function(){
        this.starshipCard = this.starship;
        this.name = this.starshipCard.name;
        this.model = this.starshipCard.model;
        this.url = this.starshipCard.url;
        }
    },
    computed: {
        imgUrl(){
            let id = this.url.split("starships/").pop().slice(0, -1);
            let url = "https://starwars-visualguide.com/assets/img/starships/" + id + ".jpg";
            console.log(url);
            return url;
        }

    }
}
</script>

<template>
<div v-if="$store.state.msg=='ok'" id="c-starship">
    <h1>Starship: {{starshipCard.name}}</h1>
    <p>{{starshipCard.model}}</p>
    <img v-bind:src="imgUrl" alt="">
</div>
</template>






<style scoped>
    #c-starship {
    background-color: #303030;
    padding: 20px;
    max-height: 90vh;
    position: sticky;
    top: 0;
    }
</style>
