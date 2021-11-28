<template>
	
		<div class="body">

			<div class="regiterBox">

				<span>注册新用户</span>
			
				<!-- <form action=""> -->
					<table class="item">
						<tr>
							<td>手机号：</td>
							<td><input type="text" placeholder="手机号" v-model="userPhone"></td>
						</tr>
						<tr>
							<td>邮 箱：</td>
							<td><input type="text" placeholder="邮箱" v-model="userEmail"></td>
						</tr>
						<tr>
							<td>密 码：</td>
							<td><input type="password" placeholder="密码" v-model="userPwd"></td>
						</tr>
				
					</table>
				<!-- </form> -->
				<button class="btn" @click="doRegister()">
					<b>提交注册信息注册</b>
				</button>
				

			</div>
		</div>
	

</template>

<script>
	export default {
	
		data() {
			return {
				userEmail:'',
				userPhone:'',
				userPwd:''
			
			}
		},
		methods: {
			doRegister(){
				let url = 'http://127.0.0.1:5050/user/register'
				let body=`email=${this.userEmail}&phone=${this.userPhone}&pwd=${this.userPwd}`
			
				fetch(url,{
					method:'POST',
					body:body,
					headers:{'Content-Type':'application/x-www-form-urlencoded'}
				}).then(res=>{
					return res.json()
				}).then(data=>{
					alert('注册成功！新用户在系统中的编号为：'+data.userId)
				})
			}
		}
	}
</script>

<style scoped>

	button {
		background: transparent;
		border: none;
		outline: none;
	}

	.body {

		height: 100vh;
		background: linear-gradient(#80BDFF,#ddd);
		justify-content: center;
		align-items: center;
		display: flex;
		font-style: 16px;
		color: #fff;
	}

	.regiterBox {
		width: 430px;
		height: 360px;
		background: rgba(0, 0, 0, 0.6);
		box-shadow: 0 15px 25px 0 rgba(0, 0, 0, 0.6);
		padding: 30px;
		margin: 150px 200px;
		box-sizing: border-box;
		position: relative;
	}


	.regiterBox  span{
		text-align: center;
		color: #fff;
	
		margin-bottom: 20px;
		display: inline-block;
	}

	.item {
		height: 220px;
		margin-left: 20px;
		margin-bottom: 10px;
		position: relative;
	}


	.item input {
		-webkit-appearance:none;
		-moz-appearance: none;
		font-size:1em;
		height:1.8em;
		border-radius:4px;
		border:1px solid #c8cccf;
		color: #ddd;
	}

	button {
		background: transparent;
		border: none;
		outline: none;
	}

	.btn {
		padding: 5px 20px;
		flex: 1;
		overflow: hidden;
		/* margin-top: 10px; */
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
