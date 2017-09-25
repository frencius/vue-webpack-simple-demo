import Vue from 'vue'
import App from './components/App.vue'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-default/index.css'
import locale from 'element-ui/lib/locale/lang/en'
//import VueRouter from 'vue-router'
import routes from './routes'

Vue.use(ElementUI, { locale })

/*new Vue({
	el: '#app',
	render: h => h(App)
})*/


const app = new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent () {
      const matchingView = routes[this.currentRoute]
      return matchingView
        ? require('./components/' + matchingView + '.vue')
        : require('./components/404.vue')
        return 
    }
  },
  render (h) {
    return h(this.ViewComponent)
  }
})

window.addEventListener('popstate', () => {
  app.currentRoute = window.location.pathname
})
