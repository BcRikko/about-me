// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import VueRouter from 'vue-router'
import App from './App'
import routes from './routes'

Vue.use(VueRouter)

const router = new VueRouter({
  mode: 'history',
  base: __dirname,
  routes: routes
})

const xhr = new window.XMLHttpRequest()
xhr.open('get', './static/data.json', true)
xhr.onload = function () {
  window.profileData = JSON.parse(this.responseText)

  /* eslint-disable no-new */
  new Vue({
    router,
    render: h => h(App)
  }).$mount('#app')
}
xhr.send()

