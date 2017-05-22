<template>
<div>
	<theme-head :image="getThemesList.image" :name="getThemesList.name" :description="getThemesList.description" :editors="getThemesList.editors"></theme-head>
	<div class="theme-list ml2 mr2 mb2">
		<div v-for="item in getThemesList.stories">
			<router-link :to="{name:'news-detail', params: {id: item.id}}">
				<theme-link v-if="item.type === 0" :title="item.title"></theme-link>
				<zhihu-list-cover v-else :title="item.title" :images="item.images ? item.images[0] : 'http://daily.zhihu.com/img/new_home_v3/mobile_top_logo.png'"></zhihu-list-cover>
			</router-link>
		</div>

	</div>

</div>
</template>

<script>
import {mapGetters} from 'vuex'
import ZhihuListCover from '../components/List/ZhihuListCover.vue'
import ThemeHead from '../components/Theme/ThemeHead.vue'
import ThemeLink from '../components/Theme/ThemeLink.vue'
export default {
	data(){
		return {
		}
	},
	components: {
		ThemeHead,
		ThemeLink,
		ZhihuListCover
	},
	computed: {
		...mapGetters([
			'getThemesList'
		])
	},
	created() {
		this.$store.dispatch('FetchThemesList', this.$route.params.id)
	}
}
</script>
<style>
	
</style>
