<template>
 <div id="c-login" class="flex one center">
   <form class="login" @submit.prevent="login">
     <h1>Sign in</h1>
<div class="form-group">
     <input required v-model="email" type="email" placeholder="Email"/>
</div>
<div class="form-group">
     <input required v-model="password" type="password" placeholder="Password"/>
</div>
     <button type="submit">Login</button>
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
        this.$store.dispatch('login', { email, password })
       .then(() => this.$router.push('/'))
       .catch(err => console.log(err))
      }
    }
  }
</script>
