import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import oSit from 'common/overallSituation.js' //引入全局js文件

Vue.use(uView)
Vue.config.productionTip = false
Vue.prototype.$oSit=oSit;  //全局加载js文件
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
