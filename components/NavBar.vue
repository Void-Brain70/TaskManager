<template>
  <div>
    <ul>
      <li><img src="../assets/picture/tt.png" height="18px" width="40px" /></li>
      <li v-if="!user.name" style="float: right" class="active1"> <nuxt-link to="/login">Login</nuxt-link></li>
      <li v-show="user.name" @click="logout" style="float: right" class="active1">
        <v-btn>
          logout
        </v-btn>
      </li>
      <li style="float: right" class="active1"><nuxt-link to="/signup" >SignUp</nuxt-link></li>
      <li style="float: right" class="active1">About</li>
      <li style="float: right" class="active1"><nuxt-link to="/">Home</nuxt-link></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'NavBar',
  data(){
    return {
      cu: false,
      user: {}
    }
  },
  mounted(){
    this.user = {...this.$store.state.user}
  },
  // computed:{
  //   user(){
  //     this.$store.state.user
  //   }
  // },
  watch:{
    cu(nv){
      this.user = {...this.$store.state.user}
    }
  },
  methods: {
    logout(){
      this.cu = !this.cu;
      this.$store.commit('logout')
      this.$router.push('/login')
    }
  }
}
</script>

<style scoped>
ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #e0e0e0;
}
li {
  float: left;
  display: block;
  color: #212121;
  text-align: center;
  padding: 15px 20px;
  text-decoration: none;
  margin-right: 15px;
  margin-left: 10px;
}
li:hover:not(.active) {
  background-color: #fafafa;
}

a{
    text-decoration: none;
    height: 10px;
}
</style>
