<template>
	<div class="container">
		<div class="body">

			<div class="regiterBox">

				<h2>找回密码</h2>
				<span class="error">{{error}}</span>
				<form action="">
					<table class="item">
						<tr>
							<td>账 号：</td>
							<td><input type="text" placeholder="用户名/手机号/邮箱"></td>
						</tr>
						<tr>
							<td>新密码：</td>
							<td><input type="password" placeholder="密码不小于6位"></td>
						</tr>
						<tr>
							<td>确认密码：</td>
							<td><input type="password" placeholder="密码与上面一致"></td>
						</tr>
						<tr>
							<td>手机号：</td>
							<td><input type="text" placeholder="手机号"></td>
						</tr>
					
					</table>
				</form>
				<button class="btn">
					<b>确&nbsp;&nbsp;定</b>
				</button>
				



			</div>
		</div>
	</div>

</template>

<script>
	export default {
		components: {},
		data() {
			return {
				error: '请输入信息',
				user: [

				]
			}
		},
		methods: {

		}
	}
</script>

<style  scoped>
	.container {
		/*在屏幕中水平居中的容器*/
		width: 1000px;
		margin-left: auto;
		margin-right: auto;

	}



	
	button {
		background: transparent;
		border: none;
		outline: none;
	}

	.body {

		margin-left: 20px;
		height: 100vh;
		background: url(./assets/img/msu.jpg) no-repeat;
		display: flex;
		font-style: 16px;
		color: #fff;
	}

	.regiterBox {
		width: 380px;
		height: 450px;
		background: rgba(0, 0, 0, 0.6);
		box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.6);
		padding: 30px;
		margin: 150px 200px;
		box-sizing: border-box;
		position: relative;
	}

	.regiterBox>.error {
		position: absolute;
		margin-top: 15px;
		margin-left: 35px;
		color: darkorange;
	}

	h2 {
		text-align: left;
		color: #fff;
		margin-top: 10px;
		display: inline-block;
	}

	.item {
		height: 250px;
		margin-bottom: 20px;
		position: relative;
	}


	.item input {
		-webkit-appearance:none;
		-moz-appearance: none;
		font-size:1em;
		height:1.6em;
		border-radius:4px;
		border:1px solid #c8cccf;
		color: #111;
	}

	button {
		background: transparent;
		border: none;
		outline: none;
	}

	.btn {
		padding: 10px 20px;
		flex: 1;
		overflow: hidden;
		margin-top: 10px;
		color: #fff;
		position: relative;
		text-transform: uppercase;
		letter-spacing: 2px;
	}

	.btn:hover {
		background: #111;
		border-radius: 5px;
		color: #FF4500;
		box-shadow: 0 0 5px 0 #FF4500,
			0 0 25px 0 #5F9EA0,
			0 0 50px 0 #FFDAB9,
			0 0 100px 0 #FFDAB9;
	}

	input::-webkit-input-placeholder {
		color: grey;
	}
</style>
