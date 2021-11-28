<template>
	<TopBar></TopBar>
	<div class="box2">
		<div class="picn">
			<img src="../assets/img/13.jpg" alt="">
		</div>
		<div class="textn">
			<div class="box3">
				<h3>渝中区美景</h3>
				<p class="x">渝中区，位于长江上游地区、重庆大都市区，属重庆主城九区之一。地处在长江、嘉陵江交汇地带，由于两江环抱，形似半岛，又名渝中半岛。渝中区作为重庆市政治、经济、文化以及商贸流通中心，别称“山城”、“江城”，巴渝文化、抗战文化以及红岩精神在此发源。</p>
				<p class="y">123456</p>
				<p class="z">114.371751</p>
				<p class="j">30.58826</p>
				<p class="k">渝中区幅员面积23.24平方公里（陆地面积20.08平方公里），下辖11个街道。2019年末户籍人口50.4万人，2019年末常住人口66.2万人。渝中区是全国文明城区，获得过“中国爱心城市”、“市级环保模范区”、“国家慢性病综合防控示范区”、“全国科普示范区”等荣誉称号。2020年6月，经中央依法治国委入选为第一批全国法治政府建设示范地区和项目名单；10月20日，入选全国双拥模范城（县）名单</p>
			</div>
		</div>
	</div>
</template>


<script>
	import TopBar from '../components/TopBar.vue'
	export default {
		components: {
			TopBar
		},
		data(){
			return {
				family: []


			}
		},
		methods: {},
		/*4.声明生命周期钩子函数*/
		// mounted() { //被挂载，此方法在当前组件第一次被挂载到页面中时自动调用
		// 	let url = 'http://127.0.0.1:5050/family'
		// 	fetch(url).then((res) => {
		// 		//试着读取响应消息主体数据，转化为JSON格式的对象
		// 		return res.json()
		// 	}).then((data) => {
		// 		//data就是响应消息主体转换为JSON数据之后的对象
		// 		//把获取到的服务器端数据赋值给“模型数据”
		// 		this.family = data
		// 	})
		// 	/*.catch(()=>{
		// 						console.log('客户端请求动态服务器中的数据失败了')
		// // 					})*/
		// }
	}


</script>

<style scoped>
	.box2 {
		width: 1080px;
		height: 200px;
		margin: 0 auto;
	}

	.picn {
		width: 300px;
		height: 200px;
		float: left;
	}

	.picn img {
		width: 100%;
	}

	.textn {
		width: 780px;
		height: 200px;
		float: right;
	}

	.textn .box3 {
		width: 600px;
		height: 200px;
		margin-left: 180px;
	}

	.textn .box3 h3 {
		font-size: 1.75rem;
		height: 29px;
		line-height: 29px;
		margin: 0 auto;
		font-weight: 800;
		text-align: center;
	}

	.textn .box3 .x {
		font-size: 0.9rem;
		height: 53px;
		font-weight: 600;
	}

	.textn .box3 .y,
	.textn .box3 .z,
	.textn .box3 .j {
		height: 16px;
		font-weight: 400;
	}

	.textn .box3 .k {
		height: 70px;
		font-size: 0.8rem;
		font-weight: 600;
	}
</style>
