<template>
    <div>
<input type="text" v-model='filter'>
<div class='list' v-for='user in getUsers' :key='user.id'>
<User v-bind:user='user'/>
</div>
    </div>
</template>

<script>
import User from './User'
import {mapGetters} from 'vuex'
    export default {
         name:'List',
          components: {
    User
  },

computed:{
    
    ...mapGetters(['getUsers'])
    
    },
       
        // props:['users'],
        data() {
            return {
                filter:''
            }
        }
    }
</script>

<style lang="scss" scoped>

</style>