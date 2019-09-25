<template>
  <md-card id="app">
    <router-view>
</router-view>
    </md-card>
</template>
<!-- <md-card><List v-bind:users='users'/></md-card> -->
<script>


import Vue from 'vue'
import VueRouter from 'vue-router'
import Details from './components/Details'
import List from './components/List'
import {  MdCard} from 'vue-material/dist/components'
import 'vue-material/dist/vue-material.min.css'
Vue.use(VueRouter)
Vue.use(MdCard)


const routes = [
    {name:'user',
      path:`/user/:id`,
     component: Details},
    {name:'list',
      path:`/`,
     component: List},
    
    
]
const router = new VueRouter({
    routes: routes
})
export default {
  name: "app",
  router,
  components: {
    List,
  
   
   
  },
  async mounted() {
    this.$store.dispatch("fetchUsers");
    
  }
};
</script>

<style lang='scss'>
#app {
  .md-card {
    margin:10px;
    padding:10px;
  }
  
  box-sizing:border-box;
  overflow-x:hidden;
  max-width:1200px;
  margin:auto;
  p{
    padding:5px;
    margin:0;
  }
  font-size:18px;
  
  color: black;
}
</style>
