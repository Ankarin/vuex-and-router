<template>
    <div v-if='getUsers'>
    <h2>Details about {{getUsers[this.$route.params.id].name}}</h2>
<ul>
    
    <li>Email: {{getUsers[this.$route.params.id].email}}</li>
    <li>Id: {{getUsers[this.$route.params.id].id}}</li>
    <li>Username: {{getUsers[this.$route.params.id].username}}</li>
    <li>Phone: {{getUsers[this.$route.params.id].phne}}</li>
    <li>Website: {{getUsers[this.$route.params.id].website}}</li>
    <li>Address: 
        <ul>
            <li>City: {{getUsers[this.$route.params.id].address.city}}</li>
            <li>Geo: {{getUsers[this.$route.params.id].address.geo.lat}} {{getUsers[this.$route.params.id].address.geo.lng}}</li>
            <li>Street: {{getUsers[this.$route.params.id].address.street}}</li>
            <li>Suit: {{getUsers[this.$route.params.id].address.suit}}</li>
            <li>Zipcode: {{getUsers[this.$route.params.id].address.zipcode}}</li>
        </ul>
    </li>
    <li>Company:
        <ul>
<li>BS: {{getUsers[this.$route.params.id].company.bs}}</li>
<li>Catch phrase: {{getUsers[this.$route.params.id].company.catchPhrase}}</li>
<li>Company name: {{getUsers[this.$route.params.id].company.name}}</li>
        </ul>
    </li>
    
</ul>

    </div>
</template>

<script>
import {mapGetters} from 'vuex'
    export default {
        name:'Details',

        computed:{
    
    ...mapGetters(['getUsers'])
    
    },
 
    }
    
</script>

<style lang="scss" scoped>
h2{
    text-align:center;
}
ul{
    padding: 0 10px;
    list-style:none;

}
</style>