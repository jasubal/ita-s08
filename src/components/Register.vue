<template>
 <div id="c-register" class="flex one center">
    <h1>CREATE YOUR ACCOUNT</h1>
    <form @submit.prevent="register">

<div class="form-group">
          <input id="name" type="text" v-model="name" required autofocus  placeholder="Your name">
      </div>


<div class="form-group">
          <input id="email" type="email" v-model="email"  placeholder="Your email">
      </div>


<div class="form-group">
          <input id="password" type="password" v-model="password"  placeholder="Repeat email name">
      </div>


<div class="form-group">
          <input id="password-confirm" type="password" v-model="password_confirmation"  placeholder="Your password">
      </div>

      <div>
          <button type="submit">Register</button>
      </div>

      <p>Already have an account?
           <router-link to="/login">Sign In</router-link>

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
        password_confirmation : "",
        is_admin : null
      }
    },
    methods: {
      register: function () {
        let data = {
          name: this.name,
       //   email: this.email,
       //   password: this.password,
       //   is_admin: this.is_admin
        }
        this.$store.dispatch('REGISTER_USER', data)
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    }
  }
</script>
