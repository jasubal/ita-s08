<template>
<div id="liststarships" class="view flex one center">

<ul>
<li v-for="nau in starships" v-bind:key="nau">
    <a v-bind:href="'#/starships/' + clearWhitespace(nau.name)">
    <span class="nauNom">   {{ nau.name }}</span>
    <span class="nauModel"> {{ nau.model }}</span>
    </a>

</li>
</ul>

</div>
</template>

<script>
export default {
    name: 'StarshipsList',
    data() {
        return {
            starships:[]
     }
    },
    created() {
    fetch('https://swapi.py4e.com/api/starships',
    { method: 'GET', headers: {'Accept': 'application/json'},
      })
        .then(res => res.json())
        .then(res => {
            this.starships = res.results;
            console.log(this.starships);
        });
  },
methods: {
    clearWhitespace(str) {
        return str.replace(/\s/g, '-');
    }

}
}

</script>

<style scoped>
ul {
    display: flex;
    flex-direction: column;
    max-width: 480px;
}
ul li {
    display: flex;
    margin: 2px;
    align-items: center;
}
ul li a{
    background: #484848;
    padding: 10px;
    text-align: left;
    width: 100%;
    display: flex;
    flex-direction: column;
    text-transform: uppercase;
}
ul li a:hover {
    background: #000;
}
.nauNom {
    font-weight: bold;
}.nauModel {
    font-weight: normal;
}
</style>
