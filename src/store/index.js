import { createStore } from 'vuex'

export default createStore({
  // poner variables y colecciones aquí
  state: {
    MSG: 'ok',
    starships:[],
    starship: {},
    starshipsLoaded: false,


  },
  mutations: {
      // funciones síncronas para cambiar el estado e.j. put, edit, delete
      LOAD_SHIPS: (state, payload) => (state.starships = payload),
      LOAD_SHIP:  (state, payload) => (state.starship = payload),
      SHIPSLOADED:(state, payload) => (state.starshipsLoaded = payload),
      SHIPLOADED: (state, payload) => (state.starshipLoaded = payload),
  },
  actions: {
   // funciones asíncronas que puede llamar una o más mutaciones
   GET_SHIPS:(state) => {
     fetch('https://swapi.py4e.com/api/starships',
     { method: 'GET', headers: {'Accept': 'application/json'},})
     .then((res) => { return res.json(); })
     .then((data) => {
       state.commit('LOAD_SHIPS', data.results)
       state.commit('SHIPSLOADED', true)
       //console.log(data.results)
      });
    },
    GET_SHIP:(state, payload) => {
      fetch(`https://swapi.py4e.com/api/starships/${payload}`,
      { method: 'GET', headers: {'Accept': 'application/json'},})
      .then((res) => { return res.json(); })
      .then((data) => {
        state.commit('LOAD_SHIP', data)
        state.commit('SHIPLOADED', true)
        //console.log(data)
      });
    }

  },
  getters: {
    // pon el equivalente a las propiedades computadas aquí
    countShips: (state) => state.starships.length,
  },
})
