import { createStore } from 'vuex'

export default createStore({
  // poner variables y colecciones aquí
  state: {
    MSG: 'ok',
    starships:[],
    starship: {},


  },
  mutations: {
      // funciones síncronas para cambiar el estado e.j. put, edit, delete
      LOAD_SHIPS: (state, payload) => (state.starships = payload),
      LOAD_SHIP: (state, payload) => (state.starship = payload),
  },
  actions: {
   // funciones asíncronas que puede llamar una o más mutaciones
   GET_SHIPS:(state) => {
     fetch('https://swapi.py4e.com/api/starships',
     { method: 'GET', headers: {'Accept': 'application/json'},})
     .then((res) => {
        return res.json();
     })
     .then((data) => {
       state.commit('LOAD_SHIPS', data.results)
       console.log(data.results)
      });
    },



  },
  getters: {
    // pon el equivalente a las propiedades computadas aquí
    countShips: (state) => state.starships.length,
  },
})
