import { createStore } from 'vuex'
import { login } from './login.module';
import { register } from './register.module';

export default createStore({

  modules: {
    login: login,
    register: register
  },

  // poner variables y colecciones aquí
  state: {
    page: 1,
    totalStarships: '',
    next: '',
    previous: '',
    starships:[],
    starship: {},
    starshipsLoaded: false,

    user: {}

  },
  mutations: {
      // funciones síncronas para cambiar el estado e.j. put, edit, delete
      LOAD_SHIPS:  (state, payload) => (state.starships = payload),
      SHIPSLOADED: (state, payload) => (state.starshipsLoaded = payload),
      TOTALSHIPS:  (state, payload) => (state.totalStarships = payload),
      NEXTSHIPS:   (state, payload) => (state.next = payload),
      PREVSHIPS:   (state, payload) => (state.previous = payload),
      // load more ships
      MUTATE_SHIPS: (state, payload) => { state.starships.push(...payload) },
      //
      LOAD_SHIP:   (state, payload) => (state.starship = payload),
      SHIPLOADED:  (state, payload) => (state.starshipLoaded = payload),
      //
      SAVE_USER:   (state, payload) => (state.user = payload),
  },
  actions: {
   // funciones asíncronas que puede llamar una o más mutaciones
   GET_SHIPS:(state,payload) => {
     fetch('https://swapi.py4e.com/api/starships/?page='+payload,
     { method: 'GET', headers: {'Accept': 'application/json'},})
     .then((res) => { return res.json(); })
     .then((data) => {
       state.commit('LOAD_SHIPS', data.results)
       state.commit('TOTALSHIPS', data.count)
       state.commit('NEXTSHIPS',  data.next)
       state.commit('PREVSHIPS',  data.previous)
       state.commit('SHIPSLOADED', true)
       //console.log(data.results)
      });
    },

    ADD_SHIPS:(state,payload) => {
      state.commit('SHIPLOADED', false)
      //console.log(payload)
      //fetch(`https://swapi.py4e.com/api/starships/${payload}`,
      fetch(payload,
      { method: 'GET', headers: {'Accept': 'application/json'},})
      .then((res) => { return res.json(); })
      .then((data) => {
        state.commit('MUTATE_SHIPS', data.results)
        state.commit('NEXTSHIPS', data.next)
        //console.log(data.results)
        console.log(data.next)
      });
    },

    //=>this.$store.dispatch("GET_SHIP", this.shipID);
    GET_SHIP:(state, payload) => {
      fetch(`https://swapi.py4e.com/api/starships/${payload}`,
      { method: 'GET', headers: {'Accept': 'application/json'},})
      .then((res) => { return res.json(); })
      .then((data) => {
        state.commit('LOAD_SHIP', data)
        state.commit('SHIPLOADED', true)
        //console.log(data)
      });
    },

    //=>this.$store.dispatch('REGISTER_USER', data)
    REGISTER_USER:(state, payload) => {
      console.log("REGISTER_USER"+payload)
      state.commit('SAVE_USER', payload)
    }

  },
  getters: {
    // pon el equivalente a las propiedades computadas aquí
    countShips:  (state) => state.starships.length,
    currentPage: (state) => state.page,
    nextUrl:     (state) => state.next,
  },
})
