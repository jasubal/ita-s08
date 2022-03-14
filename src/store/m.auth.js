import router from '../router'


const state = {
    isLogin: false,
    user: {}
}

const mutations = {

    LOG_USER: (state, payload) => {
        state.user = payload
        state.isLogin = true
        //console.log("user name: "+ state.user.name)
    },

    LOGOUT_USER (state) {
        state.isLogin=false;
        state.user.name='Guest';
        state.user.email='';
        state.user.password='';
    },


}

const actions = {
    //=>this.$store.dispatch('register/REGISTER_USER', data)
    REGISTER_USER:(state, payload) => {
        if(localStorage.getItem("users") === null){
            let users = []; users.push(payload);
            localStorage.setItem("users", JSON.stringify(users))
            state.commit('LOG_USER', payload)
            router.push('/starships');
            console.log("user: "+ payload.name + " registered OK")
        }else{
            let users = JSON.parse(localStorage.getItem("users"));
            users.forEach((user) => {
            if(user.email === payload.email){
                alert("Email already exists");
                return;
            }else{
                users.push(payload);
                localStorage.setItem("users", JSON.stringify(users))
                state.commit('LOG_USER', payload)
                router.push('/starships');
                console.log("user: "+ payload.name + " registered OK")
            }
        });
        }
    },

    //=>this.$store.dispatch('register/CHECK_USER', data)
    CHECK_USER:(state, payload) => {
        if(localStorage.getItem("users") === null){
            console.log("empty array...")
            console.log("so user not found")
            state.commit('LOGOUT_USER', null)
            router.push('/register');
        }else{
            let users = JSON.parse(localStorage.getItem("users"));
            if (users.some( obj => obj.email == payload.email && obj.password == payload.password)) {
                let user = users.find(element => element.email == payload.email && element.password == payload.password);
                state.commit('LOG_USER', user)
                router.push('/starships');
                console.log("user: "+ user.name + " logged OK")
            }else{
                alert("Email or password incorrect, are you registerd?");
                return;
            }
        }
    },

    LOGOUT:(state) => {
        state.commit('LOGOUT_USER', null)
    }

}
const getters = {
    isAuthenticated: state => state.isLogin,
    getName: state => state.user.name

}



export const auth = {
    namespaced: true,
    state,
    mutations,
    actions,
    getters
};
