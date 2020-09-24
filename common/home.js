// 接口声明区
import $oSit from '@/common/overallSituation.js'; //引入公共js文件

//接口域名
// #ifdef H5
	const Url=$oSit.Interface.address.Url3;
// #endif
// #ifndef H5
	const Url=$oSit.Interface.address.Url3;
// #endif

//接口对象
const KyInterface = {
	//--------------------------------------查询班次--------------------------------------
	GetNews:{
		Url: Url + '/api/News/GetNews',
		name:'资讯通知',
		method:'POST',
	}, 
}

export default {
	KyInterface,
}