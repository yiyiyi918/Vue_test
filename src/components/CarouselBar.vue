<template>
	<div class="carouselbar">
		<div class="container">
			<div class="carousel">
				<img class="item" v-for="(item, index) in itemList" :key='index' :src="item" v-show="index==currentItem" @mouseenter="leavego" @mouseleave="go">
				<!-- 轮播广告内容2： 上/下一张轮播控制器 -->
				<div class="control_left" @click="prev()" @mouseenter="leavego" @mouseleave="go">
					<van-icon name="arrow-left" size=50 />
				</div>
				<div class="control_right" @click="next()" @mouseenter="leavego" @mouseleave="go">
					<van-icon name="arrow" size=50 />
				</div>
			</div>
		</div>
	</div>
</template>

<script>
	export default { 
		/*1.注册子组件*/
		components:{},
		/*2.声明模型数据*/
		data(){
			return {
				itemList: [
					require('../assets/img/carousel/1.jpg'),
					require('../assets/img/carousel/2.jpg'),
					require('../assets/img/carousel/3.jpg'),
					require('../assets/img/carousel/4.jpg')],
							//轮播广告的条目列表	
				currentItem: 0,			//当前显示的是第几个轮播广告项
				timer:null,
			}
		},
		/*3.声明模型方法*/
		methods:{
			go(){
				this.timer = setInterval(()=> {
					this.currentItem++
					if(this.currentItem == this.itemList.length){
						this.currentItem = 0
					}
				},3500)
			},
			leavego(){
				clearInterval(this.timer)
			},
			prev(){		//切换到轮播广告中的上一个
				this.currentItem--
				if(this.currentItem<0){
					this.currentItem = this.itemList.length - 1
				}
			},
			next(){		//切换到轮播广告中的上一个
				this.currentItem++
				if(this.currentItem>=this.itemList.length){
					this.currentItem = 0
				}
			},
		},
		mounted(){
			this.go()
		}

		/*4.声明生命周期钩子函数*/
		// mounted(){						
		// 	let url = 'http://127.0.0.1:5050/index/carousel'
		// 	fetch(url).then(res=>{
		// 		return res.json()
		// 	}).then(data=>{
		// 		console.log(data)
		// 		this.itemList = data  	
		// 	})
		// }
	}
</script>

<style scoped>
	.carouselbar {
		height: 383px;
		border-bottom: 3px solid #ddd;
	}
	.carousel {				
		position: relative;  
		}
	.carousel  .item {
		position: absolute;
		top: 0;
		left: 50%;	/*先往右移到父容器的中线处，此处的50%指参照物(父容器)的宽度*/
		height: 400px;
		/* CSS中的变形函数：旋转/缩放/扭曲/平移 */
		transform: translateX(-50%);  /*当前元素向左平移，此处的50%指自己的宽度*/
		/* z-index: -2;	图片降低z轴出现顺序，以露出上面的内容 */
		width: 100%;
	}
	
	.carousel  .control {
		width: 43px;
		height: 75px;
		background: #000;
		opacity: 0.2;					/*背景以及内容都透明*/
		text-align: center;
	}
	.carousel  .control:hover {
		/* background: rgba(0,0,0, 0.6); */
		opacity: 0.6;
	}
	.carousel  .control  .fa {
		line-height: 75px;
		color: #fff;
	}
	.carousel  .control_left {
		float: left;
		margin-left: 12px;
		margin-top: 152.5px;
		z-index: 9999;
	}
	.carousel  .control_right {
		float: right;
		margin-right: 12px;
		margin-top: 152.5px;
	}
</style>
