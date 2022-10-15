<template>
  <v-app>
    <div>
      <NavBar></NavBar>
    </div>
    <template>
      <v-form>
        <v-container>
          <v-text-field v-model="email" label="E-mail"></v-text-field>

          <v-text-field
            type="password"
            v-model="password"
            label="Password"
          ></v-text-field>

          <v-btn @click="logIn()" >Login</v-btn>
        </v-container>
      </v-form>
    </template>
  </v-app>
</template>

<script>
import NavBar from '../components/NavBar.vue'
export default {
  name: 'LoginPage',
  data() {
    return {
      email: '',
      password: '',
    }
  },
  computed:{
    users(){
        return this.$store.state.users
    }
  },
  methods:{
    logIn(){
        const findUser = this.users.find((el)=>{
            return el.email == this.email && el.password == this.password
        })
        if(findUser){
          this.$store.commit('setUser', findUser)
            this.$router.push("/")
        }
        console.log("log")
    }
  },
  components: { NavBar },
}
</script>

<style scoped></style>
