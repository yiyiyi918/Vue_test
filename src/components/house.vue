<template>
	<div class="box1">
		<div class="zt-title">
				<router-link to="/twopage">
				秋季武汉特惠房源
				</router-link>
		</div>
		<ul class="zt-btn">
					<li class="a">
						<router-link to="/family">
						江汉区
						</router-link></li>
					<li ><router-link to="/family">
						青山区
						</router-link></li>
					<li ><router-link to="/family">
						洪山区
						</router-link></li>
					<li ><router-link to="/family">
						新洲区
						</router-link></li>
					<li ><router-link to="/family">
						硚口区
						</router-link></li>
					<li ><router-link to="/family">
						汉阳区
						</router-link></li>
					<li ><router-link to="/family">
						黄陂区
						</router-link></li>
				</ul>
		<ul class="pic1">
			<li><div class="nav">
			<img src="../assets/img/1.jpg" alt=""></div>
			<div class="text">
			<span>
				<a href="">整套酒店式公寓 · 1张床</a>
			</span>
			<p>
				<a href="#">【雾都江景】洪崖洞/解放碑/穿楼地铁/ 大礼堂 网红景点打卡集合地 轻轨站旁 简约日式整租一</a>
			</p>
			<span>￥339</span>
			<span>￥424</span>
			<span>每晚</span>
			<div class="div-pj">
				<span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAJCAYAAAB5ad+lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVEhLjZRRchJBEIa7J5LyMTdIPIF4AzyBegLhBIQHoVJCgQVUCnggnsB4AsMJDCfQ3CDcID4agbb/noHsZmcn+apmd3v2396enummHOfnJzSafgtWmuGsRsPpRbDSDCfvdQyClQba0eQ0WGmggz6CC3fPxuHndQv6KVhOialpyXgK5qaOPg3mR2GmHKY5yTO0eA8d9BEeFobFCL+zZ5Z+MuDRDDqvXbt5MojR5KNefaJe3KcDHs/6+vMTDfaIKutmqRbz8AUd9PZdHtaj90vvVW9GEPlCvY4/Rimt0J2mqUWf25eWlI37aT+NkdWOp1X9x49SLcktiWtQ79O1JZ+3WioJLfMH9fvbWeAkf8KbPCI35PgqWEjD11ItyYr+Vbz27OxWr6ot5Wav1SD0pCzsOc7SFgX8fWnPcZbmT2EzLWuE3ciyonWlSoPWXbA9KFZmzXAGJGBzWCtox9O6+s03I2h7neKuo7mgDvMsqNsuNgc0LdR3FtFE9tr7puNrbMuxs3xcCLQMZolqRSJ++Xk+U3DMr+T8+oXx1mdQdCuZGvq0MjveQHbZXmS0ZTUa5uW7jpYOHOPXfu4x7BsMSuOhPI5trgCrD32/19pcrpOHhfG1nvO3upU1K+huG52pQX9fRrLrvBZHBFocVws6gtCV+nlD3U5dxwWtD9XvLpBHOLqkg80ra1QY0FpCYuj8gW7GTovv8P0eov8qp+EFpJ6UiQAAAABJRU5ErkJggg==" alt="">
				</span>
				<span>166 · 超赞房东</span>
			</div>
			</div>
			</li>
			<li><div class="nbv">
			<img src="../assets/img/2.jpg" alt=""></div>
			<div class="text">
			<span>
				<a href="">整套酒店式公寓 · 1张床</a>
			</span>
			<p>
				<a href="#">【雾都江景】洪崖洞/解放碑/穿楼地铁/ 大礼堂 网红景点打卡集合地 轻轨站旁 简约日式整租一</a>
			</p>
			<span>￥339</span>
			<span>￥424</span>
			<span>每晚</span>
			<div class="div-pj">
				<span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAJCAYAAAB5ad+lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVEhLjZRRchJBEIa7J5LyMTdIPIF4AzyBegLhBIQHoVJCgQVUCnggnsB4AsMJDCfQ3CDcID4agbb/noHsZmcn+apmd3v2396enummHOfnJzSafgtWmuGsRsPpRbDSDCfvdQyClQba0eQ0WGmggz6CC3fPxuHndQv6KVhOialpyXgK5qaOPg3mR2GmHKY5yTO0eA8d9BEeFobFCL+zZ5Z+MuDRDDqvXbt5MojR5KNefaJe3KcDHs/6+vMTDfaIKutmqRbz8AUd9PZdHtaj90vvVW9GEPlCvY4/Rimt0J2mqUWf25eWlI37aT+NkdWOp1X9x49SLcktiWtQ79O1JZ+3WioJLfMH9fvbWeAkf8KbPCI35PgqWEjD11ItyYr+Vbz27OxWr6ot5Wav1SD0pCzsOc7SFgX8fWnPcZbmT2EzLWuE3ciyonWlSoPWXbA9KFZmzXAGJGBzWCtox9O6+s03I2h7neKuo7mgDvMsqNsuNgc0LdR3FtFE9tr7puNrbMuxs3xcCLQMZolqRSJ++Xk+U3DMr+T8+oXx1mdQdCuZGvq0MjveQHbZXmS0ZTUa5uW7jpYOHOPXfu4x7BsMSuOhPI5trgCrD32/19pcrpOHhfG1nvO3upU1K+huG52pQX9fRrLrvBZHBFocVws6gtCV+nlD3U5dxwWtD9XvLpBHOLqkg80ra1QY0FpCYuj8gW7GTovv8P0eov8qp+EFpJ6UiQAAAABJRU5ErkJggg==" alt="">
				</span>
				<span>166 · 超赞房东</span>
			</div>
			</div>
			</li>
			<li><div class="ncv">
			<img src="../assets/img/3.jpg" alt=""></div>
			<div class="text">
			<span>
				<a href="">整套酒店式公寓 · 1张床</a>
			</span>
			<p>
				<a href="#">【雾都江景】洪崖洞/解放碑/穿楼地铁/ 大礼堂 网红景点打卡集合地 轻轨站旁 简约日式整租一</a>
			</p>
			<span>￥339</span>
			<span>￥424</span>
			<span>每晚</span>
			<div class="div-pj">
				<span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAJCAYAAAB5ad+lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVEhLjZRRchJBEIa7J5LyMTdIPIF4AzyBegLhBIQHoVJCgQVUCnggnsB4AsMJDCfQ3CDcID4agbb/noHsZmcn+apmd3v2396enummHOfnJzSafgtWmuGsRsPpRbDSDCfvdQyClQba0eQ0WGmggz6CC3fPxuHndQv6KVhOialpyXgK5qaOPg3mR2GmHKY5yTO0eA8d9BEeFobFCL+zZ5Z+MuDRDDqvXbt5MojR5KNefaJe3KcDHs/6+vMTDfaIKutmqRbz8AUd9PZdHtaj90vvVW9GEPlCvY4/Rimt0J2mqUWf25eWlI37aT+NkdWOp1X9x49SLcktiWtQ79O1JZ+3WioJLfMH9fvbWeAkf8KbPCI35PgqWEjD11ItyYr+Vbz27OxWr6ot5Wav1SD0pCzsOc7SFgX8fWnPcZbmT2EzLWuE3ciyonWlSoPWXbA9KFZmzXAGJGBzWCtox9O6+s03I2h7neKuo7mgDvMsqNsuNgc0LdR3FtFE9tr7puNrbMuxs3xcCLQMZolqRSJ++Xk+U3DMr+T8+oXx1mdQdCuZGvq0MjveQHbZXmS0ZTUa5uW7jpYOHOPXfu4x7BsMSuOhPI5trgCrD32/19pcrpOHhfG1nvO3upU1K+huG52pQX9fRrLrvBZHBFocVws6gtCV+nlD3U5dxwWtD9XvLpBHOLqkg80ra1QY0FpCYuj8gW7GTovv8P0eov8qp+EFpJ6UiQAAAABJRU5ErkJggg==" alt="">
				</span>
				<span>166 · 超赞房东</span>
			</div>
			</div>
			</li>
		</ul>
		<ul class="pic2">
			<li><div class="ndv">
			<img src="../assets/img/4.jpg" alt=""></div>
			<div class="text">
			<span>
				<a href="">整套酒店式公寓 · 1张床</a>
			</span>
			<p>
				<a href="#">【雾都江景】洪崖洞/解放碑/穿楼地铁/ 大礼堂 网红景点打卡集合地 轻轨站旁 简约日式整租一</a>
			</p>
			<span>￥339</span>
			<span>￥424</span>
			<span>每晚</span>
			<div class="div-pj">
				<span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAJCAYAAAB5ad+lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVEhLjZRRchJBEIa7J5LyMTdIPIF4AzyBegLhBIQHoVJCgQVUCnggnsB4AsMJDCfQ3CDcID4agbb/noHsZmcn+apmd3v2396enummHOfnJzSafgtWmuGsRsPpRbDSDCfvdQyClQba0eQ0WGmggz6CC3fPxuHndQv6KVhOialpyXgK5qaOPg3mR2GmHKY5yTO0eA8d9BEeFobFCL+zZ5Z+MuDRDDqvXbt5MojR5KNefaJe3KcDHs/6+vMTDfaIKutmqRbz8AUd9PZdHtaj90vvVW9GEPlCvY4/Rimt0J2mqUWf25eWlI37aT+NkdWOp1X9x49SLcktiWtQ79O1JZ+3WioJLfMH9fvbWeAkf8KbPCI35PgqWEjD11ItyYr+Vbz27OxWr6ot5Wav1SD0pCzsOc7SFgX8fWnPcZbmT2EzLWuE3ciyonWlSoPWXbA9KFZmzXAGJGBzWCtox9O6+s03I2h7neKuo7mgDvMsqNsuNgc0LdR3FtFE9tr7puNrbMuxs3xcCLQMZolqRSJ++Xk+U3DMr+T8+oXx1mdQdCuZGvq0MjveQHbZXmS0ZTUa5uW7jpYOHOPXfu4x7BsMSuOhPI5trgCrD32/19pcrpOHhfG1nvO3upU1K+huG52pQX9fRrLrvBZHBFocVws6gtCV+nlD3U5dxwWtD9XvLpBHOLqkg80ra1QY0FpCYuj8gW7GTovv8P0eov8qp+EFpJ6UiQAAAABJRU5ErkJggg==" alt="">
				</span>
				<span>166 · 超赞房东</span>
			</div>
			</div>
			</li>
			<li><div class="nev">
			<img src="../assets/img/5.jpg" alt=""></div>
			<div class="text">
			<span>
				<a href="">整套酒店式公寓 · 1张床</a>
			</span>
			<p>
				<a href="#">【雾都江景】洪崖洞/解放碑/穿楼地铁/ 大礼堂 网红景点打卡集合地 轻轨站旁 简约日式整租一</a>
			</p>
			<span>￥339</span>
			<span>￥424</span>
			<span>每晚</span>
			<div class="div-pj">
				<span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAJCAYAAAB5ad+lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVEhLjZRRchJBEIa7J5LyMTdIPIF4AzyBegLhBIQHoVJCgQVUCnggnsB4AsMJDCfQ3CDcID4agbb/noHsZmcn+apmd3v2396enummHOfnJzSafgtWmuGsRsPpRbDSDCfvdQyClQba0eQ0WGmggz6CC3fPxuHndQv6KVhOialpyXgK5qaOPg3mR2GmHKY5yTO0eA8d9BEeFobFCL+zZ5Z+MuDRDDqvXbt5MojR5KNefaJe3KcDHs/6+vMTDfaIKutmqRbz8AUd9PZdHtaj90vvVW9GEPlCvY4/Rimt0J2mqUWf25eWlI37aT+NkdWOp1X9x49SLcktiWtQ79O1JZ+3WioJLfMH9fvbWeAkf8KbPCI35PgqWEjD11ItyYr+Vbz27OxWr6ot5Wav1SD0pCzsOc7SFgX8fWnPcZbmT2EzLWuE3ciyonWlSoPWXbA9KFZmzXAGJGBzWCtox9O6+s03I2h7neKuo7mgDvMsqNsuNgc0LdR3FtFE9tr7puNrbMuxs3xcCLQMZolqRSJ++Xk+U3DMr+T8+oXx1mdQdCuZGvq0MjveQHbZXmS0ZTUa5uW7jpYOHOPXfu4x7BsMSuOhPI5trgCrD32/19pcrpOHhfG1nvO3upU1K+huG52pQX9fRrLrvBZHBFocVws6gtCV+nlD3U5dxwWtD9XvLpBHOLqkg80ra1QY0FpCYuj8gW7GTovv8P0eov8qp+EFpJ6UiQAAAABJRU5ErkJggg==" alt="">
				</span>
				<span>166 · 超赞房东</span>
			</div>
			</div>
			</li>
			<li><div class="nfv">
			<img src="../assets/img/6.jpg" alt=""></div>
			<div class="text">
			<span>
				<a href="">整套酒店式公寓 · 1张床</a>
			</span>
			<p>
				<a href="#">【雾都江景】洪崖洞/解放碑/穿楼地铁/ 大礼堂 网红景点打卡集合地 轻轨站旁 简约日式整租一</a>
			</p>
			<span>￥339</span>
			<span>￥424</span>
			<span>每晚</span>
			<div class="div-pj">
				<span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAJCAYAAAB5ad+lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVEhLjZRRchJBEIa7J5LyMTdIPIF4AzyBegLhBIQHoVJCgQVUCnggnsB4AsMJDCfQ3CDcID4agbb/noHsZmcn+apmd3v2396enummHOfnJzSafgtWmuGsRsPpRbDSDCfvdQyClQba0eQ0WGmggz6CC3fPxuHndQv6KVhOialpyXgK5qaOPg3mR2GmHKY5yTO0eA8d9BEeFobFCL+zZ5Z+MuDRDDqvXbt5MojR5KNefaJe3KcDHs/6+vMTDfaIKutmqRbz8AUd9PZdHtaj90vvVW9GEPlCvY4/Rimt0J2mqUWf25eWlI37aT+NkdWOp1X9x49SLcktiWtQ79O1JZ+3WioJLfMH9fvbWeAkf8KbPCI35PgqWEjD11ItyYr+Vbz27OxWr6ot5Wav1SD0pCzsOc7SFgX8fWnPcZbmT2EzLWuE3ciyonWlSoPWXbA9KFZmzXAGJGBzWCtox9O6+s03I2h7neKuo7mgDvMsqNsuNgc0LdR3FtFE9tr7puNrbMuxs3xcCLQMZolqRSJ++Xk+U3DMr+T8+oXx1mdQdCuZGvq0MjveQHbZXmS0ZTUa5uW7jpYOHOPXfu4x7BsMSuOhPI5trgCrD32/19pcrpOHhfG1nvO3upU1K+huG52pQX9fRrLrvBZHBFocVws6gtCV+nlD3U5dxwWtD9XvLpBHOLqkg80ra1QY0FpCYuj8gW7GTovv8P0eov8qp+EFpJ6UiQAAAABJRU5ErkJggg==" alt="">
				</span>
				<span>166 · 超赞房东</span>
			</div>
			</div>
			</li>
		</ul>
		<div class="bottom">
			<a href="">"查看更多武汉房源"
			<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAjUlEQVRIS+3TsQ2AIBSE4WMjR8IJtFEb6bSQKRzFUZxEDMTKBu4KG6GF5CP/A4MPlvnAQEWoyn/LtfoGAR3msaU6PYfLcy3bDpigQOVIvJUIcYgI8YgAaUiC/IlgLNxw5B6DhqTZAJgnmwPiPo+QAI8IAIeIQDkSf/wFCzf2JTN4n+FnIigVoaLVXFSuG3t4KRrJC9YYAAAAAElFTkSuQmCC">
			</a>
		</div>
	</div>
	<div class="box1">
		<div class="zt-title">
			<h3>秋季特惠房源</h3>
		</div>
		<ul class="zt-btn">
			<li class="a"><a href="#">江汉区</a></li>
			<li ><a href="#">青山区</a></li>
			<li ><a href="#">洪山区</a></li>
			<li ><a href="#">新洲区</a></li>
			<li ><a href="#">硚口区</a></li>
			<li ><a href="#">汉阳区</a></li>
			<li ><a href="#">黄陂区</a></li>
		</ul>
		<ul class="pic1">
			<li><div class="nav">
			<img src="../assets/img/7.jpg" alt=""></div>
			<div class="text">
			<span>
				<a href="">整套酒店式公寓 · 1张床</a>
			</span>
			<p>
				<a href="#">【雾都江景】洪崖洞/解放碑/穿楼地铁/ 大礼堂 网红景点打卡集合地 轻轨站旁 简约日式整租一</a>
			</p>
			<span>￥339</span>
			<span>￥424</span>
			<span>每晚</span>
			<div class="div-pj">
				<span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAJCAYAAAB5ad+lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVEhLjZRRchJBEIa7J5LyMTdIPIF4AzyBegLhBIQHoVJCgQVUCnggnsB4AsMJDCfQ3CDcID4agbb/noHsZmcn+apmd3v2396enummHOfnJzSafgtWmuGsRsPpRbDSDCfvdQyClQba0eQ0WGmggz6CC3fPxuHndQv6KVhOialpyXgK5qaOPg3mR2GmHKY5yTO0eA8d9BEeFobFCL+zZ5Z+MuDRDDqvXbt5MojR5KNefaJe3KcDHs/6+vMTDfaIKutmqRbz8AUd9PZdHtaj90vvVW9GEPlCvY4/Rimt0J2mqUWf25eWlI37aT+NkdWOp1X9x49SLcktiWtQ79O1JZ+3WioJLfMH9fvbWeAkf8KbPCI35PgqWEjD11ItyYr+Vbz27OxWr6ot5Wav1SD0pCzsOc7SFgX8fWnPcZbmT2EzLWuE3ciyonWlSoPWXbA9KFZmzXAGJGBzWCtox9O6+s03I2h7neKuo7mgDvMsqNsuNgc0LdR3FtFE9tr7puNrbMuxs3xcCLQMZolqRSJ++Xk+U3DMr+T8+oXx1mdQdCuZGvq0MjveQHbZXmS0ZTUa5uW7jpYOHOPXfu4x7BsMSuOhPI5trgCrD32/19pcrpOHhfG1nvO3upU1K+huG52pQX9fRrLrvBZHBFocVws6gtCV+nlD3U5dxwWtD9XvLpBHOLqkg80ra1QY0FpCYuj8gW7GTovv8P0eov8qp+EFpJ6UiQAAAABJRU5ErkJggg==" alt="">
				</span>
				<span>166 · 超赞房东</span>
			</div>
			</div>
			</li>
			<li><div class="nbv">
			<img src="../assets/img/8.jpg" alt=""></div>
			<div class="text">
			<span>
				<a href="">整套酒店式公寓 · 1张床</a>
			</span>
			<p>
				<a href="#">【雾都江景】洪崖洞/解放碑/穿楼地铁/ 大礼堂 网红景点打卡集合地 轻轨站旁 简约日式整租一</a>
			</p>
			<span>￥339</span>
			<span>￥424</span>
			<span>每晚</span>
			<div class="div-pj">
				<span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAJCAYAAAB5ad+lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVEhLjZRRchJBEIa7J5LyMTdIPIF4AzyBegLhBIQHoVJCgQVUCnggnsB4AsMJDCfQ3CDcID4agbb/noHsZmcn+apmd3v2396enummHOfnJzSafgtWmuGsRsPpRbDSDCfvdQyClQba0eQ0WGmggz6CC3fPxuHndQv6KVhOialpyXgK5qaOPg3mR2GmHKY5yTO0eA8d9BEeFobFCL+zZ5Z+MuDRDDqvXbt5MojR5KNefaJe3KcDHs/6+vMTDfaIKutmqRbz8AUd9PZdHtaj90vvVW9GEPlCvY4/Rimt0J2mqUWf25eWlI37aT+NkdWOp1X9x49SLcktiWtQ79O1JZ+3WioJLfMH9fvbWeAkf8KbPCI35PgqWEjD11ItyYr+Vbz27OxWr6ot5Wav1SD0pCzsOc7SFgX8fWnPcZbmT2EzLWuE3ciyonWlSoPWXbA9KFZmzXAGJGBzWCtox9O6+s03I2h7neKuo7mgDvMsqNsuNgc0LdR3FtFE9tr7puNrbMuxs3xcCLQMZolqRSJ++Xk+U3DMr+T8+oXx1mdQdCuZGvq0MjveQHbZXmS0ZTUa5uW7jpYOHOPXfu4x7BsMSuOhPI5trgCrD32/19pcrpOHhfG1nvO3upU1K+huG52pQX9fRrLrvBZHBFocVws6gtCV+nlD3U5dxwWtD9XvLpBHOLqkg80ra1QY0FpCYuj8gW7GTovv8P0eov8qp+EFpJ6UiQAAAABJRU5ErkJggg==" alt="">
				</span>
				<span>166 · 超赞房东</span>
			</div>
			</div>
			</li>
			<li><div class="ncv">
			<img src="../assets/img/9.jpg" alt=""></div>
			<div class="text">
			<span>
				<a href="">整套酒店式公寓 · 1张床</a>
			</span>
			<p>
				<a href="#">【雾都江景】洪崖洞/解放碑/穿楼地铁/ 大礼堂 网红景点打卡集合地 轻轨站旁 简约日式整租一</a>
			</p>
			<span>￥339</span>
			<span>￥424</span>
			<span>每晚</span>
			<div class="div-pj">
				<span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAJCAYAAAB5ad+lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVEhLjZRRchJBEIa7J5LyMTdIPIF4AzyBegLhBIQHoVJCgQVUCnggnsB4AsMJDCfQ3CDcID4agbb/noHsZmcn+apmd3v2396enummHOfnJzSafgtWmuGsRsPpRbDSDCfvdQyClQba0eQ0WGmggz6CC3fPxuHndQv6KVhOialpyXgK5qaOPg3mR2GmHKY5yTO0eA8d9BEeFobFCL+zZ5Z+MuDRDDqvXbt5MojR5KNefaJe3KcDHs/6+vMTDfaIKutmqRbz8AUd9PZdHtaj90vvVW9GEPlCvY4/Rimt0J2mqUWf25eWlI37aT+NkdWOp1X9x49SLcktiWtQ79O1JZ+3WioJLfMH9fvbWeAkf8KbPCI35PgqWEjD11ItyYr+Vbz27OxWr6ot5Wav1SD0pCzsOc7SFgX8fWnPcZbmT2EzLWuE3ciyonWlSoPWXbA9KFZmzXAGJGBzWCtox9O6+s03I2h7neKuo7mgDvMsqNsuNgc0LdR3FtFE9tr7puNrbMuxs3xcCLQMZolqRSJ++Xk+U3DMr+T8+oXx1mdQdCuZGvq0MjveQHbZXmS0ZTUa5uW7jpYOHOPXfu4x7BsMSuOhPI5trgCrD32/19pcrpOHhfG1nvO3upU1K+huG52pQX9fRrLrvBZHBFocVws6gtCV+nlD3U5dxwWtD9XvLpBHOLqkg80ra1QY0FpCYuj8gW7GTovv8P0eov8qp+EFpJ6UiQAAAABJRU5ErkJggg==" alt="">
				</span>
				<span>166 · 超赞房东</span>
			</div>
			</div>
			</li>
		</ul>
		<ul class="pic2">
			<li><div class="ndv">
			<img src="../assets/img/10.jpg" alt=""></div>
			<div class="text">
			<span>
				<a href="">整套酒店式公寓 · 1张床</a>
			</span>
			<p>
				<a href="#">【雾都江景】洪崖洞/解放碑/穿楼地铁/ 大礼堂 网红景点打卡集合地 轻轨站旁 简约日式整租一</a>
			</p>
			<span>￥339</span>
			<span>￥424</span>
			<span>每晚</span>
			<div class="div-pj">
				<span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAJCAYAAAB5ad+lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVEhLjZRRchJBEIa7J5LyMTdIPIF4AzyBegLhBIQHoVJCgQVUCnggnsB4AsMJDCfQ3CDcID4agbb/noHsZmcn+apmd3v2396enummHOfnJzSafgtWmuGsRsPpRbDSDCfvdQyClQba0eQ0WGmggz6CC3fPxuHndQv6KVhOialpyXgK5qaOPg3mR2GmHKY5yTO0eA8d9BEeFobFCL+zZ5Z+MuDRDDqvXbt5MojR5KNefaJe3KcDHs/6+vMTDfaIKutmqRbz8AUd9PZdHtaj90vvVW9GEPlCvY4/Rimt0J2mqUWf25eWlI37aT+NkdWOp1X9x49SLcktiWtQ79O1JZ+3WioJLfMH9fvbWeAkf8KbPCI35PgqWEjD11ItyYr+Vbz27OxWr6ot5Wav1SD0pCzsOc7SFgX8fWnPcZbmT2EzLWuE3ciyonWlSoPWXbA9KFZmzXAGJGBzWCtox9O6+s03I2h7neKuo7mgDvMsqNsuNgc0LdR3FtFE9tr7puNrbMuxs3xcCLQMZolqRSJ++Xk+U3DMr+T8+oXx1mdQdCuZGvq0MjveQHbZXmS0ZTUa5uW7jpYOHOPXfu4x7BsMSuOhPI5trgCrD32/19pcrpOHhfG1nvO3upU1K+huG52pQX9fRrLrvBZHBFocVws6gtCV+nlD3U5dxwWtD9XvLpBHOLqkg80ra1QY0FpCYuj8gW7GTovv8P0eov8qp+EFpJ6UiQAAAABJRU5ErkJggg==" alt="">
				</span>
				<span>166 · 超赞房东</span>
			</div>
			</div>
			</li>
			<li><div class="nev">
			<img src="../assets/img/11.jpg" alt=""></div>
			<div class="text">
			<span>
				<a href="">整套酒店式公寓 · 1张床</a>
			</span>
			<p>
				<a href="#">【雾都江景】洪崖洞/解放碑/穿楼地铁/ 大礼堂 网红景点打卡集合地 轻轨站旁 简约日式整租一</a>
			</p>
			<span>￥339</span>
			<span>￥424</span>
			<span>每晚</span>
			<div class="div-pj">
				<span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAJCAYAAAB5ad+lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVEhLjZRRchJBEIa7J5LyMTdIPIF4AzyBegLhBIQHoVJCgQVUCnggnsB4AsMJDCfQ3CDcID4agbb/noHsZmcn+apmd3v2396enummHOfnJzSafgtWmuGsRsPpRbDSDCfvdQyClQba0eQ0WGmggz6CC3fPxuHndQv6KVhOialpyXgK5qaOPg3mR2GmHKY5yTO0eA8d9BEeFobFCL+zZ5Z+MuDRDDqvXbt5MojR5KNefaJe3KcDHs/6+vMTDfaIKutmqRbz8AUd9PZdHtaj90vvVW9GEPlCvY4/Rimt0J2mqUWf25eWlI37aT+NkdWOp1X9x49SLcktiWtQ79O1JZ+3WioJLfMH9fvbWeAkf8KbPCI35PgqWEjD11ItyYr+Vbz27OxWr6ot5Wav1SD0pCzsOc7SFgX8fWnPcZbmT2EzLWuE3ciyonWlSoPWXbA9KFZmzXAGJGBzWCtox9O6+s03I2h7neKuo7mgDvMsqNsuNgc0LdR3FtFE9tr7puNrbMuxs3xcCLQMZolqRSJ++Xk+U3DMr+T8+oXx1mdQdCuZGvq0MjveQHbZXmS0ZTUa5uW7jpYOHOPXfu4x7BsMSuOhPI5trgCrD32/19pcrpOHhfG1nvO3upU1K+huG52pQX9fRrLrvBZHBFocVws6gtCV+nlD3U5dxwWtD9XvLpBHOLqkg80ra1QY0FpCYuj8gW7GTovv8P0eov8qp+EFpJ6UiQAAAABJRU5ErkJggg==" alt="">
				</span>
				<span>166 · 超赞房东</span>
			</div>
			</div>
			</li>
			<li><div class="nfv">
			<img src="../assets/img/12.jpg" alt=""></div>
			<div class="text">
			<span>
				<a href="">整套酒店式公寓 · 1张床</a>
			</span>
			<p>
				<a href="#">【雾都江景】洪崖洞/解放碑/穿楼地铁/ 大礼堂 网红景点打卡集合地 轻轨站旁 简约日式整租一</a>
			</p>
			<span>￥339</span>
			<span>￥424</span>
			<span>每晚</span>
			<div class="div-pj">
				<span>
					<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADYAAAAJCAYAAAB5ad+lAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsMAAA7DAcdvqGQAAAIbSURBVEhLjZRRchJBEIa7J5LyMTdIPIF4AzyBegLhBIQHoVJCgQVUCnggnsB4AsMJDCfQ3CDcID4agbb/noHsZmcn+apmd3v2396enummHOfnJzSafgtWmuGsRsPpRbDSDCfvdQyClQba0eQ0WGmggz6CC3fPxuHndQv6KVhOialpyXgK5qaOPg3mR2GmHKY5yTO0eA8d9BEeFobFCL+zZ5Z+MuDRDDqvXbt5MojR5KNefaJe3KcDHs/6+vMTDfaIKutmqRbz8AUd9PZdHtaj90vvVW9GEPlCvY4/Rimt0J2mqUWf25eWlI37aT+NkdWOp1X9x49SLcktiWtQ79O1JZ+3WioJLfMH9fvbWeAkf8KbPCI35PgqWEjD11ItyYr+Vbz27OxWr6ot5Wav1SD0pCzsOc7SFgX8fWnPcZbmT2EzLWuE3ciyonWlSoPWXbA9KFZmzXAGJGBzWCtox9O6+s03I2h7neKuo7mgDvMsqNsuNgc0LdR3FtFE9tr7puNrbMuxs3xcCLQMZolqRSJ++Xk+U3DMr+T8+oXx1mdQdCuZGvq0MjveQHbZXmS0ZTUa5uW7jpYOHOPXfu4x7BsMSuOhPI5trgCrD32/19pcrpOHhfG1nvO3upU1K+huG52pQX9fRrLrvBZHBFocVws6gtCV+nlD3U5dxwWtD9XvLpBHOLqkg80ra1QY0FpCYuj8gW7GTovv8P0eov8qp+EFpJ6UiQAAAABJRU5ErkJggg==" alt="">
				</span>
				<span>166 · 超赞房东</span>
			</div>
			</div>
			</li>
		</ul>
		<div class="bottom">
			<a href="">"查看更多武汉房源"
			<img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABkAAAAZCAYAAADE6YVjAAAAjUlEQVRIS+3TsQ2AIBSE4WMjR8IJtFEb6bSQKRzFUZxEDMTKBu4KG6GF5CP/A4MPlvnAQEWoyn/LtfoGAR3msaU6PYfLcy3bDpigQOVIvJUIcYgI8YgAaUiC/IlgLNxw5B6DhqTZAJgnmwPiPo+QAI8IAIeIQDkSf/wFCzf2JTN4n+FnIigVoaLVXFSuG3t4KRrJC9YYAAAAAElFTkSuQmCC">
			</a>
		</div>
	</div>
