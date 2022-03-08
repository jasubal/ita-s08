<template>
 <div id="c-register" class="flex one center auth">
    <div class="auth-logo"></div>
    <h2>CREATE YOUR ACCOUNT</h2>
    <form @submit.prevent="register">

<div class="form-group">
          <input id="name" type="text" v-model="name" required autofocus  placeholder="Your name">
      </div>


<div class="form-group">
          <input id="email" type="email" v-model="email"  placeholder="Your email">
      </div>


<div class="form-group">
          <input id="password" type="password" v-model="password"  placeholder="Your password">

      </div>

      <div>
          <button type="submit">Register</button>
      </div>

      <p>Already have an account?
           <router-link to="/login">Login In</router-link>
      </p>
    </form>
  </div>
</template>

<script>
  export default {
    name: 'Register',
    data(){
      return {
        name : "",
        email : "",
        password : "",
      }
    },
    methods: {
      register: function () {
        let data = {
          name: this.name,
          email: this.email,
          password: this.password,
        }
        this.$store.dispatch('auth/REGISTER_USER', data)
       .catch(err => console.log(err))
      }
    }
  }
</script>

<style>

</style>
