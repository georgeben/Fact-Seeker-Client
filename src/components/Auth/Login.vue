<template>
  <form @submit="signUp">
      <h3>Log in</h3>
      <div class="alert alert-danger" role="alert" v-if="errorMessage">
        {{errorMessage}}
      </div>
      <div class="form-group">
          <label for="email">Email</label>
          <input type="email" class="form-control" id="email" placeholder="Enter your email" v-model="user.email" required/>
      </div>
      <div class="form-group">
          <label for="password">Password</label>
          <input type="password"  class="form-control" id="password" placeholder="Choose a password" v-model="user.password" required/>
      </div>

      <button class="action-btn">Submit</button>
  </form>
</template>

<script>
import { mapMutations, mapState } from 'vuex';
import api from '../../api/user';

export default {
  data() {
    return {
      user: {
        email: '',
        password: '',
      },
    };
  },
  methods: {
    ...mapMutations(['setUser', 'setErrorMsg']),
    async signUp(e) {
      e.preventDefault();
      const user = await api.signIn(this.user);
      if(!user){
          return;
      }
      this.setUser(user.data);

      if(!user.data.verifiedEmail){
        this.$router.push('/onboarding/1')
        return;
      }
      //Redirect to homepage
      this.$router.push('/')
    },
  },
  computed: {
      ...mapState(['errorMessage'])
  },
  mounted(){
      this.setErrorMsg('')
  }
};
</script>

<style scoped>

form{
    width: 50%;
    margin-left: auto;
    margin-right: auto;
    margin-top: 60px;
    border: 1px solid #d9d9d9;
    padding: 15px;
    border-radius: 20px;
}

form h3{
    text-align: center;
}


</style>
