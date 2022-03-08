import router from '../router'


const state = {
    isLogin: false,
    user: {}
}

const mutations = {

    SAVE_USER: (state, payload) => {
        state.user = payload
        state.isLogin = true
        //console.log("user name: "+ state.user.name)
    },

    LOGOUT_USER (state) {
        state.isLogin=false;
        state.user=null;
    },
  /*
    LOGINSUCCESS(state) {
        state.isLogin=true;
        state.token=null;
        state.user=null;
    },
    LOGINFAILURE(state) {
        state.isLogin=false;
    },
    */

}

const actions = {
    //=>this.$store.dispatch('register/REGISTER_USER', data)
    REGISTER_USER:(state, payload) => {
     state.commit('SAVE_USER', payload)
        if(localStorage.getItem("users") === null){
        let users = []; users.push(payload);
        localStorage.setItem("users", JSON.stringify(users))
        }else{
        let users = JSON.parse(localStorage.getItem("users")); users.push(payload)
        localStorage.setItem("users", JSON.stringify(users))
        }
    },

    //=>this.$store.dispatch('register/LOGIN_USER', data)
    CHECK_USER:(state, payload) => {
        if(localStorage.getItem("users") === null){
            console.log("no hay usuarios, creamos array con un user...")
        }else{
            let users = JSON.parse(localStorage.getItem("users"));
            users.forEach((user) => {
                if(user.email === payload.email && user.password === payload.password){
                    state.commit('SAVE_USER', user)
                    console.log("user logged email: "+ user.email)
                    console.log("user logged password: "+ user.password)
                    router.push('/starships');
                }else{
                    console.log("user not found")
                    router.push('/register');


                }
            }
            )};
    },

    LOGOUT:(state) => {
        state.commit('LOGOUT_USER', null)
    }

}
const getters = {
    isAuthenticated: state => state.isLogin,
    //name: state => state.user.name
}



export const auth = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
