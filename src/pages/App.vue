<template>
	<div>
		<top-news :top-news-data="getNewsLastest.top_stories"></top-news>
		<div class="mt1 ml2 mr2">
			<div v-for="list in getNewsListRoot">
				<p class="news-lastest-time bold ml2">{{list.date | formatDate}}</p>
				<div v-for="item in list.stories">
					<router-link :to="{name:'news-detail', params:{id: item.id }}">
						<zhihu-list-cover  :title="item.title" :images="item.images"></zhihu-list-cover>
					</router-link>
				</div>		
			</div>
		</div>
		<button class="load-more-button pl2 pr2 pt1 pb1 mt1 mb2" @click='loadMoreNews'>更多</button>
	</div>
</template>

<script>
import { mapGetters } from 'vuex'
import TopNews from '../components/List/TopNews.vue'
import ZhihuListCover from '../components/List/ZhihuListCover.vue'
export default {
	data() {
		return {
			topNews:[]
		}
	},
	components: {
		TopNews,
		ZhihuListCover
	},
	computed: {
		...mapGetters([
			'getNewsLastest',
			'getNewsListRoot'
		])
	},
	methods: {
		loadMoreNews() {
			this.$store.dispatch('FetchNewsLastestMore')
		}
	},
	created() {
		this.$store.dispatch('FetchNewsLastest')
	}

}
</script>

<style>
.load-more-button {
	border-top-style: none;
	border-left-style: none;
	border-right-style: none;
	border-bottom-style: none;
	outline: none;

	background-color: white;
	color: black;
	font-size: 0.8rem;
	border-bottom: 1px solid #efefef;
	width: 100%;
}
.news-lastest-time {
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
