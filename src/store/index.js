import { createStore } from 'vuex'

export default createStore({
  state: {
    MSG: 'ok',
  },
  getters: {
  },
  mutations: {
    VIEW_MORE (state) {
      state.SHOWCARD = false
      console.log('view more')
    },


  },
  actions: {


  },
  modules: {
  }
})
