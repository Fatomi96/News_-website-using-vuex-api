<template>
<div>
     <div class="news_item">
        <div class="card">
          <div class="news_source">
               <h1>{{ story.source && story.source.name }}</h1>
          </div>
          <div class="news_headline">
               <a :href="story.url" target="_blank" rel="noreferer noopener"><h2>{{ story.title }}</h2></a>
          </div>
          <div class="news_content">
               <p v-if="story.content !==null">{{ story.content }}</p>
               <p v-else>Some content here due to the api returning null. But here are some dummy data.</p>
          </div>
          <div class="news_action">
               <i><a :href='story.url' target="_blank" rel="noreferer noopener" class="news_button">Read more . . .</a></i>
          </div>
        </div>
     </div>
</div>
</template>

<script>
export default {
     name: 'NewsItem',
     props: {
          story: {
               type: Object,
               required: true
          }
     },
}
</script>

<style >
.news_item {
     padding: 15px;
     line-height: 30px;
     border-radius: 5px;
}
.card {
  padding: 15px;
  border: 1px solid rgb(255, 255, 255);
  background: rgb(0, 0, 0);
  border-radius: 6px;
}
.card:hover {
     padding: 15px;
  border: 1px solid rgb(255, 0, 0);
  background: rgb(0, 0, 0);
  border-radius: 6px;
}
.news_source {
     text-align: center;
     margin-bottom: 10px;
}
h1{
     color: red;
}
h2 {
     font-size: 20px;
     margin-bottom: 10px;
}
.news_content {
     font-size: 14px;
     margin-bottom: 10px;
}
</style>