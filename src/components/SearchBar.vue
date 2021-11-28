<template>
	<div class="search">
		<select class="frame">
			<option class="title">房源</option>
			<option>青山区</option>
			<option>江汉区</option>
			<option>黄陂区</option>
			<option>东西湖区</option>
			<option>洪山区</option>
			<option>江岸区</option>
			<option>武昌区</option>
			<option>汉南区</option>
			<option>蔡甸区</option>
			<option>江夏区</option>
			<option>新洲区</option>
			<option>汉阳区</option>
			<option>硚口区</option>
		</select>
		<div class="input1">
			<div class="icon1">
			<van-icon name="location" size=30 />
			</div>
			<input type="text" placeholder="输入目的地、城市">
		</div>
		<div class="input2">
			<div class="icon2">
			<van-icon name="manager" size=30 />
			</div>
			<input type="text" placeholder="入住日期-退房日期">
		</div>
		<div class="but">
			<a href="#"> 搜索</a>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	.search{
		width: 1080px;
		height: 72px;
		margin: 45px auto;
		display: flex;
	}
	.search .frame{
		border-top-left-radius: 5px;
		border-bottom-left-radius: 5px;
	}
	.search .frame{
		width: 90px;
		height: 72px;
		font-size: 17px;
		font-weight: 700;
		border: solid 1px  rgba(221, 221, 221);
		margin: 0 auto;
	}
	.search .frame option{
		width: 68px;
		height: 70px;
		border: solid 1px  rgba(221, 221, 221);
	}
	.search .frame .title{
		font-size: 17px;
		font-weight: 700;
	}
	.search .input1{
		width: 556px;
		height: 70px;
		display: flex;
		position: relative;
		border: solid 1px rgba(221, 221, 221);
	}
	.search .input1 .icon1{
		width: 50px;
		height: 50px;
		position: relative;
		top: 17px;
		right: -10px;
	}
	.search .input1 input{
		width: 499px;
		height: 50px;
		padding: 10px 10px 10px 5px;
		border: 0;
		font-size: 18px;
		color: rgba(72,72,72);
	}
	.search .input2{
		width: 351px;
		height: 70px;
		display: flex;
		border: solid 1px rgba(221, 221, 221);
	}
	.search .input2 .icon2{
		width: 50px;
		height: 50px;
		position: relative;
		top: 17px;
		right: -10px;
	}
	.search .input2 input{
		width: 283px;
		height: 50px;
		padding: 10px 10px 10px 5px;
		border: 0;
		font-size: 18px;
		color: rgba(72,72,72);
	}
	.search .but{
		width: 68px;
		height: 70px;
		border: solid 1px rgba(221, 221, 221);
		position: relative;
		border-top-right-radius: 5px;
		border-bottom-right-radius: 5px;
	}
	.search .but a{
		text-decoration: none;
		width: 32px;
		height: 24px;
		padding: 12px 12px 12px 12px;
		font-size: 16px;
		font-weight: 400;
		position: absolute;
		top: 10px;
		right: 7px;
		bottom: 12px;
		left: 5px;
		background-color: rgba(255, 90, 95);
		color: #ffffff;
		border-radius: 5px;
	}
</style>
