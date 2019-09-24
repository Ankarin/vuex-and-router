<template>
  <div id="ap">
  
   <List v-bind:users='users'/>
   asdas
  </div>
</template>

<script>
import List from "./components/List";

export default {
  name: "app",
  components: {
    List
  },
  data() {
    return {
      users: []
    };
  },
  async mounted() {
 this.$store.dispatch('fetchUsers')
  }
};
</script>

<style lang='scss'>
#app {
  color:black
}
</style>
