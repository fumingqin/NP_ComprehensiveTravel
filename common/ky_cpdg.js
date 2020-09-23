// 接口声明区
import $oSit from '@/common/overallSituation.js'; //引入公共js文件

//接口域名
// #ifdef H5
	const Url=$oSit.Interface.address.Url2;
// #endif
// #ifndef H5
	const Url=$oSit.Interface.address.Url2;
// #endif

//接口对象
const KyInterface = {
	system:{
		systemName:'南平综合出行',
		
		// 用于南平综合出行 - 车票订购小程序使用
		systemNameApp:'南平综合出行APP',
		systemNameH5:'南平综合出行H5',
		systemNameWeiXin:'南平综合出行小程序',
		
		// 用于兴业银行 - 专线购票小程序使用
		// systemNameApp:'专线购票APP',
		// systemNameH5:'专线购票H5',
		// systemNameWeiXin:'专线购票小程序',
		
		// 用于邵泰专线 - 专线购票小程序使用
		// systemNameApp:'交通出行APP',
		// systemNameH5:'交通出行H5',
		// systemNameWeiXin:'交通出行小程序',
	},
	//--------------------------------------查询班次--------------------------------------
	getListSchedulesInfo:{
		Url: Url + '/api/KY/getListSchedulesInfo',
		name:'查询班次信息',
		method:'GET',
	}, 
	//--------------------------------------购票须知--------------------------------------
	Cs_getByTitle:{
		Url: Url + '/api/ShowContent/GetAggrement',
		name:'购票须知',
		method:'POST',
	},
	
	//--------------------------------------客运下单--------------------------------------
	Ky_PaymentUrl:{
		Url: Url + '/api/ky/SellTicket_NoBill_Booking',
		name:'客运-下单',
		method:'GET',
		header:{'content-type': 'application/json'},
	},
	
	Ky_getTicketPaymentInfo:{
		Url: Url + '/api/ky/SellTicket_Flow',
		name:'客运-获取支付参数',
		method:'GET',
		header:{'content-type':'application/x-www-form-urlencoded'},
	},
	
	Ky_CancelTicket:{
		Url: Url + '/api/ky/CancelTicket_Flow',
		name:'客运-取消',
		method:'GET',
		header:{'content-type':'application/x-www-form-urlencoded'},
	},
}

export default {
	KyInterface,
}