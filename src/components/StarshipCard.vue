<script>

export default {
    name: "StarshipCard",
    props: ["starship"],
    data() {
        return {
            name:  '',
            model: '',
            starshipCard: {},
            }
        },
    watch: {
        starship: function(){
        this.starshipCard = this.starship;
        console.log(this.starshipCard.name);
        }
    }
}
</script>

<template>
<div id="c-starship">
        <h1>Starship: {{starshipCard.name}}</h1>
        <p>{{starshipCard.model}}</p>
</div>
</template>



<style scoped>
    div {
        background-color: #000;
        padding: 20px;
    }
</style>
