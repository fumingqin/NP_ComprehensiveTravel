import Vue from 'vue'
import App from './App'
import uView from 'uview-ui'
import oSit from 'common/overallSituation.js' //引入全局js文件
import Ctky from 'common/Ctky.js' //传统客运

Vue.use(uView)
Vue.config.productionTip = false
Vue.prototype.$oSit=oSit;  //全局加载js文件
App.mpType = 'app'

const app = new Vue({
    ...App
})

//模拟异步请求数据 - 传统客运
const ctky = type=>{
	return new Promise(resolve=>{
		setTimeout(()=>{
			resolve(Ctky[type]);
		}, 500)
	})
}

Vue.prototype.$api = {ctky};
app.$mount()
