<template>
<div>
   <router-link class='link' :to="{ name: 'user', params: { id: `${user.id-1}` }}"><p>{{user.name}}</p></router-link> 
   </div>
        
  
</template>

<script>

import VueRouter from 'vue-router'
import Details from "./Details";




    export default {
        name:'User',
        props:['user'],
        components:{
            Details
        },
        computed: {
    _link() {
        return '/user/' + (user.id);
    }
}
       
        
    }
</script>

<style lang="scss" scoped>
.link {
    text-decoration:none;
    color:black;
}
</style>