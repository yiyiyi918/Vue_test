<template>

		<div class="body">

			<div class="loginBox">
				<h1>登录</h1>

				<table class="item">
					<tr>
						<td>手机号：</td>
						<td><input type="text" placeholder="请输入手机号" v-model="userPhone"></td>
					</tr>
					<tr>
						<td>密 码：</td>
						<td><input type="password" placeholder="请输入密码" v-model="userPwd"></td>
					</tr>
								
				</table>
				<div class="item1">
					<span class="btn">
						<a href="/"><b>登录</b></a>
					</span>

					<span class="btn">
						<a href="/register" class="a2"><b>注册</b></a>
					</span>
				</div>
			</div>
		</div>
	

</template>

<script>
</script>

<style scoped>

	.item1 .btn a {
		text-decoration: none;
		color: #fff;
	}

	.item1 .btn a:hover {
		color: #FF4500;
		/* color: #80BDFF; */
	}

	input,
	span {
		background: transparent;
		border: none;
		outline: none;
	}

	 .body {
	
		background: linear-gradient(#80BDFF,#ddd);
		justify-content: center;
		align-items: center;
		display: flex;	
		font-style: 16px;
		color: #eee;
	}

	.body>.loginBox {
		width: 380px;
		height: 350px;
		background: rgba(0, 0, 0, 0.6);
		box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.6);
		padding: 40px;
		margin: 200px 200px;
		box-sizing: border-box;
	}

	.loginBox h1 {
		text-align: center;
		color: #fff;
		margin-bottom: 30px;
	}

	.loginBox .item {
		height: 130px;
		/* border: 1px solid #fff; */
		margin-bottom: 20px;
		position: relative;
	}

	.item input {
		width: 100%;
		height: 40%;
		color: #ddd;
		border-bottom: 1px solid #fff;
		padding-top: 8px;
		padding-left: 1em;
		box-sizing: border-box;
	}

	input::-webkit-input-placeholder {
		color: #aaa;
	}



	.item1 {
		display: flex;
	}

	.item1 .btn {
		padding: 10px 20px;
		flex: 1;
		overflow: hidden;
		/* margin-top: 10px; */
		position: relative;
		text-transform: uppercase;
		letter-spacing: 2px;
		text-align: center;
	}

	.item1 .btn:hover {
		background: #111;
		border-radius: 5px;
		/* color: #fff; */
		box-shadow: 0 0 5px 0 #FF4500,
			0 0 25px 0 #5F9EA0,
			0 0 50px 0 #FFDAB9,
			0 0 100px 0 #FFDAB9;
	}

</style>
