<template>
    <div class='list'>
        
      <md-input type='text' placeholder='Search for name, email or username ' v-model="filter"></md-input>
    

<div class='list' v-for='user in filteredUsers' :key='user.id'>
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
  data() {
        return {
            
                filter:''
            }
      
  },
 computed:{
      filteredUsers: function () {
    return this.getUsers.filter(a=> {
        if(a.name.toLowerCase().includes(this.filter.toLowerCase())
        ||a.email.toLowerCase().includes(this.filter.toLowerCase())
        ||a.username.toLowerCase().includes(this.filter.toLowerCase())) return a 
    
    })
  },
    ...mapGetters(['getUsers'])
    
    },
    
       
        
    }
</script>

<style lang="scss" scoped>
.list {
    li{

    }
    input{
        font-size:18px;
        padding-left:5px;
        height:35px;
        margin-bottom:10px;
    }
    display:flex;
    flex-direction:column;
    
}
</style>