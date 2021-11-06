<template>
<div class="nav_section">
     <div class="box_1">
        <h1>Phatommy<span class="red">News . . .</span></h1>
     </div>
     <nav>
        <ul>
          <li><router-link :to="{ name: 'Home', params: { category: '' } }">Home</router-link></li>
          <li><router-link :to="{ name: 'Business', params: { category: 'business' } }">Business</router-link></li>
          <li><router-link :to="{ name: 'Entertainment', params: { category: 'entertainment' } }">Entertainment</router-link></li>
          <li><router-link :to="{ name: 'General', params: { category: 'general' } }">General</router-link></li>
          <li><router-link :to="{ name: 'Health', params: { category: 'health' } }">Health</router-link></li>
          <li><router-link :to="{ name: 'Science', params: { category: 'science' } }">Science</router-link></li>
          <li><router-link :to="{ name: 'Sports', params: { category: 'sports' } }">Sports</router-link></li>
          <li><router-link :to="{ name: 'Technology', params: { category: 'technology' } }">Technology</router-link></li>
        </ul>
        
        <select v-model="currentSource" name="category" id="category" class="drop_down" @change="onChangeMethod($event)">
          <option :value="''">Select category</option>
          <option v-for="{ name, id, url } in getAllSources" :key="id" :value="url">{{ name }}</option>
        </select>
     </nav>
     <router-view/>
</div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
     name: 'NavBar',
     data () {
          return {
               currentSource: '',
               currentSourceId: ''
          }
     },
     watch: {
          currentSource(source) {
               const { query: { q }, params } = this.$route;
               const name = this.$route.name
               this.$route.push({ name , params, query: { source, q }});
          },
     },
     mounted() {
    const { params : { category } } = this.$route
    this.fetchAllSources({category}) 
//     console.log(this.getAllNews)
  },
  computed: {
     ...mapGetters(['getAllSources', 'getLoading'])
  },
  methods: {
    ...mapActions(['fetchAllSources']),  
    onChangeMethod(event){
         window.open(event.target.value, '_blank');
    }
  }

}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
}
* {
  margin: 0px;
  padding:0;
  box-sizing: border-box;
  color: rgb(255, 255, 255);
  background: rgb(0, 0, 0);
}

.box_1 {
     padding-left: 140px;
     padding-bottom: 28px;
     padding-top: 35px;
}
.red {
     color: red;
}
nav {
     background: rgb(0, 0, 0);
     border-radius: 5px;
     padding: 30px;
}
ul {
     display: flex;
     justify-content: space-around;
     list-style: none;
}
a:link { 
  color: red;
  text-decoration: none; }
a:visited { 
color: rgb(255, 255, 255);
  text-decoration: none; }
a:hover { 
  color: red;
  text-decoration: none; }
a:active { text-decoration: none; }
select {
     padding-right: 90px;
     padding-left: 10px;
     padding-top: 3px;
     padding-bottom: 5px;
     margin-left: 40% ;
     margin-top: 30px;
     border: 1px solid red;
     border-radius: 5px;
     margin-bottom: 20px;
}
select option {
     padding-top: 100px;
}
</style>