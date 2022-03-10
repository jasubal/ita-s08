import { createStore } from 'vuex'
import { auth  } from './m.auth';

export default createStore({

  modules: {
    auth: auth,
  },

  state: {
    page: 1,
    totalStarships: '',
    next: '',
    previous: '',
    starships:[],
    starshipsLoaded: false,
    starship: {},
    pilotsApiUrl: [],
    pilots: [],

    showcard: false,

  },
  mutations: {
      // funciones SYNC  para cambiar el estado e.j. put, edit, delete
      LOAD_SHIPS:  (state, payload) => (state.starships = payload),
      SHIPSLOADED: (state, payload) => (state.starshipsLoaded = payload),
      TOTALSHIPS:  (state, payload) => (state.totalStarships = payload),
      PAGESHIPS:   (state, payload) => (payload ? state.page++ : state.page),
      NEXTSHIPS:   (state, payload) => (state.next = payload),
      PREVSHIPS:   (state, payload) => (state.previous = payload),
      // load more ships
      MUTATE_SHIPS: (state, payload) => { state.starships.push(...payload) },
      //
      SHOWCARD:    (state, payload) => (state.showcard = payload),
      LOAD_SHIP:   (state, payload) => ( state.starship = payload ),
      SHIPLOADED:  (state, payload) => (state.starshipLoaded = payload),
      //
      LOAD_PILOTS_URL: (state, payload) => (state.pilotsApiUrl = payload),
      CLEAR_PILOTS: (state) => (state.pilots = []),
      PUSH_PILOT: (state, payload) => (state.pilots.push(payload)),

  },
  actions: {
   // funciones ASYNC que puede llamar una o más mutaciones
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

    ADD_MORE_SHIPS:(state,payload) => {
      state.commit('SHIPLOADED', false)
      //console.log(payload)
      //fetch(`https://swapi.py4e.com/api/starships/${payload}`,
      fetch(payload,
      { method: 'GET', headers: {'Accept': 'application/json'},})
      .then((res) => { return res.json(); })
      .then((data) => {
        state.commit('MUTATE_SHIPS', data.results)
        state.commit('PAGESHIPS', data)
        state.commit('NEXTSHIPS',  data.next)
        state.commit('PREVSHIPS',  data.previous)
        //console.log(data.results)


    });

    },

    // SHIP AND PILOTS
    //=>this.$store.dispatch("GET_SHIP", this.shipID);
    GET_SHIP:(state, payload) => {
      let pilotsUrls = []
      fetch(`https://swapi.py4e.com/api/starships/${payload}`,
      { method: 'GET', headers: {'Accept': 'application/json'},})
      .then((res) => { return res.json(); })
      .then((data) => {
        state.commit('LOAD_SHIP', data)
        state.commit('LOAD_PILOTS_URL', data.pilots)
        pilotsUrls = data.pilots;
        //console.log(data.pilots)
        /* *** */
      })
      .then(() => {
        state.commit('CLEAR_PILOTS')
        pilotsUrls.forEach(url => {
          fetch(url,
          { method: 'GET', headers: {'Accept': 'application/json'},})
          .then((res) => { return res.json(); })
          .then((data) => {
            state.commit('PUSH_PILOT', data)
          //console.log(data)
          })
        }
        )
        state.commit('SHIPLOADED', true)
      })
    },

    /*

    //=>this.$store.dispatch("CREATE_PILOTS_OBJECTS", this.pilotsApiUrl);
    CREATE_PILOTS_OBJECTS: (state, payload) => {
      state.commit('CLEAR_PILOTS')
      let pilots = []
      payload.forEach(element => {
      fetch(element,
      { method: 'GET', headers: {'Accept': 'application/json'},})
      .then((res) => { return res.json(); })
      .then((data) => {
      pilots.push(data)
      state.commit('PUSH_PILOT', pilots)
      //console.log(data.results)
    });
  });
},


*/

    GET_PILOT:(state, payload) => {
      fetch(`${payload}`,
      { method: 'GET', headers: {'Accept': 'application/json'},})
      .then((res) => { return res.json(); })
      .then((data) => {
        state.commit('PUSH_PILOT', data)
        //console.log(data)
      });
    },

    SHOWCARD:(state, payload) => {
      state.commit('SHOWCARD', payload)
    }




  },
  getters: {
    // pon el equivalente a las propiedades computadas aquí
    countShips:  (state) => state.starships.length,
    currentPage: (state) => state.page,
    nextUrl:     (state) => state.next,
    cardShowing: (state) => state.showcard,
    pilotsUrls:  (state) => state.starship.pilotsApiUrl,
    getPilots:      (state) => state.pilots,

  },
})
