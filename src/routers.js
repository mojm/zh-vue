import Vue from 'vue'
import VueRouter from 'vue-router'
import Root from './Root'

import App from './pages/App'

import Description from './pages/Description'

import Themes from './pages/Themes'
import NewsDetail from './pages/NewsDetail.vue'
import ThemeList from './pages/ThemeList.vue'


Vue.use(VueRouter)

const routers = [{
  path: '/',
  component: App
}, {
  path: '/description',
  component: Description
}, {
  path: '/app',
  component: App
}, {
  path: '/themes',
  component: Themes
},{
  path: '/theme-list/:id',
  name: 'theme-list',
  component: ThemeList
}, {
  path: '/news-detail/:id',
  name: 'news-detail',
  component: NewsDetail
}]

export const router = new VueRouter({
  routes: routers,
  hashbang: true
})