</template>

<script>
</script>

<style scoped>
	body{
		font-family: Circular,PingFang-SC,Hiragino Sans GB,微软雅黑,Microsoft YaHei,Heiti SC!important;;
	}
	.box1{
		width: 1080px;
		height: 860px;
		margin: 30px auto;
		background-color: #fff;
		margin-bottom: 60px;
	}
	.box1 .zt-title>a{
		text-decoration: none;
		font-size: 24.5px;
		font-weight: 800;
		color: rgba(72, 72,72);
		padding: 0 8px;
	}	
	.zt-btn{
		width: 1080px;
		float: left;
	}
	.zt-btn li{
		display:inline-block;
		height: 48px;
		width: 120px;
		font-size: 17px;
		font-weight: 700;
		line-height: 48px;
		margin: 30px 7px;
		padding:0 8px;
		text-align: center;
		border-radius: .5px;
		border: .5px solid #d8d8d8;
	}
	.zt-btn li>a{
		text-decoration: none;
	}
	.zt-btn li.a{
		border-radius: 3px;
		box-shadow: 0 7px 14px rgba(0,132,138,15);
		color: #fff!important;
		outline: none;
		border: .5px solid #00848a;
		background: #00848a;
		cursor: pointer;
	}
	.pic1{
		display: flex;
		float: left;
	}
	.pic1 li{
		flex: 1;
		float: left;
		
	}
	.pic1 li>.nav,
	.pic1 li>.nbv,
	.pic1 li>.ncv,
	.pic2 li>.ndv,
	.pic2 li>.nev,
	.pic2 li>.nfv{
		width: 344px;
		height: 229.33px;
	}
	.pic1 li>.nav>img,
	.pic1 li>.nbv>img,
	.pic1 li>.ncv>img{
		width: 100%;
	}
	.pic1 li>.text,
	 .pic1 li>.text{
		 width: 344px;
		 height: 113.6px;
	 }
	 .pic1 li,
	 .pic2 li{
		 width: 344px;
		 height: 342.925px;
		 padding: 0px 8px 12px 8px;
	 }
	.pic2{
		display: flex;
		float: left;
	}
	.pic2 li{
		flex: 1;
		float: left;
		
	}
	.pic2 li>.ndv img,
	.pic2 li>.nev img,
	.pic2 li>.nfv img{
		width: 100%;
	}
	.pic1 li a,
	.pic2 li a{
		text-decoration: none;
		color: #484848;
	}
	.pic1 li .text span:first-child a,
	.pic2 li .text span:first-child a{
		font-size: 12px;
		color: #a02f18;
		text-decoration: none;
	}
	.pic1 li .text p,
	.pic1 li .text span:nth-child(3){
		font-size: 16px;
		font-weight: 600;
	}
	.pic2 li .text p,
	.pic2 li .text span:nth-child(3){
		font-size: 16px;
		font-weight: 600;
	}
	.pic1 li .text span:last-child,
	.pic2 li .text span:last-child{
		font-size: 12px;
	}
	.box1 .bottom a{
		text-decoration: none;
		color: #00848A;
	}
	.box1 .bottom{
		font-weight: 600;
		
		font-size: 17px;
	}
	.box1 .bottom a>img{
		margin-bottom: -7px;
	}
	.pic1 li .text span:nth-child(4),
	.pic2 li .text span:nth-child(4){
		text-decoration: line-through;
	}
	.pic1 li .nav,
	.pic1 li .nbv,
	.pic1 li .ncv,
	.pic2 li .ndv,
	.pic2 li .nev,
	.pic2 li .nfv{
		overflow: hidden;
	}
	.pic1 li>.nav img,
	.pic1 li>.nbv img,
	.pic1 li>.ncv img,
	.pic2 li>.ndv img,
	.pic2 li>.nev img,
	.pic2 li>.nfv img{
		cursor: pointer;
		transition: all 2s;
	}
	.box1 .pic1 li>.nav img:hover,
	.box1 .pic1 li>.nbv img:hover,
	.box1 .pic1 li>.ncv img:hover,
	.box1 .pic2 li>.ndv img:hover,
	.box1 .pic2 li>.nev img:hover,
	.box1 .pic2 li>.nfv img:hover{
		transform: scale(1.3);
	}
</style>
