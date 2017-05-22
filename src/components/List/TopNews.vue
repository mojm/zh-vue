<template>
<div class="m2">
  <p class="top-news-title ml2 bold">今日要闻</p>
  <div v-for="item in TopNewsData">
    <router-link :to="{name:'news-detail', params: {id: item.id}}">
      <zhihu-list-cover :images="item.image" :title="item.title"></zhihu-list-cover>
    </router-link>
  </div>
</div>
</template>

<script>
import ZhihuListCover from './ZhihuListCover.vue'
export default {
  props: {
    TopNewsData: {
      type: Array,
      default() {
        return []
      }
    }
  },
  components: {
    ZhihuListCover
  }
}
</script>

<style>
.top-news {

}
.top-news-title {
  font-size: 0.8rem;
  border-left: 5px solid #efefef;
  color: grey;
  padding: 0.1rem;
  text-indent: 0.5rem;
  opacity: 1;
  transform: translateX(0px);
  animation: newsLastTime 0.5s ease 1;
}
@keyframes newsLastTime {
  from {
    transform: translateX(100px);
    opacity: 0;
  }
  to {
    transform: translateX(0px);
    opacity: 1;
  }
}



</style>
