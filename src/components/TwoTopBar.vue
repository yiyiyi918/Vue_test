<template>
	<div class="topbar2">
		<div class="container">
			<a href="#">
				<span>
					二手房
				</span>
			</a>
			<a href="#">
				<span>
					租房
				</span>
			</a>
			<a href="#">
				<span>
					新房
				</span>
			</a>
			<a href="#">
				<span>
					海外
				</span>
			</a>
			<a href="#">
				<span>
					小区
				</span>
			</a>
		</div>
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>
	.topbar2{
		width: 100%;
		height: 60px;
		line-height: 60px;
		background: #f9f9f9;
		border-bottom: 1px solid #eee;
		text-align: left;
	}
	.topbar2 .container a span{
		padding-left: 7%;
		font-weight: bold;
	}
	a{
		text-decoration: none;
	}
	a:hover{
		color: red;
	}
</style>
