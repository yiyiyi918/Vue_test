<template>
	<div class="address">
		<select>
			<option>汉口火车站</option>
			<option>福星城</option>
			<option>江岸区</option>
		</select>
		<select>
			<option>1室1厅1卫</option>
			<option>2室1厅1卫</option>
			<option>3室2厅2卫</option>
			<option>3室1厅1卫</option>
		</select>
		<input type="text" placeholder="输入房源名称">
		<button>
			<a href="#" class="ss">
				搜索
			</a>
		</button>
	</div>
</template>

<script>
	
</script>

<style scoped>
	.address{
		text-align: center;
		margin-top: 20px;
		margin-bottom: 10px;
	}
	select{
		height: 50px;
		font-size: 1em;
		border: pink 2px solid;
		border-radius: 5px;
		vertical-align: middle;
		margin-right: 2px;
	}
	input{
		height: 45px;
		width: 400px;
		font-size: 1em;
		border: #808080 1px solid;
		vertical-align: middle;
		margin-right: 2px;
	}
	button{
		height: 50px;
		font-size: 1em;
		border: #808080 1px solid;
		border-radius: 5px;
		vertical-align: middle;
		background: pink;
	}
</style>
