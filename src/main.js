require('../node_modules/bootstrap/less/bootstrap.less')

import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'

Vue.use(VueRouter)

import About from './components/About'
import Home from './components/Home'

const routes = [
{ path: '/', component: Home },
{ path: '/about', component: About }
]

const router = new VueRouter({
  routes,
  mode: 'history'
})

new Vue({
	el: '#about',
	
	data: {
		message: 'hello'
	}
});

new Vue({
  el: '#app',  
  template: '<App/>',  
  data:{
		message: 'Hello Vue'
	},
  components: { App },  
  router
}).$mount('#app');



