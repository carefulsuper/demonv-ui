import Vue from 'vue'
import App from './App.vue'
import '../components/css/demo.scss'
import mDemo from '../components/lib/demo/index'
Vue.use(mDemo)
import '../components/css/card.scss'
import mCard from '../components/lib/card/index'
Vue.use(mCard)
Vue.config.productionTip = false

new Vue({
  render: h => h(App),
}).$mount('#app')
