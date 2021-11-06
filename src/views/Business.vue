<template>
  <div class="news">
    <div class="news-grid">
      <div v-if='getloading'>Loading...</div>
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
        const { params : { category } } = this.$route
        const source = val.source
        this.fetchAllNews({category, source})
      },
    },
  },
  mounted() {
    const { params : { category } } = this.$route
    this.fetchAllNews({category})
//     console.log(this.getAllNews)
  },
  computed: {
     ...mapGetters(['getAllNews', 'getLoading'])
  },
  methods: {
    ...mapActions(['fetchAllNews'])
  },
}
</script>

