import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios'
import moment from 'moment'
Vue.use(Vuex)
const state = {
  newsListRoot: [],
  newsLastest: [],
  newsDetail: {},
  time: moment(),
  themes: {},
  themesList: {}
}
const getters = {
  getNewsLastest: state => {
    return state.newsLastest
  },
  getNewsDetail: state => {
    return state.newsDetail
  },
  getNewsListRoot: state => {
    return state.newsListRoot
  },
  getThemes: state => {
    return state.themes
  },
  getThemesList: state => {
    return state.themesList
  }

}
const mutations = {
  DoneNewsLastest(state, all) {
    state.newsListRoot.push(all)
    state.newsLastest = all
  },
  DoneNewsDetail(state, all) {
    String.prototype.replaceAll = function(s1, s2){
      return this.replace(new RegExp(s1, "gm"), s2)
    }
    all.body = all.body.replaceAll('src=\"', 'src=\"https://lovestreet.leanapp.cn/zhihu/resource?url=')
    all.body = all.body.replaceAll('<div class=\"img-place-holder\"></div>', '')
    state.newsDetail = all
  },
  DoneNewsLastestMore(state, all) {
    state.newsListRoot.push(all)
    state.time.subtract(1, "days")
  },
  DoneThemes(state, all) {
    state.themes = all
  },
  DoneThemesList(state, all) {
    state.themesList = all
  }

}
const actions = {
  FetchNewsLastest({commit}) {
    axios.get('https://lovestreet.leanapp.cn/zhihu/news/latest')
      .then(res=>{
        commit('DoneNewsLastest', res.data)
      }).catch(err => { console.log(err)} )
  },
  FetchNewsDetail({commit}, id) {
    axios.get('https://lovestreet.leanapp.cn/zhihu/news/'+id)
      .then(res => {
        commit('DoneNewsDetail', res.data)
      }).catch(err => {console.log(err)})
  },
  FetchNewsLastestMore({commit}) {
    var date = state.time.format("YYYYMMDD")
    axios.get('https://lovestreet.leanapp.cn/zhihu/before/' + date)
      .then(res => {
        commit('DoneNewsLastestMore', res.data)
      }).catch(err=>{console.log(err)})
  },
  FetchThemes({commit}) {
    axios.get('https://lovestreet.leanapp.cn/zhihu/themes')
      .then(res => {
        commit('DoneThemes', res.data)
      }).catch(err => {console.log(err)})
  },
  FetchThemesList({commit}, id) {
    axios.get('https://lovestreet.leanapp.cn/zhihu/themes/' + id)
      .then(res=>{
        commit('DoneThemesList', res.data)
      }).catch(err=>{console.log(err)})
  }

}
export default new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})