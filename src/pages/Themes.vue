<template>
<div>
  <div class="themes m2"> 
    <div v-for="item in getThemes.others">
      <router-link :to="{name:'theme-list', params: {id: item.id}}">
        <div class="clearfix themes-list mt1">
          <div class="col col-2 center">
            <img :src="'http://lovestreet.leanapp.cn/zhihu/resource?url=' + item.thumbnail" alt="" width="40" class="mb1 circle">
          </div>
          <div class="col col-10">
            <p class="h6 mt0 mb0">{{item.name}}</p>
          </div>
          <div class="col col-10">
            <p class="mt1 mb0" style="color:#898888; font-size: 12px;white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">{{item.description}}</p>
          </div>
        </div> 
      </router-link>
    </div>
  </div>

</div>
</template>

<script>
import {mapGetters} from 'vuex'
export default {
  computed: {
    ...mapGetters([
      'getThemes'
    ])
  },
  created() {
    this.$store.dispatch('FetchThemes')
  }
}
</script>

<style scoped>
.themes-list {
  border-bottom: 1px solid #f1efef
}
</style>
