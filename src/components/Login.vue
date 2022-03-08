<template>
 <div id="c-login" class="flex one center auth">
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
<div class="form-group">
     <input required v-model="email" type="email" placeholder="Email"/>
</div>
<div class="form-group">
     <input required v-model="password" type="password" placeholder="Password"/>
</div>
     <button type="submit">Login</button>
          <p>Not registerd?
           <router-link to="/login">Sign In</router-link>
      </p>
   </form>
 </div>
</template>



<script>
  export default {
    name: 'login',
    data(){
      return {
        email : "",
        password : ""
      }
    },
    methods: {
      login: function () {
        let email = this.email
        let password = this.password
        this.$store.dispatch('auth/CHECK_USER', { email, password })
        // this.$store.dispatch('register/REGISTER_USER', data)
       //.then(() => this.$router.push('/starships'))
       .catch(err => console.log(err))
      }
    }
  }
</script>
