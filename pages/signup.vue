<template>
  <v-app>
    <div>
      <NavBar></NavBar>
    </div>
    <template>
      <v-form>
        <v-container>
          <v-text-field v-model="name" label="Enter Name"></v-text-field>
          <v-text-field v-model="email" label="Enter E-mail"></v-text-field>

          <v-text-field
            type="password"
            v-model="password"
            label="Enter Password"
          ></v-text-field>

          <v-btn @click="signIn()" >Sign In</v-btn>
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
      name: '',
      email: '',
      password: '',
    }
  },
  methods:{
    signIn(){
        let user={
            name: this.name,
            email: this.email,
            password: this.password,
        }
        this.$store.commit("addSigndata",user);
        this.name= "",
        this.email="",
        this.password=""
        console.log(user)
    }
  },
  components: { NavBar},
}
</script>

<style scoped></style>
