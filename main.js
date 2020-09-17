import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import GrzxInter from 'common/Grzx.js' //个人中心
import ChangeImage from 'common/changeImage.js' //更换图片
import oSit from 'common/overallSituation.js' //引入全局js文件

Vue.use(uView)
Vue.config.productionTip = false
Vue.prototype.$oSit=oSit;  //全局加载js文件
Vue.prototype.$GrzxInter=GrzxInter;  //个人中心
Vue.prototype.$ChangeImage=ChangeImage; //更换图片
App.mpType = 'app'

const app = new Vue({
    ...App
})
app.$mount()
