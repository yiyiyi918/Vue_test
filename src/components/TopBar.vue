<template>
	<div class="nav_top clearfix">
	
			<div class="pic_logo">
				<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAEAAAABACAYAAACqaXHeAAAD5ElEQVR4Xu2ZX1IaQRDGv1asJE/BE0RPEDxB9ATRt8WCEk9gPIFygugJxGIj++bmBJoTiCcQTyBvWiWhU7M77B92F8K6M0ktwyMysv3rr7/uaQhL/qIljx8GgFHAkhMwJbDkAjAmaErAlMCSEzAlsOQCMF3AlIApgSUnYErgXwiALWsDWDsBoeV/P7ugcZuurvq6n0e7Arje2AXoAkB1KtghmPfIsW91QtAKwMs8rd3J4I+p1z3z8l9vfgPwHcAQ/LpFjjPQBUEzgEYHRAcAguAngQYQmC/JsWVpqMegDQDv79fAq3dgvifHrqWFxvXGAKBP4NdNXSrQB6DeFLX9Bcw7WXXOVrMFwgU0qkALALYa2yC6AfCLet3tWcLWrQI9AP4i+4EXTGBpUoFyAItkP2KIc8ulKHtUD2CB7CdVgJ/kdHeLCjbt/ygFkJV93m1V8W50gBVIP2CXej8uow/IATi1HUExgKYLwteo88t2KAwxPgkyBgAfTjqEnBivVXcEZQDk1PcQdf7YJMjcxsrYxXg8BCotEJ2AMSCnuxl6gfq5QCEAOfUxDsnpdmIjL3ObHPs0JnmrcepDCP+mYy5QAiDMPj9Sz94IzW1SEsm6TlOMD02tChQBSGbfC8aSAJ5X18ntDOMK8C5KsZKRZ5ROh4UD8Bz+w+8nIJ59Pxgpc/Ae9Ww37vreNfka4HPq2eJ2GLwCFaSAe2uLLB5AEGTKjS+8ECVufGxNVJO8KwTgUrzjvwIgs/8AZsJLZWNa5lk1neUZgXcIVb0fDUDE1OuuvzXo6PlCFRBx7YTLR4zQr2mI4cfei3lDpGNMBxmqIOwqRYAoGoAcfGZPb8GUBxyDMZRX4Mw9gQ9JmmTBl6RiAYjxlbmatfAIVSCWopW+kLT3nigZjGrzliBsNYYAPUWHpbeqoHgA4I/Us7fmPVhkDyg+mliRpZ2X3WAwb6cw77tVeoBfAnPalW+WoxuA5GqM+3iu7KSZZswI/faaaJOLBDz92WIVEK60sk3Qa4UrFzL4YzDX/EUp90Hjw6zfBrjeOAPoaNZKLQ+IQgHIYUfU9mcwn5Jjt6da2RGIxJBTRfSOEM4O4reBM7xUzidqkOZ3BECcm7tSWxRC8QD8DLvedtd3uD6YqiDIOwE/gtGaXoz6uwN0gnPiekwsTM8vE+Z7vFS2Z5XJosGLzxcOINbvwWIZ6gfOLFbet5ObYdbDerOEOAeI0hh6bRJw553LE7xSAHkfSPc5ZQrQHUje7zMA8pIryzmjgLJkMm8cRgF5yZXlnFFAWTKZNw6jgLzkynLOKKAsmcwbh1FAXnJlOWcUUJZM5o3jD11kJV+/Hb/kAAAAAElFTkSuQmCC">
			</div>
			<span class="nav_bar">
				<div class="icon">
				<van-icon name="search" size=28 color="black"/>
				</div>
				<input type="text" placeholder="搜“洪崖洞”试试" />
			</span>
			<ul class="navlist">
				<li class="navlist_item">
					<a href="/">首页</a>
				</li>
				<li class="navlist_item">
					<a href="#">出租房源</a>
				</li>
				<li class="navlist_item">
					<a href="#">开展体验</a>
				</li>
				<li class="navlist_item">
					<a href="/History">故事</a>
				</li>
				<li class="navlist_item">
					<a href="#">帮助</a>
				</li>
				<li class="navlist_item">
					<a href="/register">注册</a>
				</li>
				<li class="navlist_item">
					<a href="/login">登录</a>
				</li>
			</ul>
		
	</div>
</template>

<script>
	export default{
		
	}
</script>

<style scoped>

	.clearfix::before,
	.clearfix::after{
		content: '';
		display: table;
		clear: both;
	}
	body{
		margin: 0;
	}
	
	.pic_logo{
		margin: 5px ;
		float: left;
	}
	 .nav_bar{
		margin: 13px 0;
		float: left;
		border: 2px solid transparent;
		border-radius: 5px;	
		display: flex;
		position: relative;
	}
	.nav_bar .icon{
		position: absolute;
		left: 10px;
		top: 8px;
		z-index: 9999;
	}
	.nav_bar .fa-search{
		position: absolute;
		left: 90px;
		top: 21px;
		color: #80BDFF;
	}
	.nav_bar input:focus{
		border: 1px solid #80BDFF;
		box-shadow: 0 0 8px #80BDFF;
	}
	.nav_bar input{
		width: 400px;
		font-size: 17px;
		font-weight: 1000px;
		outline-style: none;
		border: 1px solid #CED4DA;
		border-radius: 4px;
		padding: 10px 10px 10px 55px;
		position: relative;
	}
	 .navlist{
		margin: 0;
		float: right;
		height: 80px;
	}
	 .navlist .navlist_item{
		padding: 30px 0;
		margin: 0 20px;
		float: left;
		list-style-type: none;
		text-align: center;
	}
	.navlist_item:hover{
		border-bottom: 2px solid #0F8B91;
	}
	
	.navlist_item:hover.navlist_item a{
		color: #0F8B91;
	}
	
	 .navlist a{
		font-size: 18px;
		text-decoration: none;
		color: #FF5A5F;
		font-weight: 600;
	}
</style>
