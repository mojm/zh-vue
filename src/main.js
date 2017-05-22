// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import Root from './Root.vue'
import { router } from './routers'
import store from './vuex/stores.js'

Vue.filter("formatDate", function(date){
  var dateArray = date.toString().split("")
  dateArray.splice(dateArray.length, 0, "日")
  dateArray.splice(6, 0, "月")
  dateArray.splice(4, 0, "年")
  return dateArray.join("")
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<Root/>',
  components: { Root },
  router,
  store
})
