import { createRouter, createWebHashHistory } from 'vue-router'
import Home from '../views/Home.vue'
//import { mapGetters } from "vuex";
import store from '../store'



const routes = [



  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: function () {
      return import('../components/Login.vue')
    }
  },
  {
    path: '/register',
    name: 'register',
    component: function () {
      return import('../components/Register.vue')
    }
  },
  {
    path: '/starships',
    name: 'starships',
    //beforeEnter : guardMyroute(),
    // route level code-splitting
    // this generates a separate chunk (starships.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "starships" */ '../views/Starships.vue')
    }
  },
  {
    path: '/logout',
    name: 'logout',
    component: function () {
      return import('../components/Logout.vue')
    }
  },



]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

router.beforeEach(() => {
  /*
  console.log(store)
  console.log("router.beforeEach")
  console.log("router.beforeEach: "+store.state.isLogin)
  console.log("router.beforeEach: "+store.getters.isLogin)
  console.log("router.beforeEach: "+store.state.user)
  console.log("router.beforeEach: "+store.getters.user)
  */
});

export default router
