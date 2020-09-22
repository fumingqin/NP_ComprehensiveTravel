<template>
	<view>
		<!-- 头部切换栏 -->
		<u-tabs :list="headList" :is-scroll="false" :current="headCurrent" @change="headChange" height="104"></u-tabs>
		
		<!-- 资讯列表 -->
		<view class="infor_view"  v-for="(item,index) in informationList" :key="index">
			<view class="view_titleView">
				<text class="tv_view">
					<text class="tv_label">{{labelVariety(item.Type)}}</text>
					<text class="tv_title">{{item.Title}}</text>
				</text>
				<image class="tv_image" src="../../static/ZXDT/h_banner2.png" mode="aspectFill"></image>
			</view>
			
			<view class="view_contentView">
				<text>中国社电</text>
				<text class="cont_text">5561评</text>
				<text class="cont_text">{{informationDate(item.CreateTime)}}</text>
				<u-icon class="cont_icon" name="more-dot-fill"></u-icon>
			</view>
			<u-gap height="4" bg-color="#f9f9f9"></u-gap>
		</view>
		
	</view>
</template>

<script>
	export default {
		data() {
			return {
				headList : [{
					name : '系统通知'
				},{
					name : '车站新讯' 
				},{
					name : '每日南平'
				},{
					name : '反馈公示'
				}],//头部数组
				headCurrent : 0, //头部tabs下标
				informationList : '',//资讯列表
			}
		},
		onLoad:function(){
			this.loadData();
		},
		methods: {
			//加载接口数据
			loadData:function(){
				uni.request({
					url:'http://appdl.xmjdt.cn:60032/api/News/GetNews',
					method:'POST',
					success:(res)=>{
						this.informationList = res.data.data;
						console.log(res)
					}
				})
			},
			
			//列表通知标签变化
			labelVariety:function(e){
				if(e=='通知公告'){
					return '通知'
				}else if(e=='车站新讯'){
					return '车站'
				}else if(e=='每日南平'){
					return '车站'
				}else {
					return e
				}
			},
			
			//资讯时间
			informationDate:function(e){
				console.log(e)
				var tsetDate = e.replace('T',' ')
				var a = tsetDate.substr(5,11)
				return a;
			},
			
			//点击头部切换下标
			headChange:function(e){
				this.headCurrent = e;
			}
		}
	}
</script>

<style lang="scss">
	//资讯列表样式
	.infor_view{
		padding: 0 32upx; 
		margin-top: 32upx;
		.view_titleView{
			display: flex;
			.tv_view{
				padding-right: 32upx; 
				width: 468upx; 
				.tv_label{
					font-size: 24upx; 
					background: #007AFF; 
					color: #FFFFFF; 
					padding: 4upx 8upx; 
					border-radius: 4upx;
				}
				.tv_title{
					font-weight: bold; 
					font-size: 34upx; 
					margin-left: 12upx; 
					line-height: 1.7;
				}
			}
			.tv_image{
				width: 220upx; 
				height: 160upx; 
				border-radius: 8upx;
			}
		}
		.view_contentView{
			font-size: 24upx; 
			color: #AAAAAA; 
			padding: 16upx 0; 
			margin-bottom: 16upx;
			.cont_text{
				margin-left: 20upx;
			}
			.cont_icon{
				float: right; 
				padding: 12upx 0;
				margin-right: 16upx;
			}
		}
	}
</style>
