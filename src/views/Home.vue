<template>
  <div class="news">
    <div class="news-grid">
      <div v-if='getLoading'>Loading...</div>
      <k-news-item v-else v-for="(headline, index) in getAllNews" :key="index" :story="headline" />
    </div>
  </div>
</template>

<script>
import KNewsItem from '@/components/NewsItems.vue'
import {mapActions, mapGetters} from 'vuex'

export default {
  name: 'Home',
  components: {
   KNewsItem
  },
  watch: {
    '$route.query': {
      handler: function(val) {
        const { params : { category} } = this.$route
        const source = val.source
        this.fetchAllNews({category, source})
      },
      deep: true,
      immediate: true
    }
  },
  mounted() {
    this.fetchAllNews('business')
    console.log(this.getAllNews)
  },
  computed: {
    ...mapGetters(['getAllNews', 'getLoadidng'])
  },
  methods: {
    ...mapActions(['fetchAllNews'])
  },
}
</script>

<style>
.news-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  grid-gap: 2px;
  color: white;
  line-height: 30px;
  margin: 0 5%;
}
</style>





