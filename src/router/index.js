import { createRouter, createWebHashHistory } from 'vue-router'
import store from '../store'

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/starships',
    name: 'starships',
    component: () => import('../views/Starships.vue'),
    beforeEnter: (to, from, next) => {
    console.log("beforeEnter" + to.path)
    store.state.auth.isLogin ? next() : next('/login')
    }
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('../components/Login.vue')

  },
  {
    path: '/register',
    name: 'register',
    component: () => import('../components/Register.vue')
  },
  {
    path: '/logout',
    name: 'logout',
    component: () => import('../components/Logout.vue')
  },
  // catchall 404
  {
    path: '/:catchall(.*)',
    name: 'notfound',
    component: () => import('../views/NotFound.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes,
  scrollBehavior (to, from, savedPosition) {
    if (to.hash) {
      return {
        selector: to.hash,
        behavior: 'smooth'
      };
    }
    return { x: 0, y: 0 };  // Go to the top of the page if no hash
  },

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
