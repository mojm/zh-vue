<template>
<div class="zhihu-list-cover m1">
	<div class="clearfix">
    <div class="col col-3 center">
      <img :src="'http://lovestreet.leanapp.cn/zhihu/resource?url='+images" width="60" alt="" class="rounded m1">
    </div>
    <div class="col col-9">
      <p class="h6 mt1 mb1">{{title}}</p>
    </div>
  </div>
</div>
</template>

<script>
export default {
	props: ['title', 'images'],
	name: 'ZHihuListCover',
	components: {

	}
}
</script>

<style scoped>
.zhihu-list-cover {
	/*box-shadow: 0px 5px 20px #efefef;*/
	border-bottom: 1px solid #efefef;
}
</style>
