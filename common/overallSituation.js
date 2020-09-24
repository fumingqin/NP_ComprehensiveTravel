// 引用模板代码
const Interface = {
	
	address:{
		// 公众号
		// #ifdef H5
			Url : 'http://zntc.145u.net', //综合出行
		// #endif
		
		// #ifndef H5
		// 小程序/APP
		Url : 'https://zntc.145u.net:9099', //综合出行
		// #endif
		
		Url2:"http://36.250.234.10:60032", //定制客运
		Url3:"http://appdl.xmjdt.cn:60032", //定制客运
		
	},
	
	system:{
		applyName:'南平综合出行',
		
		// appName:'专线购票小程序', //仅用于微信授权登录
		//appName:'交通在线', //仅用于微信授权登录
		appName:'南平综合出行', //仅用于微信授权登录
		imageApplicationType:'XCX',//全局图片接口应用类型，用于请求全局图片使用
		// #ifdef H5
			openidtype:'公众号',
		// #endif
		// #ifdef MP-WEIXIN
			openidtype:'小程序',
		// #endif
		// #ifdef APP-PLUS
			openidtype:'APP',
		// #endif	
	}
}

const appConfig={  //AppId,AppSecret配置
	wxConfig:{
		name:'小程序的Appid',
		// wxAppId:'wxb9df0ad8d98f94a1', //专线购票
		//wxAppId:'wx37b8f978e30050e4', //南平综合出行
		wxAppId:'wxf64bf945b37a9939', //南平综合出行09-21
		//wxAppId:'wxdf94dc8c9eb42f63', //交通在线小程序09-24
	},
	H5Config:{
		name:'公众号的Appid和App秘钥',
		H5AppId:'wx0ddb1b8b3ed8ee80',
		H5AppSecret:'9091290458d85ff3a014198275d1d6d5',
	},
	local:{
		url:'http://zntc.145u.net/h55/#/',
		name:'公众号请求地址',
	},
}

// 接口声明区
export default {
	Interface,
	appConfig
}
